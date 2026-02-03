export interface ProductOption {
    name: string;
    sizes: string[];
}

export interface ProductCategory {
    category: string;
    items: ProductOption[];
}

export const PRODUCT_CATALOG: ProductCategory[] = [
    {
        category: 'Walentynki 💛',
        items: [
            { name: 'Muffiny Red Velvet', sizes: ['Box 4 szt.', 'Box 6 szt.', 'Box 8 szt.'] },
            { name: 'Ciastka Red Velvet', sizes: ['5 szt.', '10 szt.', '15 szt.'] },
            { name: 'Ciasto Serce Red Velvet', sizes: ['Ø 20 cm'] }
        ]
    },
    {
        category: 'Klasyczne wypieki',
        items: [
            { name: 'Sernik baskijski', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Sernik z białej czekolady', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Brownie', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Miodownik', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Karpatka', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Napoleonka', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] }
        ]
    },
    {
        category: 'Sezonowe tarty',
        items: [
            { name: 'Cytryna', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Pistacja', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Biała czekolada', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Orzech laskowy', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] }
        ]
    },
    {
        category: 'Bezy',
        items: [
            { name: 'Klasyczna', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] },
            { name: 'Pistacjowa', sizes: ['Ø 24 cm', 'Ø 26 cm', 'Ø 28 cm'] }
        ]
    },
    {
        category: 'Drożdżowe',
        items: [
            { name: 'Malinianka', sizes: ['Standardowy'] },
            { name: 'Cynamonka', sizes: ['Standardowy'] },
            { name: 'Jagodzianka', sizes: ['Standardowy'] }
        ]
    },
    {
        category: 'Solo',
        items: [
            { name: 'Ptysie', sizes: ['Standardowy'] },
            { name: 'Tiramisu', sizes: ['Standardowy'] }
        ]
    },
    {
        category: 'Konfitury',
        items: [
            { name: 'Konfitura pomarańcza & wanilia', sizes: ['słoiczek'] },
            { name: 'Powidła korzenna śliwka', sizes: ['słoiczek'] },
            { name: 'Pasta z prażonych pistacji', sizes: ['słoiczek'] }
        ]
    }
];
