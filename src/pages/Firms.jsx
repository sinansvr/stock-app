import { Typography, Button, Grid } from "@mui/material"
import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import { useSelector } from "react-redux"
import FirmCard from "../components/firmCard"

const Firms = () => {
  const { getStockData } = useStockCall()
  const {firms}=useSelector(state=>state.stock)
  useEffect(() => {
    getStockData("firms")
  }, [])
// console.log(firms)
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>Frims</Typography>
      <Button variant="contained" >NEW FIRM</Button>

      <Grid container spacing={2} justifyContent={"center"}>
        {firms?.map((item)=>(
        <Grid item key={item.id}>
          <FirmCard firm={item}/>
        </Grid>))}        
      </Grid>
    </div>

  )
}

export default Firms