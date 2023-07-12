'use client'
import ProductoExhibido from '@/components/carrito/ProductoExhibido'
import styles from './carrito.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeAll } from '@/redux/features/productosSlice'
import { RootState } from '@/redux/services/store'
import { Product } from '@/types/types'

export default function Carrito () {
    const dispatch = useDispatch()
    const { listaProductos, sumaPrecios, productos } = useSelector((state: RootState) => state.productos)
    return(
        <main className={styles.carrito}>
            <section className={styles.carrito__container}>
                <h1 className={styles.carrito__titulo}>Carrito</h1>
                <div className={styles.carrito__muestreo}>
                    {listaProductos.map((prod : Product) => {
                        return <ProductoExhibido key={prod.id} producto={prod} prodIndex={listaProductos.indexOf(prod)} />
                    })}
                </div>
                <article className={styles.carrito__precio__container}>
                    <p className={styles.carrito__precio}>Coste total: <span>${sumaPrecios}</span></p>
                </article>
                <article className={styles.carrito__btn__container}>
                    <p className={styles.carrito__productos}>Productos Totales: <span>{productos}</span> </p>
                    <button className={styles.carrito__btn} onClick={() => dispatch(removeAll())}>Eliminar todo</button>
                </article>
            </section>
        </main>
    )
}