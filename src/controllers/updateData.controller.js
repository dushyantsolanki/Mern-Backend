import { asyncHandler } from "../utils/asyncHandler.js";
import { Students } from "../models/student.model.js";

const updateData = asyncHandler(async (req, res) => {
  try {
    const response = await Students.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // if a document is not available in collection
    if (!response) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(201).json(response);
    console.log("update sucessfully .....", response);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export { updateData };
