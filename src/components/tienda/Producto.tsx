import Image from "next/image"
import styles from './producto.module.css'
import Button from "./Button"
import { Product } from "@/types/types"


export default function Producto ({producto}: {producto: Product} ) {
    return(
        <section className={styles.producto}>
            <Image className={styles.producto__imagen} src={producto.imagen} alt={producto.nombre} width={250} height={300} />
            <article className={styles.producto__container}>
                <h4 className={styles.producto__nombre}> {producto.nombre} </h4>
                <p className={styles.producto__p}>Precio: <span>${producto.precio} </span> </p>
                <Button producto={producto} />
            </article>
        </section>
    )
}