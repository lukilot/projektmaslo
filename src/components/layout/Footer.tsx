import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link href="/regulamin" className={styles.link}>Regulamin</Link>
                    <Link href="/polityka-prywatnosci" className={styles.link}>Polityka prywatności</Link>
                    <a href="https://www.instagram.com/projekt_maslo/" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                </div>
                <div className={styles.copy}>
                    &copy; {new Date().getFullYear()} Projekt Masło. Wszelkie prawa zastrzeżone.
                </div>
            </div>
        </footer>
    );
}
