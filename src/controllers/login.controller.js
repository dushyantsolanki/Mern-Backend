import { asyncHandler } from "../utils/asyncHandler.js";
import { Register } from "../models/register.model.js";
import jwt from "jsonwebtoken";

const loginData = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find user by email
    const user = await Register.findOne({ email });
    if (!user) return res.status(400).send("Invalid email or password");
    // console.log(user);
    // Compare passwords

    const isMatch = await user.isPasswordCorrect(password);
    console.log("password match", isMatch);
    if (!isMatch) return res.status(400).send("Invalid email or password");

    // Create and sign JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    // Send token to client
    res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

export { loginData };
