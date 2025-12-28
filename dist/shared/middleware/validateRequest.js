import { ZodSchema } from "zod/v3";
export const validateReq = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    };
};
//# sourceMappingURL=validateRequest.js.map