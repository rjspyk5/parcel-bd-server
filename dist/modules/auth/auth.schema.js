import z from "zod/v3";
export const registerSchema = z.object({
    email: z.string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string"
    }),
    password: z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string"
    }),
    role: z.string({
        required_error: "Role is required",
        invalid_type_error: "Role must be a string"
    })
});
export const loginSchema = z.object({
    email: z.string(),
    password: z.string()
});
//# sourceMappingURL=auth.schema.js.map