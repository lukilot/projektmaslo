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
                        src="/images/About.jpeg"
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
                    <h2 className={styles.title}>
                        Projekt Masło<br />
                        <span className={styles.titleTagline}>Domowa cukiernia rzemieślnicza.</span>
                    </h2>
                    <p className={styles.text}>
                        Mam na&nbsp;imię Julka.<br />
                        Od&nbsp;zawsze piekę z&nbsp;sercem i&nbsp;dbałością o&nbsp;każdy detal.
                        Projekt Masło powstał z&nbsp;miłości do&nbsp;naturalnych składników, prostych receptur i&nbsp;autentycznego smaku.
                    </p>
                    <p className={styles.text}>
                        Po&nbsp;latach pracy w&nbsp;korporacji postawiłam na&nbsp;marzenia i&nbsp;stworzyłam miejsce, w&nbsp;którym jakość dopełnia się z&nbsp;estetyką.
                        Dziś piekę na&nbsp;zamówienie dla&nbsp;tych, którzy chcą wracać do&nbsp;smaków dzieciństwa - bez&nbsp;kompromisów i&nbsp;bez&nbsp;skrótów.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
