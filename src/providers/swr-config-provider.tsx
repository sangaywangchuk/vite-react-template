import { SWRConfig, SWRConfiguration } from "swr";
import { ReactNode } from "react";
import fetcher from "@/services/fetcher";

export default function SWRConfigProvider({
  children,
}: {
  children: ReactNode;
}) {
  const options: SWRConfiguration = {
    fetcher,
    errorRetryCount: 0,
    revalidateOnFocus: false,
  };
  return <SWRConfig value={options}>{children}</SWRConfig>;
}