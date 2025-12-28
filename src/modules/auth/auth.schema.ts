
import z from "zod/v3";

export const registerSchema = z.object({
    email: z.string(),
    password: z.string(),
    role: z.string()
})


export const loginSchema = z.object({
    email: z.string(),
    password: z.string()
})


export type loginSchemaType = z.infer<typeof loginSchema>
export type regSchemaType = z.infer<typeof registerSchema>