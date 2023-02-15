import express from 'express';
//const blogController = require('../controllers/buyerController')
import * as uuid from "uuid";
import {set, get} from '../controllers/sellerController'
import * as ampq from 'amqplib/callback_api'

const productRoutes = express.Router();

ampq.connect('amqps://ngavliaa:W2OzZsLzevaw1UOTxY-bJoKKQ7k9nt0w@puffin.rmq2.cloudamqp.com/ngavliaa', (error0, connection)=>{
    if(error0){
        throw error0;
    }
    connection.createChannel((error1, channel)=>{
        if(error1){
            throw error1
        }
        productRoutes.get('/', get);
       
        productRoutes.post('/', (req,res,next)=>{
            const uniqueId =  uuid.v4();
            console.log('UniqueID:',uniqueId);
            req.body.productId = uniqueId;
            console.log('productId:',req.body)
            channel.sendToQueue('product-created',Buffer.from(JSON.stringify(req.body)))
            next()
        },set);
        process.on('beforeExit',()=>{
            console.log('closing');
            connection.close();
          })
    })


})


export default productRoutes

// userRoutes.get('/', (req,res)=>{
//  res.send(`success get`)
// })