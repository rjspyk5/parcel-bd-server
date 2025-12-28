import type { NextFunction, Request, Response } from "express";
import type { ApiError } from "./createCustomError.js";

export const errorHandeler = async (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode ?? 500;
    return res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
    });

}