import { z } from "zod";
const  signupSchema = z
  .object({
    name: z.string().min(2, "Name is required"),
    email: z.email("Invalid email"),
    password: z.string().min(6, "Min 6 characters"),
    confirmPassword: z.string().min(6, "Min 6 characters"),
    organization: z.string().optional(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to terms",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

  export default signupSchema