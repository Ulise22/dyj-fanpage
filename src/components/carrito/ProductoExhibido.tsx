import styles from './ProductoExhibido.module.css'
import { useDispatch } from 'react-redux'
import { removeProducto, addOneProducto, removeOneProducto } from '@/redux/features/productosSlice'
//images
import Image from "next/image"
import plus from '@/assets/simbolos/plus.png'
import minus from '@/assets/simbolos/minus.png'
import minusGray from '@/assets/simbolos/minusGray.png'
import { AppDispatch } from '@/redux/services/store'
import { Product } from '@/types/types'

export default function ProductoExhibido ({producto, prodIndex} : {producto : Product, prodIndex : number}) {
    const dispatch = useDispatch<AppDispatch>()

    const deleteOneProduct = () => {
        if(producto.cantidad > 1) {
            dispatch(removeOneProducto(prodIndex))
        }
    }
    return(
        <article className={styles.prod}>
            <section className={styles.prod__info}>
                <svg onClick={() => dispatch(removeProducto(producto.id))} className={styles.prod__trash} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0,0,256,256" style={{fill:"#000000"}}>
                <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(10.66667,10.66667)"><path d="M10,2l-1,1h-4c-0.6,0 -1,0.4 -1,1c0,0.6 0.4,1 1,1h2h10h2c0.6,0 1,-0.4 1,-1c0,-0.6 -0.4,-1 -1,-1h-4l-1,-1zM5,7v13c0,1.1 0.9,2 2,2h10c1.1,0 2,-0.9 2,-2v-13zM9,9c0.6,0 1,0.4 1,1v9c0,0.6 -0.4,1 -1,1c-0.6,0 -1,-0.4 -1,-1v-9c0,-0.6 0.4,-1 1,-1zM15,9c0.6,0 1,0.4 1,1v9c0,0.6 -0.4,1 -1,1c-0.6,0 -1,-0.4 -1,-1v-9c0,-0.6 0.4,-1 1,-1z"></path></g></g>
                </svg>
                <Image className={styles.prod__img} src={producto.imagen} alt={producto.nombre} width={150} height={180} />
                <div className={styles.prod__nombre__container}>
                    <h2 className={styles.prod__info__nombre}> {producto.nombre} </h2>
                    <p className={styles.prod__info__año}> {producto.año} </p>
                </div>
            </section>
            <section className={styles.prod__qandp}>
                <div className={styles.prod__btn__container}>
                    <Image onClick={() => deleteOneProduct()} className={styles.prod__btn} src={producto.cantidad > 1 ? minus : minusGray} alt="minus btn" />
                    <p className={styles.prod__btn__cant}> {producto.cantidad} </p>
                    <Image onClick={() => dispatch(addOneProducto(prodIndex))} className={styles.prod__btn} src={plus} alt="plus btn" />
                </div>
                <h2 className={styles.prod__precio}> ${producto.precioTotal} </h2>
            </section>
            <p className={styles.prod__eliminar} onClick={() => dispatch(removeProducto(producto.id))}> Eliminar </p>
        </article>
    )
}