'use client';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    return (
        <>
            <motion.header
                className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
                variants={{
                    visible: { y: 0 },
                    hidden: { y: '-100%' },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className={styles.container}>
                    <div className={styles.brandContainer}>
                        <Link href="/" className={styles.logo}>
                            Projekt Masło
                        </Link>
                        <span className={styles.tagline}>
                            Rzemieślnicze wypieki na zamówienie
                        </span>
                    </div>

                    <nav className={styles.nav}>
                        <Link href="#oferta">Oferta</Link>
                        <Link href="#o-mnie">O mnie</Link>
                        <Link href="#kontakt">Kontakt</Link>
                        <a href="tel:+48513699154" className={styles.phoneLink}>513 699 154</a>
                        <a href="https://www.instagram.com/projekt_maslo/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </nav>

                    <div className={styles.mobileActions}>
                        <a href="tel:+48513699154" className={styles.mobilePhoneBtn} aria-label="Zadzwoń">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </a>
                        <button className={styles.mobileMenuBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                        </button>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <button
                            className={styles.closeBtn}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                        <Link href="#oferta" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Oferta</Link>
                        <Link href="#o-mnie" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>O mnie</Link>
                        <Link href="#kontakt" className={styles.mobileLink} onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
                        <a href="https://www.instagram.com/projekt_maslo/" className={styles.mobileLink} target="_blank" rel="noopener noreferrer">Instagram</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
