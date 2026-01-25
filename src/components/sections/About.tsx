'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function About() {
    return (
        <section id="o-mnie" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Image
                        src="/images/julka.png"
                        alt="Julka w kuchni - Projekt Masło"
                        fill
                        className={styles.image}
                        sizes="(max-width: 900px) 100vw, 50vw"
                    />
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className={styles.title}>Domowa cukiernia Projekt Masło</h2>
                    <p className={styles.text}>
                        Mam na imię Julka i od zawsze piekę domowe wypieki z sercem i dbałością o każdy detal.
                        Projekt Masło powstał z miłości do naturalnych składników, estetyki i autentycznego smaku.
                    </p>
                    <p className={styles.text}>
                        Po latach pracy w korporacji postawiłam na marzenia i stworzyłam cukiernię, w której królują serniki, tarty i ręcznie robione słodkości.
                        Dziś piekę na zamówienie dla klientów, którzy cenią jakość, świeżość i niepowtarzalny smak.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
