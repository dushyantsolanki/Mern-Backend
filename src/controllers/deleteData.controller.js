import { asyncHandler } from "../utils/asyncHandler.js";
import { Students } from "../models/student.model.js";

const deleteData = asyncHandler(async (req, res) => {
  try {
    const response = await Students.findByIdAndDelete(req.params.id);

    if (!response) {
      // if a document is not available in collection
      return res.status(404).json({ message: "data was not found" });
    }

    res.status(200).json({ message: "data was delete successfully ..." });
    console.log("data delete sucssesfully .......");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { deleteData };
