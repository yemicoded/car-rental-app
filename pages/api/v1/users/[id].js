import { DBConnection } from "../../../../utils/connection";
import mongoose from "mongoose";
import { userModel as userCollection } from "../../../../models/user";

export default async function Users(req, res) {
  try {
    if (mongoose.connection.readyState !== 1) DBConnection();
    const {id} = req.query;
//     console.log(req.query);
    switch (req.method) {
      case "GET":
        const user = await userCollection.findOne({
          _id: id,
        });
        res.json(user);
        break;
    }
  } catch (error) {
    res.send(error);
  }
}
