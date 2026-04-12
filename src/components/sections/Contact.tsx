'use client';
import { useState } from 'react';
import Button from '../ui/Button';
import styles from './Contact.module.css';
import { PRODUCT_CATALOG, ProductCategory, ProductOption } from './ProductCatalog';

interface OrderItem {
    id: string;
    category: string;
    product: string;
    size: string;
    quantity: number;
}

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [scrolledToForm, setScrolledToForm] = useState(false);

    // Delivery method state
    const [deliveryMethod, setDeliveryMethod] = useState<'pickup' | 'delivery'>('pickup');

    // Order Builder State
    const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

    // Current Selection State
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [selectedProduct, setSelectedProduct] = useState<string>('');
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);

    const activeCategory = PRODUCT_CATALOG.find(c => c.category === selectedCategory);
    const activeProduct = activeCategory?.items.find(p => p.name === selectedProduct);

    const handleAddItem = () => {
        if (!selectedCategory || !selectedProduct || !selectedSize) return;

        const newItem: OrderItem = {
            id: crypto.randomUUID(),
            category: selectedCategory,
            product: selectedProduct,
            size: selectedSize,
            quantity: quantity
        };

        setOrderItems([...orderItems, newItem]);

        // Reset selection (keep category for convenience?)
        setSelectedProduct('');
        setSelectedSize('');
        setQuantity(1);
    };

    const handleRemoveItem = (id: string) => {
        setOrderItems(orderItems.filter(item => item.id !== id));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Append structured order data
        const orderSummary = orderItems.map(item =>
            `${item.category}: ${item.product} (${item.size}) x${item.quantity}`
        ).join('\n');

        const payload = {
            ...data,
            _order_details: orderSummary, // Explicit field for order details
            message: `${data.message}\n\n--- Zamówienie ---\n${orderSummary}` // Append to message for safety
        };

        try {
            const response = await fetch('https://formspree.io/f/mwvokyyn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setStatus('success');
                setOrderItems([]);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="kontakt" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Zamów lub zapytaj o&nbsp;wypieki</h2>

                {status === 'success' ? (
                    <div className={styles.success}>
                        <p>Dziękuję za wiadomość! Wrócę jak najszybciej ze szczegółami.</p>
                        <Button onClick={() => setStatus('idle')} variant="outline" style={{ marginTop: '1rem' }}>
                            Wyślij kolejną
                        </Button>
                    </div>
                ) : (
                    <>
                        {status === 'error' && (
                            <div className={styles.error}>
                                Coś poszło nie&nbsp;tak. Spróbuj ponownie lub napisz do&nbsp;nas bezpośrednio na&nbsp;Instagramie.
                            </div>
                        )}
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.group}>
                                <label htmlFor="name" className={styles.label}>Imię</label>
                                <input type="text" id="name" name="name" required className={styles.input} />
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="phone" className={styles.label}>Numer telefonu (opcjonalnie)</label>
                                <input type="tel" id="phone" name="phone" className={styles.input} />
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="email" className={styles.label}>Email</label>
                                <input type="email" id="email" name="email" required className={styles.input} />
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="date" className={styles.label}>Data odbioru / dostawy</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    className={styles.input}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>

                            <div className={styles.group}>
                                <label className={styles.label}>Metoda realizacji</label>
                                <div className={styles.radioGroup}>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="delivery_method"
                                            value="pickup"
                                            checked={deliveryMethod === 'pickup'}
                                            onChange={() => setDeliveryMethod('pickup')}
                                            className={styles.radioInput}
                                        />
                                        Odbiór osobisty (Spacerowa 40, Józefosław)
                                    </label>
                                    <label className={styles.radioLabel}>
                                        <input
                                            type="radio"
                                            name="delivery_method"
                                            value="delivery"
                                            checked={deliveryMethod === 'delivery'}
                                            onChange={() => setDeliveryMethod('delivery')}
                                            className={styles.radioInput}
                                        />
                                        Dostawa (Warszawa, Piaseczno, Józefosław)
                                    </label>
                                </div>
                            </div>

                            {deliveryMethod === 'delivery' && (
                                <div className={styles.addressFields}>
                                    <div className={styles.group}>
                                        <label htmlFor="street" className={styles.label}>Ulica</label>
                                        <input type="text" id="street" name="street" required className={styles.input} />
                                    </div>
                                    <div className={styles.flexRow}>
                                        <div className={styles.group} style={{ flex: 1 }}>
                                            <label htmlFor="building" className={styles.label}>Nr budynku</label>
                                            <input type="text" id="building" name="building" required className={styles.input} />
                                        </div>
                                        <div className={styles.group} style={{ flex: 1 }}>
                                            <label htmlFor="flat" className={styles.label}>Nr lokalu (opcjonalnie)</label>
                                            <input type="text" id="flat" name="flat" className={styles.input} />
                                        </div>
                                    </div>
                                    <div className={styles.flexRow}>
                                        <div className={styles.group} style={{ flex: 1 }}>
                                            <label htmlFor="postal" className={styles.label}>Kod pocztowy</label>
                                            <input type="text" id="postal" name="postal" required className={styles.input} />
                                        </div>
                                        <div className={styles.group} style={{ flex: 2 }}>
                                            <label htmlFor="city" className={styles.label}>Miasto</label>
                                            <input type="text" id="city" name="city" required className={styles.input} />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* ORDER BUILDER SECTION */}
                            <div className={styles.orderBuilder}>
                                <h3 className={styles.builderTitle}>Skomponuj zamówienie</h3>

                                <div className={styles.builderControls}>
                                    <div className={styles.controlGroup}>
                                        <label className={styles.controlLabel}>Kategoria</label>
                                        <select
                                            className={styles.select}
                                            value={selectedCategory}
                                            onChange={(e) => {
                                                setSelectedCategory(e.target.value);
                                                setSelectedProduct('');
                                                setSelectedSize('');
                                            }}
                                        >
                                            <option value="">Wybierz...</option>
                                            {PRODUCT_CATALOG.map(cat => (
                                                <option
                                                    key={cat.category}
                                                    value={cat.category}
                                                >
                                                    {cat.category}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.controlGroup}>
                                        <label className={styles.controlLabel}>Produkt / Smak</label>
                                        <select
                                            className={styles.select}
                                            value={selectedProduct}
                                            onChange={(e) => setSelectedProduct(e.target.value)}
                                            disabled={!selectedCategory}
                                        >
                                            <option value="">Wybierz...</option>
                                            {activeCategory?.items.map(item => (
                                                <option key={item.name} value={item.name}>{item.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className={styles.flexRow}>
                                        <div className={styles.controlGroup} style={{ flex: 1 }}>
                                            <label className={styles.controlLabel}>Rozmiar</label>
                                            <select
                                                className={styles.select}
                                                value={selectedSize}
                                                onChange={(e) => setSelectedSize(e.target.value)}
                                                disabled={!selectedProduct}
                                            >
                                                <option value="">Wybierz...</option>
                                                {activeProduct?.sizes.map(size => (
                                                    <option key={size} value={size}>{size}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className={styles.controlGroup} style={{ width: '80px' }}>
                                            <label className={styles.controlLabel}>Ilość</label>
                                            <input
                                                type="number"
                                                min="1"
                                                className={styles.input}
                                                value={quantity}
                                                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        type="button"
                                        onClick={handleAddItem}
                                        disabled={!selectedSize}
                                        variant="outline"
                                        style={{ width: '100%', marginTop: '0.5rem' }}
                                    >
                                        Dodaj do zamówienia
                                    </Button>
                                </div>

                                {/* ADDED ITEMS LIST */}
                                {orderItems.length > 0 && (
                                    <div className={styles.orderList}>
                                        <h4 className={styles.orderListTitle}>Twoje produkty:</h4>
                                        <ul className={styles.itemsList}>
                                            {orderItems.map(item => (
                                                <li key={item.id} className={styles.orderItem}>
                                                    <div className={styles.itemInfo}>
                                                        <span className={styles.itemName}>
                                                            {item.category} - {item.product}
                                                        </span>
                                                        <span className={styles.itemDetails}>
                                                            {item.size} &times; {item.quantity}
                                                        </span>
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className={styles.removeBtn}
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        aria-label="Usuń produkt"
                                                    >
                                                        &times;
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            <div className={styles.group}>
                                <label htmlFor="message" className={styles.label}>Dodatkowe uwagi / Treść</label>
                                <textarea id="message" name="message" className={styles.textarea} placeholder="Dodatkowe pytania lub uwagi do zamówienia..."></textarea>
                            </div>

                            <div className={`${styles.group} ${styles.checkboxGroup}`}>
                                <input type="checkbox" id="rodo" name="rodo" required className={styles.checkbox} />
                                <label htmlFor="rodo" className={styles.legal}>
                                    Wyrażam zgodę na&nbsp;przetwarzanie moich danych osobowych w&nbsp;celu realizacji zamówienia. (RODO)
                                </label>
                            </div>

                            <div className={styles.buttonWrapper}>
                                <Button type="submit" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Wysyłanie...' : 'Wyślij wiadomość'}
                                </Button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}
