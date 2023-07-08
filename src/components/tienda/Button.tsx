'use client'
import styles from './producto.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addProducto } from '@/redux/features/productosSlice'


export default function Button ({producto} : {producto : object}) {
    const { listaProductos } = useSelector(state => state.productos)
    const dispatch = useDispatch()

    const handleClick = (producto: object) => {
        if(!listaProductos.find((item : object) => item == producto)) {
            dispatch(addProducto(producto))
        }
    }
    return (
        <button onClick={() => handleClick(producto)} className={styles.producto__btn}>Añadir al carrito</button>
    )
}