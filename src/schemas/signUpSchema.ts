import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username is be atleast 2 characters")
  .max(20, "username must not be more than 20")
  .regex(/^[a-zA-Z0-9_]+$/, "must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email("invalid email address"),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});
