import mongoose from "mongoose";

export const DBConnection = () =>
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
