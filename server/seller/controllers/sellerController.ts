import express, { Express, Request, Response } from 'express';
import Product from '../model/sellerModel'


export const get = (req: Request, res: Response) => {
    Product.find().then(result => {
        res.send(result)
    }).catch(err => console.log(err))
}

export const set = (req: Request, res: Response) => {
    const user = new Product(req.body);
    user.save().then(result => res.send(result)).catch(err => console.log(err))
}


