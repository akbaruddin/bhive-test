"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type TQueryWrapper = {
  children: React.ReactNode;
}

export default function QueryWrapper({ children }: TQueryWrapper){
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}