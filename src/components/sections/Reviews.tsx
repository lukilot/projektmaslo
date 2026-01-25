'use client';
import { motion } from 'framer-motion';
import styles from './Reviews.module.css';

const reviews = [
    {
        id: 1,
        text: "Fantastyczne wypieki, ale przede wszystkim wspaniała osoba, która je tworzy 💛 Jula to osoba pełna pasji, która wkłada całe serce w to, co robi, a efekty są przepyszne!",
        author: "Anna"
    },
    {
        id: 2,
        text: "Tu nie ma żadnej lipy, ani gotowców. Tu jest serce w każdym kawałku. Czuć to absolutnie! Wspaniały i odpowiedni człowiek, na odpowiednim miejscu. Brownie mnie rozwaliło na łopatki.",
        author: "Kasia"
    },
    {
        id: 3,
        text: "Jula to osoba z prawdziwą pasją do cukiernictwa. Jej wypieki są dopracowane w każdym detalu. Czekam z niecierpliwością na Tłusty Czwartek😋",
        author: "Karolina"
    },
];

export default function Reviews() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Co mówią klienci</h2>
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
