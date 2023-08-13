import { Typography, Button } from "@mui/material"
// import { Button } from "@mui/material/Button"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice"




const Firms = () => {
  const { token } = useSelector(state => state.auth)
  const dispatch= useDispatch()

  dispatch(fetchStart())
  const getFirms = async () => {
    try {
      const { data } = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`, { headers: { Authorization: `Token ${token}` } })
      dispatch(getFirmsSuccess(data))

    } catch (error) {
      dispatch(fetchFail())
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