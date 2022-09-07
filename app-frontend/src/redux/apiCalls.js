import {
  loginFailure,
  loginFailureGoogle,
  loginStart,
  loginStartGoogle,
  loginSuccess,
  loginSuccessGoogle,
  logoutFailure,
  logoutStart,
  logoutSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { removeProduct } from "./cartRedux";
import axios from "axios";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const loginGoogle = async (dispatch) => {
  dispatch(loginStartGoogle());
  try {
    const res = await axios.get(
      "http://localhost:5002/api/auth/login/success",
      {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
    );
    if (res.status !== 200) {
      throw new Error(
        "google authentication has been failed or there is not a currently google session!"
      );
    }
    dispatch(loginSuccessGoogle(res.data));
  } catch (err) {
    dispatch(loginFailureGoogle());
  }
};

export const register = async (user, dispatch) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", { user });
    dispatch(registerSuccess(res.data));
  } catch (err) {
    dispatch(registerFailure());
  }
};

export const deleteProduct = async (product, dispatch) => {
  try {
    dispatch(removeProduct(product));
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailure());
    return err;
  }
};
