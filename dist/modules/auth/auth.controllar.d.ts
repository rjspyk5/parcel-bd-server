import type { NextFunction, Request, Response } from "express";
import type { regSchemaType } from "./auth.schema.js";
export declare const login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const register: (req: Request<regSchemaType>, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=auth.controllar.d.ts.map