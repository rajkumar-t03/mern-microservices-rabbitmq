import express from 'express';
//const blogController = require('../controllers/buyerController')

import {set, get} from '../controllers/auctionController'

const auctionRoutes = express.Router();



auctionRoutes.get('/', get);
auctionRoutes.post('/',set)


export default auctionRoutes

//test