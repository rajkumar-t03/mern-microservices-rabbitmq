import express from 'express';
import {set, get} from '../controllers/buyerController'
import * as ampq from 'amqplib/callback_api'
const userRoutes = express.Router();

ampq.connect('amqps url has to be given here', (error0, connection)=>{
    if(error0){
        throw error0;
    }
    connection.createChannel((error1, channel)=>{
        if(error1){
            throw error1
        }
        userRoutes.post('/products/:id/', (req,res,next)=>{
            console.log('Buyer Que...');
            const productId = req.params.id;
            console.log('productId:',productId)
            req.body.product[0].productId = productId
            //const bidderRequest = req.body.bidders;
            channel.sendToQueue('bidcreated',Buffer.from(JSON.stringify(req.body)))
            next()
        },set);
        process.on('beforeExit',()=>{
            console.log('closing');
            connection.close();
          })
    })
})

userRoutes.get('/all-bids', get);
userRoutes.get('/all-bids/:id', get);
//userRoutes.post('/products/:id/place-bid', set)
userRoutes.put('/products/:id/place-bid/:bid-id/update-bid', set)



export default userRoutes