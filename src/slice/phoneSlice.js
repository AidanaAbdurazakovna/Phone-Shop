import { createSlice } from "@reduxjs/toolkit";
import { products } from "../utils/constants/general";



export const phoneSlice= createSlice({
    name:"phone",
    initialState:{
        products, 
        isOpenCart:false,
    },
    reducers:{}})

export const {}=phoneSlice.actions;
export const phoneReducer = phoneSlice.reducer;