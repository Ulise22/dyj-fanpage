'use client'
import ProductoExhibido from './ProductoExhibido'
import styles from './carrito.module.css'
import { useSelector } from 'react-redux'

export default function Carrito () {
    const { listaProductos } = useSelector(state => state.productos)
    console.log(listaProductos)
    return(
        <main className={styles.carrito}>
            <section className={styles.carrito__container}>
                <h1 className={styles.carrito__titulo}>Carrito</h1>
                <div className={styles.carrito__muestreo}>
                    {listaProductos.map((prod : object) => {
                        return <ProductoExhibido key={prod.id} producto={prod} />
                    })}
                </div>
            </section>
        </main>
    )
}