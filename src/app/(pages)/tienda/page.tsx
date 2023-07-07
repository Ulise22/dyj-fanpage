import Producto from './Producto'
import styles from './tienda.module.css'
import data from '@/data.json'

export default function Tienda () {
    return(
        <main className={styles.tienda}>
            <div className={styles.tienda__hero}>
                <h1 className={styles.tienda__hero__title}>Indumentaria del Halcón</h1>
            </div>
            <section className={styles.tienda__container}>
                { data.map(producto => {
                    return <Producto key={producto.id} producto={producto} />
                }) }
            </section>
        </main>
    )
}