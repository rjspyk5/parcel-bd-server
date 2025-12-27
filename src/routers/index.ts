import { Router } from "express";
export const routerEntry=Router();

routerEntry.use("/users",usrRouter)