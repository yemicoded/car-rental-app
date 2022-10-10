import { userModel as userCollection, userModel } from "../../../../models/user";
import {DBConnection} from '../../../../utils/connection'
//REGISTRATION
export default async function SignUp(req, res) {
  try {
    DBConnection()
    if (req.method === "POST") {
      const newUser = await userCollection.create(req.body);
      res.json(newUser);
    } else {
      res.send("working");
    }
  } catch (error) {
    console.log(error)
  }
}
