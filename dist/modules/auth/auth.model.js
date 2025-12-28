import mongoose, { Schema } from "mongoose";
import { hashPassword } from "../../shared/utils/bcryptPassword.js";
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
});
userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    this.password = await hashPassword(this.password);
});
export const UserModel = mongoose.model('User', userSchema);
//# sourceMappingURL=auth.model.js.map