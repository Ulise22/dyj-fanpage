import Image from 'next/image'
import styles from './Footer.module.css'
//images
import logo from '@/assets/logo.png'
import facebook from '@/assets/images/simbolos/bxl-facebook-circle.svg'
import instagram from '@/assets/images/simbolos/bxl-instagram.svg'
import youtube from '@/assets/images/simbolos/bxl-youtube.svg'
import twitter from '@/assets/images/simbolos/bxl-twitter.svg'
import tiktok from '@/assets/images/simbolos/bxl-tiktok.svg'

export default function Footer () {
  return(
    <footer className={styles.footer}>
      <section className={styles.footer__socials}>
        <a target='_Blank' href='https://www.facebook.com/ClubDefensayJus/?locale=es_LA'><Image className={styles.footer__socials__image} src={facebook} alt='Facebook' /></a>
        <a target='_Blank' href='https://www.instagram.com/defensayjusticiaoficial/?hl=es'><Image className={styles.footer__socials__image} src={instagram} alt='Instagram' /></a>
        <a target='_Blank' href='https://www.youtube.com/@DEFENSAOFICIAL1935'><Image className={styles.footer__socials__image} src={youtube} alt='Youtube' /></a>
        <a target='_Blank' href='https://twitter.com/ClubDefensayJus'><Image className={styles.footer__socials__image} src={twitter} alt='Twitter' /></a>
        <a target='_Blank' href='https://www.tiktok.com/@defensayjusticiaoficial?lang=es'><Image className={styles.footer__socials__image} src={tiktok} alt='Tiktok' /></a>
      </section>
      <section className={styles.footer__container}>
        <article className={styles.footer__info}>
          <h2 className={styles.footer__info__title}>Información</h2>
          <a className={styles.footer__info__link} href='#'>Sobre Nosotros</a>
          <a className={styles.footer__info__link} href='#'>Terminos y Condiciones</a>
          <a className={styles.footer__info__link} href='#'>Privacidad</a>
        </article>
        <article className={styles.footer__div}>
          <div className={styles.footer__line}></div>
          <Image className={styles.footer__logo} src={logo} alt='Defensa y Justicia' />
        </article>
        <article className={styles.footer__info}>
          <h2 className={styles.footer__info__title}>Ayuda</h2>
          <a className={styles.footer__info__link} href='#'>Contactanos</a>
          <a className={styles.footer__info__link} href='#'>Ayuda Online</a>
          <a className={styles.footer__info__link} href='#'>Políticas de Cookies</a>
        </article>
      </section>
      <p className={styles.footer__disclaimer}>Club Social y Deportivo Defensa y Justicia ©2023 Todos los derechos reservados</p>
    </footer>
    )
}