import axios from "axios";
import { API_URL } from "@env";

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default instance;
