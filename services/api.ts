import axios from "axios";

const API_ENDPOINT = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE
});

export default API_ENDPOINT;