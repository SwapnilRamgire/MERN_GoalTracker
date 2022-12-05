import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add the text"],
    },
  },
  { timestamps: true }
);

const Goal = mongoose.model("goal", goalSchema);

export { Goal };
