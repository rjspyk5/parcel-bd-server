import type { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod/v3";
export declare const validateReq: (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateRequest.d.ts.map