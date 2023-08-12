// import axios from "axios";
// import { toastSuccessNotify } from "../helper/ToastNotify";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";

// export const login = async (userData) => {
//   const navigate= useNavigate();
//   const dispatch=useDispatch()


//   const BASE_URL = "https://14164.fullstack.clarusway.com";
//   dispatch(fetchStart())
//   try {
//     const { data } = await axios.post(
//       `${BASE_URL}/account/auth/login/`,
//       userData
//     );
//     dispatch(loginSuccess(data))
//     toastSuccessNotify("Logged in successfully");
//   } catch (error) {
//     console.log(error);
//     dispatch(fetchFail())
//   }
// };

import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess } from "../features/authSlice";


const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const login = async (userData) => {
    const BASE_URL = "https://14164.fullstack.clarusway.com";
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}/account/auth/login/`,
        userData
      );
      dispatch(loginSuccess(data))
      navigate("/stock")
      toastSuccessNotify("Logged in successfully");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
      toastErrorNotify("Can not log in!")
    }
  };

  const logout = async () => {
    const BASE_URL = "https://14164.fullstack.clarusway.com";
    dispatch(fetchStart())
    try {
       await axios.post(
        `${BASE_URL}/account/auth/logout/`);
      dispatch(logoutSuccess)
      navigate("/")
      toastSuccessNotify("Logged out successfully");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
      toastErrorNotify("Could not log out!")
    }
  };

  return { login,logout }
}

export default useAuthCall