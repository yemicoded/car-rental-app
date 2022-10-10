import { DBConnection } from "../../../../utils/connection";
import multer from "multer";
import nextConnect from "next-connect";
import mongoose from "mongoose";
import { carModel as carCollection } from "../../../../models/car";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/upload/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).fields([
  { name: "prod_img1", maxCount: 1 },
  { name: "prod_img2", maxCount: 1 },
  { name: "prod_img3", maxCount: 1 },
]);

const apiRoute = nextConnect();

apiRoute.use(upload);

const categoryHandler = (category) => {
  category;
};

apiRoute.get(async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) DBConnection();

    if (req.query.category) {
      const categories = req.query.category.split(",");
      const cars = await carCollection
        .find({category: categories})
        .sort({ _id: -1 });
      res.json(cars);
    }

    const cars = await carCollection.find({}).sort({ _id: -1 });
    res.json(cars);
  } catch (error) {
    console.log(error);
  }
});

apiRoute.post(async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) DBConnection();
    const newCar = await carCollection.create({
      ...req.body,
      product_images: [
        {
          data: req.files.prod_img1[0].filename,
          contentType: "image/png",
        },
        {
          data: req.files.prod_img2[0].filename,
          contentType: "image/png",
        },
        {
          data: req.files.prod_img3[0].filename,
          contentType: "image/png",
        },
      ],
    });
    res.send(newCar);
  } catch (error) {
    res.send(error);
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
