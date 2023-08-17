import { Typography, Button, Grid } from "@mui/material"
import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"
import { useSelector } from "react-redux"
import FirmCard from "../components/firmCard"
import FirmModal from "../components/FirmModal"
import { useState } from "react"

const Firms = () => {
  const { getStockData } = useStockCall()
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const {firms}=useSelector(state=>state.stock)
  useEffect(() => {
    getStockData("firms")
  }, [])
// console.log(firms)
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>Frims</Typography>

      <Button variant="contained" onClick={handleOpen}>NEW FIRM</Button>

      
      <FirmModal handleClose={handleClose} open={open}/>

      <Grid container spacing={2} justifyContent={"center"}>
        {firms?.map((item)=>(
        <Grid item key={item.id}>
          <FirmCard firm={item} open={open}/>
        </Grid>))}        
      </Grid>
      
    </div>

  )
}

export default Firms