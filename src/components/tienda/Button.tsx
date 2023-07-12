'use client'
import styles from './producto.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProducto } from '@/redux/features/productosSlice'
import { AppDispatch, RootState } from '@/redux/services/store'


export default function Button ({producto} : {producto : object}) {
    const { listaProductos } = useSelector((state: RootState) => state.productos)
    const dispatch = useDispatch<AppDispatch>()

    const handleClick = (producto: object) => {
        if(!listaProductos.find((item : object) => item == producto)) {
            dispatch(addProducto(producto))
        }
    }
    return (
        <button onClick={() => handleClick(producto)} className={styles.producto__btn}>Añadir al carrito</button>
    )
}