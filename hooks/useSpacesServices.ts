"use client";
import { getSpacesServices } from "@/services/spacesServices";
import { useQuery } from "@tanstack/react-query";

export function useSpacesServices() {
  return useQuery({
    queryKey: ["spaces-services"],
    queryFn: getSpacesServices,
  });
}
