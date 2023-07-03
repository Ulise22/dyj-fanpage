import styles from './page.module.css'
import Image from 'next/image'

//images

import flechabus from '../assets/images/sponsors/flechabus.png'
import gatorade from '../assets/images/sponsors/gatorade.png'
import lyon from '../assets/images/sponsors/lyon.webp'
import rapicuotas from '../assets/images/sponsors/rapicuotas.png'

//components

import Novedades from '../components/homepage/Novedades'
import DefensaStore from '../components/homepage/DefensaStore'
import Youtube from '../components/homepage/Youtube'
import Copas from '../components/homepage/Copas'

export default function Home() {
  return (
    <>
      <header className={styles.hero}>
        <h1 className={styles.hero__titulo}>Defensa y Justicia golea 4-1 y se gusta</h1>
      </header>
      <section className={styles.sponsors}>
        <h4 className={styles.sponsors__h4}>Nuestros Sponsors: </h4>
        <Image className={styles.sponsors__image} src={gatorade} alt='Gatorade' height={50}/>
        <Image className={styles.sponsors__image} src={rapicuotas} alt='Rapicuotas' height={50}/>
        <Image className={styles.sponsors__image} src={lyon} alt='Lyon' height={50}/>
        <Image className={styles.sponsors__image} src={flechabus} alt='FlechaBus' height={50} />
      </section>
      <div className={styles.container}>
        <main className={styles.main}>
          <Novedades />
          <DefensaStore />
          <Youtube />
          <Copas />
        </main>
      </div>
    </>
  )
}
