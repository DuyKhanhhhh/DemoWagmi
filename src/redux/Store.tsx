import { configureStore } from "@reduxjs/toolkit";
import productList from "@/redux/Slices/ProductSlice"
import cartReducer from "@/redux/Slices/CartSlice"

const Store = configureStore({
    reducer: {
        products: productList,
        cart: cartReducer,
    }
})
export default Store;