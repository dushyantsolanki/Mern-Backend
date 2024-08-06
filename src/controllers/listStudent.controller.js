import { asyncHandler } from "../utils/asyncHandler.js";
import { Students } from "../models/student.model.js";

const fetchAllStudent = asyncHandler(async (req, res) => {
  try {
    const data = await Students.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ code: error.code, message: error.message });
  }
});

export { fetchAllStudent };
