import axios, { AxiosError } from "axios";
import { toast } from "sonner";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      config.headers.Authorization = token.replace("Bearer ", "");
    }
    return config;
  },
  (error) => {
    console.error("Request error:", error.message);
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<{ error?: string }>) => {
    const { status, data } = error?.response || {};
    if (!status) return Promise.reject(error);
    switch (status) {
      case 401: {
        localStorage.removeItem('TOKEN');
        break;
      }
      case 404: {
        // toast.error(data?.error ?? "Resource not found");
        break;
      }
      case 500: {
        toast.error(data?.error ?? "Internal server error");
        break;
      }
    }
    return Promise.reject(error);
  },
);

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default fetcher;
