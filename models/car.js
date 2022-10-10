import mongoose from "mongoose";
import { model, models } from 'mongoose'

const Schema = mongoose.Schema;

const carSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  capacity: { type: String, required: true },
  gasoline: { type: String, required: true },
  steering: { type: String, required: true },
  old_price: { type: String, required: false },
  new_price: { type: String, required: true },
  description: { type: String, required: true },
  product_images: [
    { data: Buffer, contentType: String },
    { data: Buffer, contentType: String },
    { data: Buffer, contentType: String },
  ]
});

export const carModel=models.Cars || mongoose.model('Cars', carSchema)