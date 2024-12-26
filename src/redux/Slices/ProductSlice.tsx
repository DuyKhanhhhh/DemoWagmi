import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const listProduct = createAsyncThunk('product/productList', async () => {
    const respont = await axios.get(`https://67566b3811ce847c992cbbfc.mockapi.io/product`);
    return respont.data;
});

const productList = createSlice({
    name: 'products',
    initialState: {
        items: [],
        selectProduct: null,
        search: '',
        loading: false,
        error: null,
    },
    reducers: {
        searchProduct: (state, action) => {
            state.search = action.payload;
        },
        selectProduct: (state, action) => {
            state.selectProduct = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(listProduct.pending, (state) => {
                state.loading = true;
                console.log("pending");

            })
            .addCase(listProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                console.log("done");

            })
            .addCase(listProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                console.log("Error");

            });
    },
});
export const { searchProduct } = productList.actions
export default productList.reducer