import { asyncHandler } from "../utils/asyncHandler.js";
import { Register } from "../models/register.model.js";

const registerData = asyncHandler(async (req, res) => {
  try {
    const dataModel = new Register(req.body);
    await dataModel.save();
    res.status(201).json(dataModel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { registerData };
