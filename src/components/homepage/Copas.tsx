import sudamericana from '@/assets/images/simbolos/sudamericana.svg'
import styles from './copas.module.css'
import recopa from '@/assets/images/simbolos/recopa.svg'
import Image from 'next/image'

export default function Copas () {
    return(
        <section className={styles.copas}>
            <article className={styles.copa__container}>
                <div className={styles.linea_verde}></div>
                <div className={styles.linea_amarilla}> <Image src={sudamericana} className={styles.copa__logo} alt="" width={30} height={67} /> Copa Sudamericana 2020 </div>
                <div className={styles.linea_verde}></div>
            </article>

            <article className={styles.copa__container}>
                <div className={styles.linea_verde}></div>
                <div className={styles.linea_amarilla}> <Image src={recopa} className={styles.copa__logo} alt="" width={30} height={67} /> Recopa Sudamericana 2021 </div>
                <div className={styles.linea_verde}></div>
            </article>
        </section>
    )
}