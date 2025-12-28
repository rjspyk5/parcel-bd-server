import type { NextFunction, Request, Response } from "express"
import type { regSchemaType } from "./auth.schema.js";
import { loginService, registrationService } from "./auth.service.js";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body ?? {};
    try {
        const token = await loginService({ email, password })
        res.json({
            success: true,
            message: "User created successfully",
            data: token
        })
    } catch (error: Error | any) {
        next(error)
    }

}

export const register = async (req: Request<regSchemaType>, res: Response, next: NextFunction) => {
    const { email, password, role } = req.body ?? {};
    try {
        const user = await registrationService({ email, password, role })
        return res.json({
            success: true,
            message: "User created successfully",
            data: [user]
        })

    } catch (error) {
        next(error)
    }
}



export const me = async (req: Request, res: Response) => {
    res.send("me")
}