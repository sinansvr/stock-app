import axios from "axios";
import { toastSuccessNotify } from "../helper/ToastNotify";

export const login = async (userData) => {
  const BASE_URL = "https://14164.fullstack.clarusway.com";

  try {
    const { data } = await axios.post(
      `${BASE_URL}/account/auth/login/`,
      userData
    );
    toastSuccessNotify("Logged in successfully");
  } catch (error) {
    console.log(error);
  }
};
