import styles from './page.module.css';

export const metadata = {
    title: 'Regulamin | Projekt Masło',
    description: 'Regulamin sklepu internetowego Projekt Masło.',
};

export default function RegulaminPage() {
    return (
        <main className={styles.section}>
            <h1 className={styles.title}>Regulamin Składania Zamówień</h1>
            <div className={styles.content}>
                <section>
                    <h2>§1. Informacje ogólne</h2>
                    <p>
                        Strona internetowa www.projektmaslo.pl prowadzona jest przez Projekt Masło Julia Rębkowska.
                    </p>
                    <p>
                        Strona służy do prezentacji oferty wypieków rzemieślniczych oraz do składania zapytań i zamówień za pomocą formularza kontaktowego.
                    </p>
                </section>

                <section>
                    <h2>§2. Składanie zamówień</h2>
                    <p>
                        Zamówienia składane są poprzez formularz dostępny na stronie internetowej.
                    </p>
                    <p>
                        Po wysłaniu formularza Klient otrzymuje kontakt zwrotny w celu potwierdzenia szczegółów zamówienia (termin, cena, sposób odbioru).
                    </p>
                    <p>
                        Umowa zostaje zawarta w momencie potwierdzenia zamówienia przez Projekt Masło.
                    </p>
                </section>

                <section>
                    <h2>§3. Ceny i płatności</h2>
                    <p>
                        Ceny ustalane są indywidualnie lub zgodnie z ofertą przedstawioną na stronie lub w wiadomości zwrotnej.
                    </p>
                    <p>
                        Formy płatności ustalane są bezpośrednio z Klientem (np. przelew, BLIK, gotówka przy odbiorze).
                    </p>
                </section>

                <section>
                    <h2>§4. Odbiór zamówień</h2>
                    <p>
                        Produkty przygotowywane są na indywidualne zamówienie Klienta.
                    </p>
                    <p>
                        Odbiór odbywa się w ustalonym terminie i miejscu lub poprzez dostawę (jeśli jest oferowana).
                    </p>
                </section>

                <section>
                    <h2>§5. Odstąpienie od zamówienia</h2>
                    <p>
                        Ze względu na charakter produktów (świeże wyroby spożywcze wykonywane na zamówienie) Klientowi nie przysługuje prawo odstąpienia od umowy po rozpoczęciu realizacji zamówienia.
                    </p>
                    <p>
                        Wszelkie zmiany lub anulowanie zamówienia możliwe są wyłącznie po wcześniejszym uzgodnieniu.
                    </p>
                </section>

                <section>
                    <h2>§6. Reklamacje</h2>
                    <p>
                        W przypadku zastrzeżeń co do zamówienia Klient powinien skontaktować się niezwłocznie z Projekt Masło.
                    </p>
                    <p>
                        Reklamacje rozpatrywane są w terminie do 14 dni.
                    </p>
                </section>

                <section>
                    <h2>§7. Dane osobowe</h2>
                    <p>
                        Dane osobowe Klientów przetwarzane są zgodnie z Polityką prywatności dostępną na stronie.
                    </p>
                </section>
            </div>
        </main>
    );
}
