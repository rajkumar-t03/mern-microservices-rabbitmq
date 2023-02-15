import mongoose, { Schema, model } from "mongoose";

// Document interface

interface Product {
  bidAmount: String;
  productId: String;
}

interface IBidder {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  phone: string;
  email: string;
  productId: string;
  bidAmount: string
}

// Schema
const schema = new Schema<IBidder>({
  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  address: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  pin: { type: String, required: false },
  phone: { type: String, required: false },
  email: { type: String, required: false },
  productId: { type: String, required: false },
  bidAmount: { type: String, required: false }
});

// `UserModel` will have `name: string`, etc.
const Bidder = model<IBidder>("Bidder", schema);

export default Bidder;
