import { configureStore } from "@reduxjs/toolkit";
import productosSlice from "../features/productosSlice";

export const store = configureStore({
    reducer: {
        productos: productosSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch