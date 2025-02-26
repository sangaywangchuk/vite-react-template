
import { axiosInstance } from "../fetcher";


export const loginInUser = (
  url: string,
  { arg }: { arg: any },
) => {
  return axiosInstance.post(url, arg);
};

export const currentUser = (
  url: string,
) => {
  return axiosInstance.get(url);
};

