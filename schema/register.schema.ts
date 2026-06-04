import {z} from "zod"
export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Full name must be atleast 2 characters"),
    email: z.string().email("Invalid Email Format"),
    phoneNumber: z.string().min(10, "Phone Number Must be Atleast 10 digits"),
    department: z.string().min(1, "Department is Required"),
    attendance: z.string().min(1, "Atendence is required"),
    graduationYear: z.string().min(1, "Graduation year is required"),
    password: z.string().min(8, "password must be atleast 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type RegisterFormData=z.infer<typeof registerSchema>