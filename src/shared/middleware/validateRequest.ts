import type { NextFunction, Request, Response } from "express"
import { ZodSchema } from "zod/v3";

export const validateReq = (schema: ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error: any) {
            next(error)
        }
    }
}