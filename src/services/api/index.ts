import axios from "axios";

import { ApiResponseIntercetor } from "./interceptors/ApiResponseInterceptor";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

const apiResInterceptor = new ApiResponseIntercetor();

api.interceptors.response.use(
  (response) => response,
  (err) => apiResInterceptor.hanldeError(err)
);

export default api;
