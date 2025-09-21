import { z } from 'zod';

export const signupSchema = z.object({
  username: z.string().min(4, 'Username must be at least 4 characters').max(8, 'Username must be at most 8 characters'),
  email: z.email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  avatarColor: z.string({error: "Invalid avatar color"}),
  avatarImage: z.string({error: "Invalid avatar image"})
});
