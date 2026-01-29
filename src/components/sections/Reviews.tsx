'use client';
import { motion } from 'framer-motion';
import styles from './Reviews.module.css';

const reviews = [
    {
        id: 1,
        text: "Fantastyczne wypieki, ale przede wszystkim wspaniała osoba, która je tworzy 💛 Jula to\u00A0osoba pełna pasji, która wkłada całe serce w\u00A0to, co\u00A0robi, a\u00A0efekty są przepyszne!",
        author: "Anna"
    },
    {
        id: 2,
        text: "Tu nie\u00A0ma żadnej lipy, ani gotowców. Tu jest serce w\u00A0każdym kawałku. Czuć to\u00A0absolutnie! Wspaniały i\u00A0odpowiedni człowiek, na\u00A0odpowiednim miejscu. Brownie mnie rozwaliło na\u00A0łopatki.",
        author: "Kasia"
    },
    {
        id: 3,
        text: "Jula to\u00A0osoba z\u00A0prawdziwą pasją do\u00A0cukiernictwa. Jej wypieki są dopracowane w\u00A0każdym detalu. Czekam z\u00A0niecierpliwością na\u00A0Tłusty Czwartek😋",
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
