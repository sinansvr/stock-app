import { Typography, Button } from "@mui/material"
// import { Button } from "@mui/material/Button"
import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"




const Firms = () => {
  const { token } = useSelector(state => state.auth)

  const getFirms = async () => {
    try {
      const { data } = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`, { headers: { Authorization: `Token ${token}` } })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getFirms()
  }, [])



  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>Frims</Typography>
      <Button variant="contained" >NEW FIRM</Button>
    </div>
  )
}

export default Firms