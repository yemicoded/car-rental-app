import mongoose from "mongoose";
import { model, models } from "mongoose";

const Schema=mongoose.Schema

const reviewSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    carId: { type: Schema.Types.ObjectId, ref: "Car", required: true },
    content: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true }
);

export const reviewModel = models.Review || mongoose.model("Review", reviewSchema);
