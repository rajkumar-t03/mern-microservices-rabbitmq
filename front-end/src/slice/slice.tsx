import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";

interface bidderInfo {
  _id: string,
  firstName: string,
  lastName: string,
  address: string,
  city: string,
  state: string,
  pin: string,
  phone: string,
  email: string,
  productId: string,
  bidAmount: number,
  __v: number
}
interface sellerInfo {
  firstName: string,
            lastName: string,
            address:string,
            city: string,
            state: string,
            pin: number,
            phone: number,
            email: string
}

interface productDetails  {
        _id: string,
        productId: string,
        productName: string,
        shortDescription:string,
        detailedDescription: string,
        category: string,
        startingPrice: number,
        image:string,
        bidEndDate: Date,
        sellerInfo: sellerInfo,
        bidder?: bidderInfo
}

interface InitialProductState {
  products: productDetails[]
}
const initialState = {
  products: [],
}


export const fetchProducts = createAsyncThunk(
  "get/products",
  async () => {
    const response = await axios.get("http://localhost:3333/api/v1/auction");
    console.log('response',response)
    return response.data ;
   
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state: InitialProductState, action:PayloadAction<productDetails[]>) => {
      state.products= action.payload
    });
  },
});

export const productAdded = productsSlice.actions;
export default productsSlice.reducer;
