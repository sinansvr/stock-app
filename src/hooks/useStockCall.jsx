import { useDispatch } from "react-redux"
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice"
import { toastSuccessNotify } from "../helper/ToastNotify"
import useAxios from "./useAxios"

const useStockCall = () => {
    const { axiosWithToken } = useAxios()
    const dispatch = useDispatch()

    const getStockData = async (url) => {

        dispatch(fetchStart())
        try {
            const { data } = await axiosWithToken(`/stock/${url}/`)
            dispatch(getStockSuccess({ data, url }))
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
        }
    }

    const deleteStockData = async (url, id) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`/stock/${url}/${id}/`)
            toastSuccessNotify(`${url} deleted successfully`)
            getStockData(url)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastSuccessNotify(`${url} can not be deleted!`)
        }
    }

    const postStockData = async (url,info) => {
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`/stock/${url}/`,info)
            toastSuccessNotify(`${url} posted successfully`)
            getStockData(url)
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastSuccessNotify(`${url} can not be posted!`)
        }
    }


    return { getStockData, deleteStockData,postStockData }
}

export default useStockCall