import styles from './ProductoExhibido.module.css'
//images
import Image from "next/image"
import trash from '@/assets/simbolos/bxs-trash.svg'
import plus from '@/assets/simbolos/bx-plus.svg'
import minus from '@/assets/simbolos/bx-minus.svg'

export default function ProductoExhibido ({producto} : {producto : object}) {
    return(
        <article className={styles.prod}>
            <section className={styles.prod__info}>
                <Image className={styles.prod__trash} src={trash} alt="trash delete-btn" width={30} height={30} />
                <Image className={styles.prod__img} src={producto.imagen} alt={producto.nombre} width={150} height={180} />
                <div className={styles.prod__nombre__container}>
                    <h2 className={styles.prod__info__nombre}> {producto.nombre} </h2>
                    <p className={styles.prod__info__año}> {producto.año} </p>
                </div>
            </section>
            <section className={styles.prod__qandp}>
                <div className={styles.prod__btn__container}>
                    <Image className={styles.prod__btn} src={minus} alt="minus btn" />
                    <p className={styles.prod__btn__cant}> {producto.cantidad} </p>
                    <Image className={styles.prod__btn} src={plus} alt="plus btn" />
                </div>
                <h2 className={styles.prod__precio}> ${producto.precioTotal} </h2>
            </section>
        </article>
    )
}