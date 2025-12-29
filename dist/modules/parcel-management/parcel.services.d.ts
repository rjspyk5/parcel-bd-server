export declare const createParcelService: (userId: string, payload: any) => Promise<(import("mongoose").Document<unknown, {}, {
    customer: import("mongoose").Types.ObjectId;
    pickup: {
        address: string;
        lat: number;
        lng: number;
    };
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
    delivery: {
        address: string;
        lat: number;
        lng: number;
    };
    parcelType: string;
    paymentMethod: "COD" | "Prepaid";
    codAmount: number;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    customer: import("mongoose").Types.ObjectId;
    pickup: {
        address: string;
        lat: number;
        lng: number;
    };
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
    delivery: {
        address: string;
        lat: number;
        lng: number;
    };
    parcelType: string;
    paymentMethod: "COD" | "Prepaid";
    codAmount: number;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
export declare const getAllParcelsService: () => Promise<(import("mongoose").Document<unknown, {}, {
    customer: import("mongoose").Types.ObjectId;
    pickup: {
        address: string;
        lat: number;
        lng: number;
    };
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
    delivery: {
        address: string;
        lat: number;
        lng: number;
    };
    parcelType: string;
    paymentMethod: "COD" | "Prepaid";
    codAmount: number;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    customer: import("mongoose").Types.ObjectId;
    pickup: {
        address: string;
        lat: number;
        lng: number;
    };
    status: "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delivered" | "Failed";
    delivery: {
        address: string;
        lat: number;
        lng: number;
    };
    parcelType: string;
    paymentMethod: "COD" | "Prepaid";
    codAmount: number;
    assignedAgent?: import("mongoose").Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
})[]>;
//# sourceMappingURL=parcel.services.d.ts.map