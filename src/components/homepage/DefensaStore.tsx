import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/page.module.css'
//images
import local from '@/assets/images/tienda/dyj-titular.webp'
import visitante from '@/assets/images/tienda/dyj-visitante.webp'

export default function DefensaStore () {
    return(
        <section className={styles.store}>
            <h1 className={styles.store__titulo}>Defensa Store</h1>
            <article className={styles.store__article1}>
                <Image className={styles.store__article__image} src={local} alt='' />
                <h3 className={styles.store__article__name}>1era Equipación 22/23</h3>
                <button className={styles.store__article__btn}>Añadir al carrito</button>
            </article>
            <article className={styles.store__article2}>
                <Image className={styles.store__article__image} src={visitante} alt='' />
                <h3 className={styles.store__article__name}>2da Equipación 22/23</h3>
                <button className={styles.store__article__btn}>Añadir al carrito</button>
            </article>
            <Link className={styles.store__link} href='/tienda'>Visita nuestra tienda online</Link>
        </section>
    )
}