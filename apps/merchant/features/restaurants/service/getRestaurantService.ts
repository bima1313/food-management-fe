import { webResponse } from "@/schema/webResponse";
import { restaurants } from "../models/restaurant";
import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_MERCHANTS_API_URL;

export const getRestaurantsService = async () => {
  const cookieData = await cookies();
  const token = cookieData.get("token");  

  if (!token) {
    throw new Error("Session has expired, please log in again.");
  }

  const response = await fetch(`${baseUrl}/restaurants`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json() as webResponse<restaurants>;  

  return result;
};