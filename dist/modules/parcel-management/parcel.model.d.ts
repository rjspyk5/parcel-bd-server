import { Schema, Types } from "mongoose";
export declare const Parcel: import("mongoose").Model<{
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        customer: Types.ObjectId;
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
        assignedAgent?: Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        customer: Types.ObjectId;
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
        assignedAgent?: Types.ObjectId | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>, {
    customer: Types.ObjectId;
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
    assignedAgent?: Types.ObjectId | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=parcel.model.d.ts.map