import styles from './novedades.module.css';
import Image from 'next/image';
//images
import partidoBanfield from '@/assets/images/homepage/dyj-vs-banfield.webp'
import togni from '@/assets/images/homepage/recuperacion-togni.jpg'
import publico from '@/assets/images/homepage/hinchada-3.jpg'

export default function Novedades () {
    return(
        <section className={styles.novedades}>
            <h1 className={styles.novedades__titulo}>Últimas Noticias</h1>
            <article className={styles.novedades__article1}>
                <Image className={styles.novedades__article__image} src={partidoBanfield} alt="Defensa y Justicia vs Banfield" />
                <h3 className={styles.novedades__article__titulo}>Goleada del Defe en Banfield</h3>
                <p className={styles.novedades__article__texto}>Con Goles de Tomás Cardona, Santiago Solari y Juan Miritello, Defensa se llevó el triunfo en la visita a Banfield. Triunfo que terminó con un global de 3-0 de un Defensa que sigue peleando en los puestos de arriba y se ilusiona con jugar un torneo internacional la temporada que viene.</p>
            </article>
            <article className={styles.novedades__article2}>
                <Image className={styles.novedades__article__image} src={togni} alt="Gastón Togni" />
                <h3 className={styles.novedades__article__titulo}>¡Gastón Togni se recupera de su lesión!</h3>
                <p className={styles.novedades__article__texto}>Gastón Togni fue finalmente capaz de reporse de una durísima lesión en el ligamento cruzado y ya podría integrarse en el equipo para disputar los próximos partidos.</p>
            </article>
            <article className={styles.novedades__article3}>
                <Image className={styles.novedades__article__image} src={publico} alt="Defensa y Justicia Público" />
                <h3 className={styles.novedades__article__titulo}>Ya están disponibles las entraas para el próximo partido en Sudamericana</h3>
                <p className={styles.novedades__article__texto}>Ya podés ir retirando las entradas para ir a alentar al Defe contra Millonarios de Colombia. Podés consultar toda la información del partido en nuestra página oficial.</p>
            </article>
        </section>
    )
}