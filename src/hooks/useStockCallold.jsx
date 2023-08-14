import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice"
import { toastSuccessNotify } from "../helper/ToastNotify"

const useStockCall = () => {

    const { token } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const getStockData = async (url) => {
        
        dispatch(fetchStart())
        try {
            const { data } = await axios(`${import.meta.env.VITE_BASE_URL}/stock/${url}/`, { headers: { Authorization: `Token ${token}` } })
            // let payload={data,url}
            // dispatch(getStockSuccess(payload))
            dispatch(getStockSuccess({data,url}))

        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        } 
    }

    const deleteStockData = async(url,id) =>{
        dispatch(fetchStart())
        try {
            await axios.delete(`${import.meta.env.VITE_BASE_URL}/stock/${url}/${id}/`, { headers: { Authorization: `Token ${token}` } })
            toastSuccessNotify(`${url} deleted successfully`)
            getStockData(url)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastSuccessNotify(`${url} can not be deleted!`)
        }
    }

    // const getFirms = async () => {
    //     try {
    //         const { data } = await axios(`${import.meta.env.VITE_BASE_URL}/stock/firms/`, { headers: { Authorization: `Token ${token}` } })
    //         dispatch(getFirmsSuccess(data))

    //     } catch (error) {
    //         dispatch(fetchFail())
    //         console.log(error)
    //     }
    // }

    return { getStockData, deleteStockData }
}

export default useStockCall