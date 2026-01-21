import { cookies } from "next/headers";
import { user } from "../models/user";
import { webResponse } from "@/schema/webResponse";

const baseUrl = process.env.NEXT_PUBLIC_USERS_API_URL;


export const getUser = async () => {
  const cookieData = await cookies();
  const token = cookieData.get("token");  

  if (!token) {
    throw new Error("Session has expired, please log in again.");
  }

  const response = await fetch(`${baseUrl}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
      "Content-Type": "application/json",
    },
  });

  const result = await response.json() as webResponse<user>;  

  return result;
};
