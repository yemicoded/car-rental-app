import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
      userId: {},
      carId: {},
}, {timestamps:true})