import type { NextFunction, Request, Response } from "express";
import type { ApiError } from "./createCustomError.js";
export declare const errorHandeler: (err: ApiError, req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=errorHandeler.d.ts.map