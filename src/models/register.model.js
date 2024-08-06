import mongoose from "mongoose";
import bcrypt from "bcrypt";
const registerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required ...."],
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address...",
      ],
    },
    password: {
      type: String,
      required: [true, "password is required...."],
      trim: true,
      minlength: [8, "password length is not 8 or more than 8 characters...."],
    },
  },
  { timestamps: true }
);

registerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

registerSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Register = mongoose.model("Register", registerSchema);
export { Register };
