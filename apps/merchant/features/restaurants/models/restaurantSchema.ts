import z from "zod";

const settingsSchema = z.object({
  isDineInEnabled: z.boolean({
    required_error: "Dine-in setting is required",
  }),
  isTakeAwayEnabled: z.boolean({
    required_error: "Take Away setting is required",
  }),
});

export const restaurantSchema = z.object({
  name: z
    .string()
    .min(4, "Restaurant Name must be at least 4 characters")
    .max(100, "Restaurant must be at most 100 characters."),
  address: z
    .string()
    .min(4, "Address must be at least 4 characters.")
    .max(100, "Address must be at most 100 characters."),
  settings: settingsSchema,
});