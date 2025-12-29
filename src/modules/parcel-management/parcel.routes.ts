import { Router } from "express";
import { createParcel } from "./parcel.controllar.js";
import { validateReq } from "../../shared/middleware/validateRequest.js";
import { parcelSchema } from "./parcel.schema.js";


export const parcelRouter = Router();

parcelRouter.post(
  "/create",
  validateReq(parcelSchema),
  createParcel
);
