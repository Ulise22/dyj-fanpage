import Image from 'next/image'
import styles from './historia.module.css'
import moron from '@/assets/images/historia/dyj-vs-moron.jpg'

export default function Historia () {
    return(
        <main>
            <div className={styles.hero} />
            <section className={styles.historia}>
                <h1 className={styles.titulo}>Historia</h1>
                <article className={styles.historia__article}>
                    <Image className={styles.historia__article__img} src={moron} alt='Defensa y Justicia vs Morón' />
                    <h4 className={styles.historia__article__titulo}>El partido contra Morón</h4>
                    <p className={styles.historia__article__p}>lorem impsum shasf has dhi as¿d inais dniaos ndoias nasionf nasin fiasn finas inasin oainsf inasin asin</p>
                </article>
            </section>
        </main>
    )
}