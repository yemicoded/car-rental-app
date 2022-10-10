import {
  reviewModel as reviewCollection,
  reviewModel,
} from "../../../../models/review";
import { DBConnection } from "../../../../utils/connection";
import mongoose from "mongoose";

export default async function Reviews(req, res) {
  try {
    if (mongoose.connection.readyState !== 1) DBConnection();
    switch (req.method) {
      case "GET":
        const reviews = await reviewCollection.find({});
        res.json(reviews);
        break;
      case "POST":
        const newReview = await reviewCollection.create(req.body);
        res.json(newReview);
        break;
    }
  } catch (error) {
    console.log(error);
  }
}
