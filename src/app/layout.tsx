import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/contexts/LanguageContext";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OuiLockers Paris | Consigne Bagages 24/7 Le Marais",
  description:
    "Consigne bagages sécurisée 24h/24 et 7j/7 à Paris Le Marais. €30/jour, jusqu'à 4 sacs par casier. Réservez en ligne instantanément. 20 Rue Saint-Antoine, 75004 Paris.",
  keywords: [
    "OuiLockers",
    "luggage storage Paris",
    "consigne bagages Paris",
    "lockers Paris",
    "bagages Le Marais",
    "storage Bastille",
    "24/7 luggage storage",
    "consigne bagage Paris 4",
    "left luggage Paris",
    "bag storage Paris",
  ],
  authors: [{ name: "OuiLockers by Hôtel Herse d'Or" }],
  metadataBase: new URL("https://www.ouilockers.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo-officiel.png",
    apple: "/logo-officiel.png",
  },
  openGraph: {
    title: "OuiLockers Paris | Consigne Bagages 24/7 Le Marais",
    description:
      "Consigne bagages sécurisée 24h/24 et 7j/7 à Paris Le Marais. Réservez en ligne instantanément et explorez Paris les mains libres.",
    url: "https://www.ouilockers.com",
    siteName: "OuiLockers",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/images/photo-facade.jpg",
        width: 1200,
        height: 630,
        alt: "OuiLockers Paris - Consigne Bagages Le Marais",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OuiLockers Paris | Consigne Bagages 24/7 Le Marais",
    description:
      "Consigne bagages sécurisée 24h/24 et 7j/7 à Paris Le Marais. Réservez en ligne instantanément.",
    images: ["/images/photo-facade.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ouilockers.com",
  name: "OuiLockers Paris",
  description:
    "Consigne bagages sécurisée 24h/24 et 7j/7 à Paris Le Marais. Casiers automatiques avec accès par code PIN.",
  url: "https://www.ouilockers.com",
  telephone: "+33185737247",
  email: "ouilockers@hotel-herse-dor.com",
  image: "https://www.ouilockers.com/images/photo-facade.jpg",
  logo: "https://www.ouilockers.com/logo-officiel.png",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Credit Card, Debit Card",
  openingHours: "Mo-Su 00:00-24:00",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 Rue Saint-Antoine",
    addressLocality: "Paris",
    postalCode: "75004",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8534,
    longitude: 2.3567,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "250",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.google.com/maps/place/20+Rue+Saint-Antoine,+75004+Paris",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
