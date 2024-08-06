import { asyncHandler } from "../utils/asyncHandler.js";
import { Students } from "../models/student.model.js";

const idWiseStudent = asyncHandler(async (req, res) => {
  try {
    const data = await Students.findById(req.params.id).exec();
    if (!data) {
      // if a document is not available in collection
      return res.status(404).json({ message: "User not found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ code: "hello", message: error.message });
  }
});

export { idWiseStudent };
