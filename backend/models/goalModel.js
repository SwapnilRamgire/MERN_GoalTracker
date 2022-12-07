import mongoose from "mongoose";

const goalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    text: {
      type: String,
      required: [true, "Please add the text"],
    },
  },
  { timestamps: true }
);

const Goal = mongoose.model("goal", goalSchema);

export { Goal };
