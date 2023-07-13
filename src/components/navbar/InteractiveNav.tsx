"use client"

import Image from 'next/image'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
//images
import cart from '@/assets/simbolos/bxs-cart.svg'
import menu from '@/assets/simbolos/bx-menu.svg'
import x from '@/assets/simbolos/bx-x.svg'
import { RootState } from '@/redux/services/store'


export default function InteractiveNav () {
    const [isOpen, setIsOpen] = useState(false)
    const { productos } = useSelector((state: RootState) => state.productos)
    
    return(
        <>
            <section className={isOpen ? `${styles.navbar__menu__container} ${styles.activeMenu}` : `${styles.navbar__menu__container}`}>
                <ul className={styles.navbar__menu}>
                    <li>
                        <Link onClick={() => setIsOpen(false)} className={styles.navbar__menu__item} href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} className={styles.navbar__menu__item} href="historia">Historia</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} className={styles.navbar__menu__item} href="plantel">Plantel</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} className={styles.navbar__menu__item} href="noticias">Noticias</Link>
                    </li>
                    <li>
                        <Link onClick={() => setIsOpen(false)} className={styles.navbar__menu__item} href="tienda">Tienda</Link>
                    </li>
                </ul>
                
                <Link className={styles.navbar__carrito__container} href="/carrito">
                    <div> {productos} </div>
                    <Image className={styles.navbar__carrito} onClick={() => setIsOpen(false)} src={cart} alt='carrito' width={54} height={50} />
                </Link>
            </section>

            <Image  className={styles.navbar__menuItem} onClick={() => setIsOpen(!isOpen)} src={isOpen ? x : menu} alt='' width={35} height={35} />
        </>
    )
}