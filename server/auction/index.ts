import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import bodyParser from "body-parser";
import auctionRoutes from "./routes/auctionRoutes";
import * as ampq from "amqplib/callback_api";
import Auction from './model/auctionModel';
import Bidder from './model/bidderModel';
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const dbURI = 'mongodb://127.0.0.1/micro-services';

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1/auction`);
    console.log("MongoDB connected!!");
    app.listen(8085, () => {
      console.log(`Server is super at http://localhost:8085`);
    });
    ampq.connect(
      "amqps url has to be given here",
      (error0, connection) => {
        if (error0) {
          throw error0;
        }
        connection.createChannel((error1, channel) => {
          if (error1) {
            throw error1;
          }
          const queue = "product-created";
          const bidqueue = "bidcreated";

          channel.assertQueue(queue, { durable: false });

          app.use("/", auctionRoutes);

          channel.consume(queue,async (msg) => {
              console.log("seller que...");
              const eventProduct = JSON.parse(msg.content.toString())
              const product = new Auction(eventProduct);
              // const test = product._id.toString();
              // product.productId = test
              console.log("product:",product);
              await product.save()
            },
            {
              noAck: true,
            }
          );
          channel.consume(bidqueue,async (msg) => {
            console.log("Bidder que...");
            const eventBidder = JSON.parse(msg.content.toString())
            //console.log('eventBidder:',eventBidder)
            //console.log('eventBidder:',eventBidder.bidders[0].product[0].productId);
            // console.log('eventBidder:',eventBidder.product[0].productId);
            const bidder = new Bidder(eventBidder);
            const productId = eventBidder.product[0].productId;
            const bidAmount = eventBidder.product[0].bidAmount;
            bidder.productId = productId
            bidder.bidAmount = bidAmount
            console.log('bidder:',bidder);
           // bidder.bidders.push({productId:'productId'})
            // bidder.productId = productId;
            // bidder.bidAmount = bidAmount;
            // await bidder.save()
            //const biddingDetails = bidder.bidders;
            await bidder.save()
          },
          {
            noAck: true,
          }
        );
          process.on('beforeExit',()=>{
            console.log('closing');
            connection.close();
          })
        });
      }
    );
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

connectDB();

// app.listen(8083, () => {
//   console.log(`Server is running at http://localhost:8083`);
// });
