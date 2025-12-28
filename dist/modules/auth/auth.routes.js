import { Router } from "express";
import { login } from "./auth.controllar.js";
export const authRouter = Router();
authRouter.get("/login", login);
//# sourceMappingURL=auth.routes.js.map