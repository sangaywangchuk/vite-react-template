import useSWR from "swr";
import { currentUser } from "./auth-api";

export const useCurrentUser = () => {
  return useSWR(`/user`, currentUser);
};
