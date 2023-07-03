import Image from 'next/image'
import styles from './Navbar.module.css'
import InteractiveNav from './InteractiveNav'

import logo from '@/assets/logo.png'

export default function Navbar () {
    return(
        <nav className={styles.navbar}>
            <Image className={styles.navbar__logo} src={logo} alt='Defensa y Justicia' width={48} height={48} />
            
            <InteractiveNav />
        </nav>
    )
}