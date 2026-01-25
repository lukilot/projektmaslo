import styles from './page.module.css';

export const metadata = {
    title: 'Polityka prywatności | Projekt Masło',
    description: 'Polityka prywatności serwisu Projekt Masło.',
};

export default function PolitykaPrywatnosciPage() {
    return (
        <main className={styles.section}>
            <h1 className={styles.title}>Polityka Prywatności</h1>
            <div className={styles.content}>
                <section>
                    <h2>1. Administrator danych</h2>
                    <p>
                        Administratorem danych osobowych jest Projekt Masło Julia Rębkowska, właściciel strony www.projektmaslo.pl.
                    </p>
                </section>

                <section>
                    <h2>2. Jakie dane są zbierane</h2>
                    <p>Za pośrednictwem formularza mogą być zbierane:</p>
                    <ul>
                        <li>imię i nazwisko</li>
                        <li>adres e-mail</li>
                        <li>numer telefonu</li>
                        <li>informacje dotyczące zamówienia</li>
                    </ul>
                </section>

                <section>
                    <h2>3. Cel przetwarzania danych</h2>
                    <p>Dane są przetwarzane w celu:</p>
                    <ul>
                        <li>kontaktu z Klientem</li>
                        <li>realizacji zamówień</li>
                        <li>ustalenia szczegółów oferty</li>
                        <li>obsługi reklamacji</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Podstawa prawna</h2>
                    <p>Dane przetwarzane są na podstawie:</p>
                    <ul>
                        <li>zgody użytkownika</li>
                        <li>konieczności realizacji zamówienia</li>
                        <li>zgodnie z RODO.</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Przekazywanie danych</h2>
                    <p>
                        Dane nie są sprzedawane ani przekazywane osobom trzecim, poza sytuacjami niezbędnymi do realizacji zamówienia (np. dostawa).
                    </p>
                </section>

                <section>
                    <h2>6. Prawa użytkownika</h2>
                    <p>Każda osoba ma prawo do:</p>
                    <ul>
                        <li>wglądu w swoje dane</li>
                        <li>ich poprawienia</li>
                        <li>usunięcia</li>
                        <li>ograniczenia przetwarzania</li>
                        <li>cofnięcia zgody w dowolnym momencie</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Cookies</h2>
                    <p>
                        Strona może korzystać z plików cookies w celu prawidłowego działania i analizy statystyk.
                    </p>
                </section>

                <section>
                    <h2>8. Kontakt</h2>
                    <p>
                        W sprawach związanych z danymi osobowymi można kontaktować się poprzez adres e-mail podany na stronie.
                    </p>
                </section>
            </div>
        </main>
    );
}
