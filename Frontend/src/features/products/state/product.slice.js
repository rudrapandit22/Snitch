import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
    name: "product",
    initialState: {
        sellerproducts: [],
        products: []
    },
    reducers: {
        setsellerproducts: (state, action) => {
            state.sellerproducts = action.payload;
        },
        setproducts: (state, action) => {
            state.products = action.payload;
        }
    }
})

export const { setsellerproducts, setproducts } = productslice.actions

export default productslice.reducer