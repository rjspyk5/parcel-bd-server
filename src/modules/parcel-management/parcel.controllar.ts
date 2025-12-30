import type { NextFunction, Request, Response } from "express";
import { createParcelService, getAllParcelsService } from "./parcel.services.js";


export const createParcel = async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body;

    try {
        const result = await createParcelService(data.userId, data);


        return res.json({
            message: "Parcel booked successfully",
            success: true,
            data: result
        });

    } catch (error) {
        next(error)
    }
}

export const getAllParcels = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getAllParcelsService()
        return res.json({ success: true, data: result, message: "Parcels found successfully" })
    } catch (error) {
        next(error)
    }
}