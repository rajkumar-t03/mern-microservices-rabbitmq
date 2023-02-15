import express, { Express, Request, Response } from 'express';
import Buyer from '../model/buyerModel'


export const get = (req: Request, res: Response) => {
    Buyer.find().then(result => {
        res.send(result)
    }).catch(err => console.log(err))
}

export const set = (req: Request, res: Response) => {
    const user = new Buyer(req.body);
    user.save().then(result => res.send(result)).catch(err => console.log(err))
}


