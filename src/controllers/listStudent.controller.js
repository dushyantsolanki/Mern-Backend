import { asyncHandler } from "../utils/asyncHandler.js";
import { Students } from "../models/student.model.js";

const fetchAllStudentByQuery = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;
  try {
    const skip = (page - 1) * limit;
    console.log("for Infinet scrolling  page : ", page);
    const data = await Students.find().skip(skip).limit(limit).exec();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ code: error.code, message: error.message });
  }
});

export { fetchAllStudentByQuery };
