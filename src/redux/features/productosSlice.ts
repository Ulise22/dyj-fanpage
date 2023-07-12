import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productos: 0,
    sumaPrecios: 0,
    listaProductos: []
}

export const productosSlice = createSlice({
    name: 'productos',
    initialState: initialState,
    reducers: {
        addProducto: (state, action) => {
            state.listaProductos = [...state.listaProductos, action.payload]
            state.productos += 1
            state.sumaPrecios += action.payload.precioTotal
        },
        removeProducto: (state, action) => {
            const productDeleted = state.listaProductos.find(item => item.id == action.payload)
            state.listaProductos = state.listaProductos.filter(item => item !== productDeleted)
            state.productos -= productDeleted.cantidad
            state.sumaPrecios -= productDeleted.precioTotal
        },
        addOneProducto: (state, action) => {
            const indexProducto = action.payload
            state.productos += 1
            state.sumaPrecios += state.listaProductos[indexProducto].precio
            state.listaProductos[indexProducto].cantidad += 1
            state.listaProductos[indexProducto].precioTotal += state.listaProductos[indexProducto].precio
        },
        removeOneProducto: (state, action) => {
            const indexProducto = action.payload
            state.productos -= 1
            state.sumaPrecios -= state.listaProductos[indexProducto].precio
            state.listaProductos[indexProducto].cantidad -= 1
            state.listaProductos[indexProducto].precioTotal -= state.listaProductos[indexProducto].precio
        },
        removeAll: (state) => {
            state.listaProductos = []
            state.productos = 0
            state.sumaPrecios = 0
        }
    }
}) 

export const {addProducto, removeProducto, addOneProducto, removeOneProducto, removeAll} = productosSlice.actions

export default productosSlice.reducer