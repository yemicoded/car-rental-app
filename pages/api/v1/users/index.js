import nextConnect from "next-connect";
import { DBConnection } from "../../../../utils/connection";
import { userModel as userCollection } from "../../../../models/user";
import mongoose from "mongoose";
import multer from "multer";
import { Router } from "next/router";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
});

const upload = multer({
  storage: storage,
}).single("profile_img");

const apiRoute = nextConnect();

apiRoute.use(upload);

apiRoute.get(async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) DBConnection();
    const users = await userCollection.find({});
    res.json(users);
  } catch (error) {
    res.send(error);
  }
});

apiRoute.post(async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) DBConnection();
    const newUser = await userCollection.create({
      ...req.body,
      profile_img: {
        data: req.file.filename,
        contentType: 'image/png'
      }
    });
    console.log("req", newUser);
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
});

export default apiRoute;
export const config = {
  api: {
    bodyParser: false,
  },
};
