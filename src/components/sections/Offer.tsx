'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button'; // Assuming I reuse the button I made in plan step
import styles from './Offer.module.css';

const mainGallery = [
    {
        id: 'sernik',
        name: 'Klasyczne wypieki',
        description: 'sernik baskijski / sernik z białej czekolady / brownie / miodownik / karpatka / napoleonka',
        image: '/images/klasyki_gen.png',
    },
    {
        id: 'tarty-sezonowe',
        name: 'Tarty sezonowe',
        description: 'cytryna / pistacja / biała czekolada / orzech laskowy',
        image: '/images/tarty_gen.png',
    },
    {
        id: 'bezy',
        name: 'Bezy',
        description: 'klasyczna / pistacjowa',
        image: '/images/beza_gen.png',
    },
];

const specialties = [
    {
        id: 'drozdzowe',
        name: 'Drożdżowe',
        description: 'Szykowane codziennie z rana by były zawsze miękkie i niesamowicie maślane, a świeża kruszonka to mój sekret.\nmalinianka / cynamonka / jagodzianka (sezonowo)',
        image: '/images/drozdzowe_gen.png',
    },
    {
        id: 'solo',
        name: 'Solo',
        description: 'Indywidualne porcje deserów premium, takie jak ptysie, tiramisu i wiele innych.',
        image: '/images/solo_gen.png',
    },
    {
        id: 'konfitury',
        name: 'Konfitury',
        description: 'Autorskie konfitury i pasty orzechowe z naturalnych składników:\nkonfitura pomarańcza & wanilia / powidła korzenna śliwka / pasta z prażonych pistacji',
        image: '/images/konfitury_gen.png',
    },
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
                    <h2 className={styles.title}>Oferta</h2>
                    <p className={styles.intro}>
                        Wypieki tworzone z dbałością o smak, jakość i estetykę.<br />
                        Poznaj moje flagowe desery oraz sezonowe propozycje.
                    </p>
                </motion.div>

                {/* Main Gallery Section */}
                <div className={styles.categoryBlock}>
                    <div className={styles.grid}>
                        {mainGallery.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
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

                    <motion.div
                        className={styles.sizesInfo}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className={styles.sizesTitle}>Dostępne rozmiary:</span>
                        <div className={styles.sizesFlex}>
                            <div className={styles.sizeItem}>
                                <span className={styles.diameter}>24 cm</span>
                                <span className={styles.portions}>8 - 10 porcji</span>
                            </div>
                            <div className={styles.sizeSeparator} />
                            <div className={styles.sizeItem}>
                                <span className={styles.diameter}>26 cm</span>
                                <span className={styles.portions}>10 - 12 porcji</span>
                            </div>
                            <div className={styles.sizeSeparator} />
                            <div className={styles.sizeItem}>
                                <span className={styles.diameter}>28 cm</span>
                                <span className={styles.portions}>12 - 14 porcji</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Specialties Section */}
                <div className={styles.specialtiesBlock}>
                    <h3 className={styles.groupTitle}>Codzienne Rytuały & Dodatki</h3>
                    <div className={styles.grid}>
                        {specialties.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
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
                </div>

                <motion.div
                    className={styles.events}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className={styles.eventsContent}>
                        <h3 className={styles.eventsTitle}>Słodkie Stoły i Wydarzenia</h3>
                        <p className={styles.eventsText}>
                            Indywidualne kompozycje wypieków na wesela, urodziny i eventy firmowe - dopasowane do okazji, liczby gości i preferencji smakowych.
                        </p>
                        <Button onClick={() => document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' })}>
                            Skontaktuj się
                        </Button>
                    </div>
                    <div className={styles.eventsImageWrapper}>
                        <Image
                            src="/images/events.jpeg"
                            alt="Słodkie Stoły i Wydarzenia"
                            fill
                            className={styles.eventsImage}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
