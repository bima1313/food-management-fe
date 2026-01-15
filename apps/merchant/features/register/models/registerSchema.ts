import z from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .max(100, "email must be at most 100 characters."),
  username: z
    .string()
    .min(4, "username must be at least 4 characters.")
    .max(100, "username must be at most 100 characters."),
  name: z
    .string()
    .min(4, "name must be at least 4 characters.")
    .max(100, "name must be at most 100 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(100, "Password must be at most 100 characters."),
});