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
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";


const useAuthCall = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const login = async (userData) => {
       dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/account/auth/login/`,
        userData
      );
      dispatch(loginSuccess(data))
      navigate("/stock")
      toastSuccessNotify("Logged in successfully");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
      toastErrorNotify(error.response.data.non_field_errors[0])
    }
  };

  const logout = async () => {
        dispatch(fetchStart())
    try {
       await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`);
      dispatch(logoutSuccess())
      navigate("/")
      toastSuccessNotify("Logged out successfully");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail())
      toastErrorNotify("Could not log out!")
    }
  };

  const register = async (userData) => {
    dispatch(fetchStart())
 try {
   const { data } = await axios.post(
     `${import.meta.env.VITE_BASE_URL}/account/register/`,
     userData
   );
   dispatch(registerSuccess(data))
   navigate("/stock")
   toastSuccessNotify("Registration successful");
 } catch (error) {
   console.log(error);
   dispatch(fetchFail())
   toastErrorNotify("Registration failed")
 }
};

  return { login,logout,register }
}

export default useAuthCall