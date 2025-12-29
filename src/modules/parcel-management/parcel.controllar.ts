import type { NextFunction, Request, Response } from "express";
import { createParcelService } from "./parcel.services.js";


export const createParcel = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body;

    try {
        const result = await createParcelService(data.userId, data);


        return res.json({
            message: "Parcel booked successfully",
            success: true,
            data:result
        });

    } catch (error) {
        next(error)
    }
}