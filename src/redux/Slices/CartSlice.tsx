import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
    name: 'cart',
    initialState: {
        item: [],
        totalQuanlity: 0
    },
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            const existingProduct = state.item.find(item => item.id === product.id);
            console.log(action.payload);

            if (existingProduct) {
                existingProduct.quanlity += 1;
            } else {
                state.item.push({ ...product, quanlity: 1 });
            }
            state.totalQuanlity += 1;

        },
        removeFromCart(state, action) {
            const id = action.payload;
            const existingProduct = state.item.find(item => item.id === id);
            if (existingProduct) {
                state.totalQuanlity -= existingProduct.quanlity;
                state.item = state.item.filter(item => item.id != id)
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlices.actions;
export default cartSlices.reducer;