import mongoose from "mongoose";
import { model, models } from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    profile_img: {data:Buffer, contentType:String}
  },
  { timestamps: true }
);

export const userModel = models.User || mongoose.model("User", userSchema);
