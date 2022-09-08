import axios from "axios";

const BASE_URL = `http://localhost:${
  process.env.REACT_APP_EXPRESS_PORT || "5000"
}/api/`;
const TOKEN = `http://localhost:${
  process.env.REACT_APP_EXPRESS_PORT || "5000"
}/api/`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
