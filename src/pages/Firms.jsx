import { Typography, Button } from "@mui/material"
import { useEffect } from "react"
import useStockCall from "../hooks/useStockCall"

const Firms = () => {
  const { getStockData } = useStockCall()
  useEffect(() => {
    getStockData("firms")
  }, [])

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={3}>Frims</Typography>
      <Button variant="contained" >NEW FIRM</Button>
    </div>
    
  )
}

export default Firms