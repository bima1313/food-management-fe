import z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, "email must be at most 100 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password must be at most 100 characters."),
});