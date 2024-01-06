import axios from "axios";

const baseURL = 'http://localhost:8000/api/'

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
  });
  
  export default axiosInstance;