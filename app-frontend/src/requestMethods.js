import axios from "axios";

const BASE_URL = `${
  process.env.REACT_APP_BACKEND_URL !== undefined
    ? process.env.REACT_APP_BACKEND_URL
    : "http://localhost:5000"
}/api/`;
const TOKEN = `${
  process.env.REACT_APP_BACKEND_URL !== undefined
    ? process.env.REACT_APP_BACKEND_URL
    : "http://localhost:5000"
}/api/`;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
