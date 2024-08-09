import { asyncHandler } from "../utils/asyncHandler.js";
import { Students } from "../models/student.model.js";

const searchStudent = asyncHandler(async (req, res) => {
  const key = req.query.name;

  console.log(key);
  if (!key)
    return res.status(400).json({ message: "search key is not found..." });
  try {
    const data = await Students.find({
      $or: [
        { name: { $regex: req.query.name, $options: "i" } },
        // { email: { $regexp: req.querey } },
      ],
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ code: error.code, message: error.message });
  }
});

export { searchStudent };
