import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import './globals.css'
import Script from 'next/script' // Import Script

const leagueSpartan = League_Spartan({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-league-spartan',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://projektmaslo.pl'),
  title: 'Projekt Masło | Domowa Cukiernia',
  description: 'Domowe wypieki, serniki, tarty i słodkie stoły. Ręcznie robione z naturalnych składników.',
  keywords: ['cukiernia', 'domowe wypieki', 'sernik', 'tarty', 'słodki stół', 'projekt masło', 'tort na zamówienie', 'wypieki'],
  authors: [{ name: 'Julka' }],
  openGraph: {
    title: 'Projekt Masło | Domowa Cukiernia',
    description: 'Ręcznie pieczone ciasta domowe tworzone z naturalnych składników.',
    url: 'https://projektmaslo.pl',
    siteName: 'Projekt Masło',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/images/sernik.png', // OpenGraph Image
        width: 1200,
        height: 630,
        alt: 'Sernik Królewski - Projekt Masło',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projekt Masło | Domowa Cukiernia',
    description: 'Domowe wypieki i słodkie stoły.',
    images: ['/images/sernik.png'],
  },

}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Bakery",
  "name": "Projekt Masło",
  "image": "https://projektmaslo.pl/images/sernik.png",
  "description": "Domowe wypieki, serniki, tarty i słodkie stoły tworzone z pasją.",
  "url": "https://projektmaslo.pl",
  "priceRange": "$$",
  "servesCuisine": "Domowe Wypieki",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Polska",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "52.2297",
    "longitude": "21.0122"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className={leagueSpartan.variable}>
      <body>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
