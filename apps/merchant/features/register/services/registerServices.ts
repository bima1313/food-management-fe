import { z } from "zod";
import { registerSchema } from "../models/registerSchema";

const baseUrl = process.env.NEXT_PUBLIC_USERS_API_URL;

export const registerService = async (values: z.infer<typeof registerSchema>) => {
  const response = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
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
