import {z} from "zod";

export const loginSchema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters').max(8, 'Username must be at most 8 characters'),
  password: z.string().min(8, "Password must be at least 8 characters")
})