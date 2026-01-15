import { loginSchema } from "../models/LoginSchema";
import { z } from "zod";
import { tokenResponse } from "../models/response";
import Cookies from "js-cookie";
import { webResponse } from "@/schema/webResponse";

const baseUrl = process.env.NEXT_PUBLIC_AUTH_API_URL;

export const loginService = async (values: z.infer<typeof loginSchema>) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  const result = (await response.json()) as webResponse<tokenResponse>;

  if (!response.ok) {
    throw new Error(result.error);
  }

  Cookies.set("token", result.data.token, { expires: 1, secure: true });

  return result;
};
