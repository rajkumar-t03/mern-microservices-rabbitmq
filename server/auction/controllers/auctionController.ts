import express, { Express, Request, Response } from 'express';
import Auction from '../model/auctionModel'
import Bidder from '../model/bidderModel';

export const get = async (req, res) => {
    const products = await Auction.aggregate([
       { 
        $lookup: {
            from: 'bidders',
            localField: 'productId',
            foreignField: 'productId',
            as: 'BidderDetails'
            }
        }
    ])
    console.log('products:',products);
    res.send(products);
    return products;
}


export const set = (req: Request, res: Response) => {
    console.log(req.body);
    const user = new Auction(req.body);
    user.save().then(result => res.send(result)).catch(err => console.log(err))
}


