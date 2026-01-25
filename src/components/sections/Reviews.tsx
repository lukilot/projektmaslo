'use client';
import { motion } from 'framer-motion';
import styles from './Reviews.module.css';

const reviews = [
    { id: 1, text: "Najlepszy sernik jaki jadłam! Idealnie kremowy i nie za słodki.", author: "Anna" },
    { id: 2, text: "Słodki stół na naszym weselu zrobił furorę. Goście byli zachwyceni!", author: "Kasia i Tomek" },
    { id: 3, text: "Polecam tarty, świeże owoce i pyszny krem. Czuć naturalne składniki.", author: "Marek" },
];

export default function Reviews() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Co mówią nasi klienci</h2>
                <div className={styles.grid}>
                    {reviews.map((review, i) => (
                        <motion.div
                            key={review.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <p className={styles.quote}>&quot;{review.text}&quot;</p>
                            <p className={styles.author}>{review.author}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
