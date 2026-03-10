export interface ProductOption {
    name: string;
    sizes: string[];
}

export interface ProductCategory {
    category: string;
    items: ProductOption[];
    isEaster?: boolean;
}

export const PRODUCT_CATALOG: ProductCategory[] = [
    {
        category: 'Oferta Wielkanocna 2026',
        isEaster: true,
        items: [
            { name: 'Mazurek pistacjowy', sizes: ['Ø 24 cm'] },
            { name: 'Sernik baskijski', sizes: ['Ø 24 cm'] },
            { name: 'Babka cytrynowa z makiem', sizes: ['Ø 24 cm'] },
            { name: 'Babka piaskowa z pomarańczą', sizes: ['Ø 24 cm'] },
            { name: 'Mazurek klasyczny', sizes: ['Ø 24 cm'] },
            { name: 'Konfitura z pomarańczy', sizes: ['200 ml'] },
            { name: 'Konfitura z malin', sizes: ['200 ml'] },
            { name: 'Pasta z prażonych pistacji', sizes: ['100 g'] },
            { name: 'Pasta z prażonych orzechów laskowych', sizes: ['100 g'] }
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
