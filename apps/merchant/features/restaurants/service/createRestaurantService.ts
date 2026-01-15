import { z } from "zod";
import Cookies from "js-cookie";
import { restaurantSchema } from "../models/restaurantSchema";

const baseUrl = process.env.NEXT_PUBLIC_MERCHANTS_API_URL;

export const createRestaurantService = async (
  values: z.infer<typeof restaurantSchema>
) => {
  const token = Cookies.get("token");

  if (!token) {
    throw Error("Session has expired, please log in again." + token);
  }

  const response = await fetch(`${baseUrl}/restaurants/register`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error);
  }

  return result;
};
