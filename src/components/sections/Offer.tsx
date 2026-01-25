'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button'; // Assuming I reuse the button I made in plan step
import styles from './Offer.module.css';

const classics = [
    {
        id: 'sernik',
        name: 'Sernik Królewski',
        description: 'Kremowy, gęsty sernik pieczony według rodzinnej receptury — idealny na każdą okazję.',
        image: '/images/sernik.png',
    },
    {
        id: 'brownie',
        name: 'Nasze Brownie',
        description: 'Intensywnie czekoladowe brownie z miękkim środkiem i chrupiącą skórką.',
        image: '/images/brownie.png',
    },
    {
        id: 'tarty',
        name: 'Tarty Sezonowe',
        description: 'Kruche maślane tarty z sezonowymi owocami i domowym kremem.',
        image: '/images/tart.png',
    },
];

const specialties = [
    { name: 'Drożdżowe', desc: 'Puszyste wypieki z maślaną kruszonką' },
    { name: 'Solo', desc: 'Minimalistyczne jednosmakowe ciasta premium' },
    { name: 'Konfitury', desc: 'Rustykalne wypieki z domowymi przetworami' },
];

export default function Offer() {
    return (
        <section id="oferta" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Nasze Klasyki</h2>
                    <p className={styles.intro}>
                        Ręcznie pieczone ciasta domowe tworzone z naturalnych składników, według tradycyjnych receptur.
                    </p>
                </motion.div>

                <div className={styles.grid}>
                    {classics.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{item.name}</h3>
                            <p className={styles.cardDesc}>{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.specialtiesWrapper}>
                    <h3 className={styles.subTitle}>Specjalności</h3>
                    <div className={styles.specialtiesGrid}>
                        {specialties.map((item, i) => (
                            <div key={i} className={styles.specialtyItem}>
                                <h4>{item.name}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className={styles.events}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className={styles.eventsTitle}>Słodkie Stoły i Wydarzenia</h3>
                    <p className={styles.eventsText}>
                        Tworzymy słodkie stoły na wesela, urodziny i eventy firmowe — pełne ręcznie robionych deserów i eleganckiej prezentacji.
                    </p>
                    <Button onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                        Skontaktuj się
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
