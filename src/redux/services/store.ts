import { configureStore } from "@reduxjs/toolkit";
import productosSlice from "../features/productosSlice";

export const store = configureStore({
    reducer: {
        productos: productosSlice
    }
})