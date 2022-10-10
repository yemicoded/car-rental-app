import mongoose from "mongoose";
import { DBConnection } from "../../../../utils/connection";
import { useRouter } from "next/router";
import { reviewModel as reviewCollection } from "../../../../models/review";

export default async function Review() {
  const router = useRouter(req, res);
  const { id } = router.query;

  try {
    if (mongoose.connection.readyState !== 1) {
      DBConnection();
    }
    switch (req.method) {
      case "PUT":
        const updatedReview = await reviewCollection.findOneAndUpdate(
          { _id: id },
          req.body,
          { new: true }
        );
        res.status(200).json(requestedReview);
        break;
      case "DELETE":
        const deletedReview = await reviewCollection.findOneAndRemove({
          _id: id,
        });
        res.status(200).json(deletedReview);
    }
  } catch (error) {
    console.log(error);
  }
}
