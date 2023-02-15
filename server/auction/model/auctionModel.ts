import mongoose, { Schema, model } from 'mongoose';


interface Seller {
  firstName: String,
    lastName:String,
    address: String,
    city:String,
    state:String,
    pin:Number,
    phone:Number,
    email:String
}
// Document interface
interface IAuction {
  productId: string;
  productName: string;
  shortDescription: string;
  detailedDescription: string;
  category: string;
  startingPrice: Number;
  bidEndDate: Date;
  sellerInfo: {[key:string]:Seller};
  image: string;

}

// Schema
const productsSchema = new Schema<IAuction>({
    productId:{ type: String, required: false },
    productName: { type: String, required: false },
    shortDescription: {type: String,required: false},
    detailedDescription: {type: String,required: false},
    category: { type: String,enum: ['Painting', 'Sculpture', 'Ornament']},
    startingPrice: {type: Number,required: false},
    bidEndDate:{type: Date,required: false},
    image:{type: String,required: false},
    sellerInfo:{firstName: {type: String,required: false},
    lastName: {type: String,required: false},
    address: {type: String,required: false},
    city: {type: String,required: false},
    state: {type: String,required: false},
    pin: {type: Number,required: false},
    phone: {type: Number,required: false},
    email:{type: String,required: false},
    bidAmount:{type: Number,required: false}
   }
});


// `UserModel` will have `name: string`, etc.
const Auction = model<IAuction>('Product', productsSchema);

export default Auction