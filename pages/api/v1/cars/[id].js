import { DBConnection } from "../../../../utils/connection";
import mongoose from "mongoose";
import { carModel as carCollection } from "../../../../models/car";

export default async function Cars(req, res) {
  try {
    if (mongoose.connection.readyState !== 1) DBConnection();
    const { id } = req.query;
    switch (req.method) {
      case "GET":
        const car = await carCollection.findOne({ _id: id });
        res.json(car);
        break;
      case "PUT":
        const updatedCar = await carCollection.findOneAndUpdate(
          { _id: id },
          req.body,
          { new: true }
        );
        res.json(updatedCar);
        break;
      case "DELETE":
        const deletedCar = carCollection.findOneAndRemove({ _id: id });
        res.json(deletedCar);
        break;
    }
  } catch (error) {
    console.log(error);
  }
}
