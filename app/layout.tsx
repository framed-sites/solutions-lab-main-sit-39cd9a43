 import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/header'
import Footer from '@/components/footer'
import './globals.css'

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fontDisplay = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'Elektrisch Varen Zonder Laden — Sloepen op zonne-energie',
    template: '%s | Elektrisch Varen Zonder Laden',
  },
  description:
    'Ontdek elektrische sloepen op zonne-energie. 100% uitstootvrij, stil en zorgeloos varen op Nederlands vaarwater — zonder walstroom of stopcontact.',
  metadataBase: new URL('https://www.elektrischvarenzonderladen.nl'),
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    siteName: 'Elektrisch Varen Zonder Laden',
    title: 'Elektrisch Varen Zonder Laden — Sloepen op zonne-energie',
    description:
      'Duurzaam en onbezorgd uitstootvrij varen op zonne-energie. Sloepen compleet uitgerust met zonnepanelen, accupakket en elektrische motor.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elektrisch Varen Zonder Laden',
    description: 'Sloepen op zonne-energie — 100% uitstootvrij varen.',
  },
  icons: {
    icon: 'https://static.wixstatic.com/media/af5e69_54979cdb1ba34c1b9b07a483176a68f1~mv2.png/v1/fill/w_26,h_26,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/battery%20cell%20logo_edited.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${fontBody.variable} ${fontDisplay.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Script
          src="https://app.framed.dev/tm.js"
          data-framed-project="9b84e144-b79a-41aa-9a5a-befe0abc924f"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}