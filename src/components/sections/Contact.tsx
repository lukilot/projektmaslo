'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import styles from './Contact.module.css';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setStatus('success');
    };

    return (
        <section id="kontakt" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Zamów domowe wypieki</h2>

                {status === 'success' ? (
                    <div className={styles.success}>
                        <p>Dziękujemy za wiadomość! Odezwiemy się wkrótce.</p>
                        <Button onClick={() => setStatus('idle')} variant="outline" style={{ marginTop: '1rem' }}>
                            Wyślij kolejną
                        </Button>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label htmlFor="name" className={styles.label}>Imię</label>
                            <input type="text" id="name" name="name" required className={styles.input} />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="email" className={styles.label}>Email</label>
                            <input type="email" id="email" name="email" required className={styles.input} />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="date" className={styles.label}>Data odbioru</label>
                            <input type="date" id="date" name="date" required className={styles.input} />
                        </div>

                        <div className={styles.group}>
                            <label htmlFor="message" className={styles.label}>Treść zamówienia</label>
                            <textarea id="message" name="message" required className={styles.textarea} placeholder="Opisz co chciałbyś zamówić..."></textarea>
                        </div>

                        <div className={`${styles.group} ${styles.checkboxGroup}`}>
                            <input type="checkbox" id="rodo" name="rodo" required className={styles.checkbox} />
                            <label htmlFor="rodo" className={styles.legal}>
                                Wyrażam zgodę na przetwarzanie moich danych osobowych w celu realizacji zamówienia. (RODO)
                            </label>
                        </div>

                        <div className={styles.buttonWrapper}>
                            <Button type="submit" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </section>
    );
}
