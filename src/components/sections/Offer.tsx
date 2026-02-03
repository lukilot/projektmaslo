'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../ui/Button'; // Assuming I reuse the button I made in plan step
import styles from './Offer.module.css';

const mainGallery = [
    {
        id: 'sernik',
        name: 'Klasyczne wypieki',
        description: 'sernik baskijski / sernik z\u00A0białej czekolady / brownie / miodownik / karpatka / napoleonka',
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

const valentinesOffer = [
    {
        id: 'red-velvet-muffins',
        name: 'Muffiny Red Velvet',
        description: 'Wilgotne babeczki z aksamitnym kremem śmietankowym i kruszonką Red Velvet.',
        image: '/images/valentines_muffins_final.jpg',
        options: ['Box 4 szt.', 'Box 6 szt.', 'Box 8 szt.']
    },
    {
        id: 'red-velvet-cookies',
        name: 'Ciastka Red Velvet',
        description: 'Kruche z zewnątrz, miękkie w środku ciastka w kolorze głębokiej czerwieni z kawałkami białej czekolady.',
        image: '/images/valentines_cookies_final.jpg',
        options: ['5 szt.', '10 szt.', '15 szt.']
    },
    {
        id: 'red-velvet-cake',
        name: 'Serce Red Velvet',
        description: 'Wyjątkowe ciasto w kształcie serca. Warstwy czerwonego biszkoptu przełożone delikatnym kremem.',
        image: '/images/red_velvet_heart_new.png', // Converted flower shape to heart shape
        options: ['Ø ~20 cm']
    }
];

const specialties = [
    {
        id: 'drozdzowe',
        name: 'Drożdżowe',
        description: 'Szykowane codziennie z\u00A0rana by\u00A0były zawsze miękkie i\u00A0niesamowicie maślane, a\u00A0świeża kruszonka to\u00A0mój sekret.\nmalinianka / cynamonka / jagodzianka (sezonowo)',
        image: '/images/drozdzowe_gen.png',
    },
    {
        id: 'solo',
        name: 'Solo',
        description: 'Indywidualne porcje deserów premium, takie jak ptysie, tiramisu i\u00A0wiele innych.',
        image: '/images/solo_gen.png',
    },
    {
        id: 'konfitury',
        name: 'Konfitury',
        description: 'Autorskie konfitury i\u00A0pasty orzechowe z\u00A0naturalnych składników:\nkonfitura pomarańcza & wanilia / powidła korzenna śliwka / pasta z\u00A0prażonych pistacji',
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
                        Wypieki tworzone z&nbsp;dbałością o&nbsp;smak, jakość i&nbsp;estetykę.<br />
                        Poznaj moje flagowe desery oraz sezonowe propozycje.
                    </p>
                </motion.div>

            </div>

            {/* Valentine's Offer Section - Full Width */}
            <div className={styles.seasonalContainer}>
                <div className={styles.container}>
                    <motion.div
                        className={styles.seasonalHeader}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className={styles.seasonalTitle}>Walentynkowa oferta</h3>
                        <p className={styles.seasonalSubtitle}>
                            Limitowana oferta wypieków Red Velvet, stworzona, by dzielić się słodyczą z tymi, których kochasz.
                        </p>
                    </motion.div>

                    <div className={styles.seasonalGrid}>
                        {valentinesOffer.map((item: { id: string; name: string; description: string; image: string; options: string[] }, index: number) => (
                            <motion.div
                                key={item.id}
                                className={styles.seasonalCard}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className={styles.seasonalImageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className={styles.seasonalImage}
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className={styles.seasonalCardContent}>
                                    <h3 className={styles.seasonalCardTitle}>{item.name}</h3>
                                    <p className={styles.seasonalCardDesc}>{item.description}</p>
                                    <div className={styles.seasonalOptions}>
                                        {item.options.map((opt: string) => (
                                            <span key={opt} className={styles.seasonalOption}>{opt}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                {/* Main Gallery Section list start below */}

                {/* Main Gallery Section list start below */}
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
                            Indywidualne kompozycje wypieków na&nbsp;wesela, urodziny i&nbsp;eventy firmowe - dopasowane do&nbsp;okazji, liczby gości i&nbsp;preferencji smakowych.
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
        </section >
    );
}
