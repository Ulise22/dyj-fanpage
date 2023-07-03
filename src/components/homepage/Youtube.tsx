import styles from '@/app/page.module.css';
import Image from 'next/image';
//images
import vsEstudiantes from '@/assets/images/versus/dyj-estudiantes.jpg'
import vsGimnasia from '@/assets/images/versus/dyj-gimnasia.jpg'
import vsInstituto from '@/assets/images/versus/dyj-instituto.jpg'
import vsIndependiente from '@/assets/images/versus/dyj-independiente.jpg'
import play from '@/assets/images/simbolos/bx-play.svg'

export default function Youtube () {
    return(
        <section className={styles.youtube}>
            <h1 className={styles.youtube__titulo}>Nuestro canal de YouTube</h1>
            <article className={styles.video__container}>
                <h3 className={styles.video__titulo}>Defensa y Justicia 1 - 0 Instituto | Fecha 12 | #TorneoBinance 2023</h3>
                <a href='https://www.youtube.com/watch?v=oVTMjaMgtZ0&ab_channel=LigaProfesionaldeF%C3%BAtboldelaAFA' target='_Blank' className={styles.video__btn}>
                    <Image className={styles.video__btn__play} src={play} alt='play btn' width={30} height={30} />
                    <span className={styles.video__btn__text}>Reproducir</span>
                </a>
                <Image className={styles.video__image} src={vsInstituto} alt='' />
            </article>
            <article className={styles.video__container}>
                <h3 className={styles.video__titulo}>Defensa y Justicia 2 - 0 Independiente | Fecha 4 | #TorneoBinance 2023</h3>
                <a href='https://www.youtube.com/watch?v=GnT0RtLAc-M&ab_channel=LigaProfesionaldeF%C3%BAtboldelaAFA' target='_Blank' className={styles.video__btn}>
                    <Image className={styles.video__btn__play} src={play} alt='play btn' width={30} height={30} />
                    <span className={styles.video__btn__text}>Reproducir</span>
                </a>
                <Image className={styles.video__image} src={vsIndependiente} alt='' />
            </article>
            <article className={styles.video__container}>
                <h3 className={styles.video__titulo}>Defensa y Justicia 1 - 1 Estudiantes | Fecha 16 | #TorneoBinance 2023</h3>
                <a href='https://www.youtube.com/watch?v=msG3OclaU20&ab_channel=LigaProfesionaldeF%C3%BAtboldelaAFA' target='_Blank' className={styles.video__btn}>
                    <Image className={styles.video__btn__play} src={play} alt='play btn' width={30} height={30} />
                    <span className={styles.video__btn__text}>Reproducir</span>
                </a>
                <Image className={styles.video__image} src={vsEstudiantes} alt='' />
            </article>
            <article className={styles.video__container}>
                <h3 className={styles.video__titulo}>Defensa y Justicia 2 - 0 Gimnasia | Fecha 2 | #TorneoBinance 2023</h3>
                <a href='https://www.youtube.com/watch?v=1JY8UgT0Xe4&ab_channel=LigaProfesionaldeF%C3%BAtboldelaAFA' target='_Blank' className={styles.video__btn}>
                    <Image className={styles.video__btn__play} src={play} alt='play btn' width={30} height={30} />
                    <span className={styles.video__btn__text}>Reproducir</span>
                </a>
                <Image className={styles.video__image} src={vsGimnasia} alt='' />
            </article>

            <a className={styles.youtube__link} target='_Blank' href='https://www.youtube.com/@DEFENSAOFICIAL1935'>Visita nuestro canal de Youtube para ver todos nuestros videos</a>
        </section>
    )
}