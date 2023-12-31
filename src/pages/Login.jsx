import Avatar from "@mui/material/Avatar"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import { Link } from "react-router-dom"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Button } from "@mui/material"
import { Form, Formik } from "formik"
import { object, string } from "yup"
import useAuthCall from "../hooks/useAuthCall"

const LoginSchema = object({  
  email: string()
  .email("Geçerli bie email giriniz")
  .required("Lütfen bu alanı doldurunuz"),
  password: string()
  .required("Lütfen bu alanı doldurunuz")
  .min(8,"En az 8 karakter giriniz")
  .max(20,"En fazla 20 karakter giriniz")
  .matches(/\d+/,"en az bir rakam içermelidir")
  .matches(/[a-z]/,"en az bir Küçük harf içermelidir")
  .matches(/[A-Z]/,"en az bir Büyük harf içermelidir")
  
});

const Login = () => {

  const {login} =useAuthCall()

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} mb={3}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="secondary.light"
          >
            Login
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values, action) => {
              login(values)
              // toastSuccessNotify("Logged in successfully")
              // navigate("/stock")
              action.resetForm()
              action.setSubmitting(false)
            }}
          >
            {({handleChange,handleBlur,values,errors,touched})=>(
              <Form>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  label="Email"
                  name="email"
                  id="email"
                  type="email"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  label="password"
                  name="password"
                  id="password"
                  type="password"
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={errors.password}
                />
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Box>
            </Form>
            )}
            
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/register">Do you have not an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          <Container>
            <img src={image} alt="img" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
