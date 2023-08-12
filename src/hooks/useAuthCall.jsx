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
import { toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";


const useAuthCall = () => {
  const navigate= useNavigate();
  const dispatch=useDispatch()


  const login = async (userData) => {
  const BASE_URL = "https://14164.fullstack.clarusway.com";
  dispatch(fetchStart())
  try {
    const { data } = await axios.post(
      `${BASE_URL}/account/auth/login/`,
      userData
    );
    dispatch(loginSuccess(data))
    toastSuccessNotify("Logged in successfully");
  } catch (error) {
    console.log(error);
    dispatch(fetchFail())
  }
};


  return {login}
}

export default useAuthCall