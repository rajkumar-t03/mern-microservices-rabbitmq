import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import bodyParser from 'body-parser';
import userRoutes from "./routes/buyerRoutes";

dotenv.config();


const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//const dbURI = 'mongodb://127.0.0.1/micro-services';

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1/buyer`);
    console.log("MongoDB connected!!");
    app.listen(8083, () => {
      console.log(`Server is running at http://localhost:8083`);
    });
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

connectDB();

app.use("/", userRoutes);


