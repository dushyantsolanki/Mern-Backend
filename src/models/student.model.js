import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      // unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    hobby: {
      type: [String],
      default: [],
    },

    countrys: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Students = mongoose.model("Students", studentSchema);

export { Students };
