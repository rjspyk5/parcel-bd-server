import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true }
});
userSchema.pre("save", function () {
    if (!this.isModified("password")) {
        return;
    }
    this.password = "have to hash password";
});
export const UserModel = mongoose.model('User', userSchema);
//# sourceMappingURL=auth.model.js.map