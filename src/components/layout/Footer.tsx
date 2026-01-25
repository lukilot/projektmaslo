import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <Link href="#" className={styles.link}>Regulamin</Link>
                    <Link href="#" className={styles.link}>Polityka prywatności</Link>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Instagram</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a>
                </div>
                <div className={styles.copy}>
                    &copy; {new Date().getFullYear()} Projekt Masło. Wszelkie prawa zastrzeżone.
                </div>
            </div>
        </footer>
    );
}
