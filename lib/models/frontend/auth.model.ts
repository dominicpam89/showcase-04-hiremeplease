import { z } from "zod"

export const formLoginSchema = z.object({
     email: z.string().email("Email is not valid"),
     password: z.string().min(1, "Password is required"),
})

export const formRegisterSchema = z
     .object({
          firstName: z
               .string()
               .min(3, "Must be more than 3 characters")
               .max(30, "Must be les than 30 characters")
               .optional(),
          lastName: z
               .string()
               .min(3, "Must be more than 3 characters")
               .max(30, "Must be les than 30 characters")
               .optional(),
          email: z.string().email("Email is not valid!"),
          password: z
               .string()
               .regex(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                    "Must be minimum 6 characters, contains at least one uppercase, one lowercase, one number"
               ),
          confirmationPassword: z.string(),
     })
     .refine(
          (data) =>
               data.confirmationPassword === data.password,
          {
               message: "Confirmation doesn't match with password",
               path: ["confirmationPassword"],
          }
     )

export type FormLoginType = z.infer<typeof formLoginSchema>
export type FormRegisterType = z.infer<
     typeof formRegisterSchema
>
