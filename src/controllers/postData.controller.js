import { asyncHandler } from "../utils/asyncHandler.js";
import { Students } from "../models/student.model.js";

const postData = asyncHandler(async (req, res) => {
  try {
    const dataModel = new Students(req.body);
    await dataModel.save();
    res.status(201).json(dataModel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { postData };
