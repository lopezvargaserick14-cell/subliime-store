import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CartDrawer } from '@/components/CartDrawer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.subliime.co'),
  title: {
    default: 'Moda Artesanal en Bucaramanga | Subliime by Gerlyn',
    template: '%s | Subliime by Gerlyn',
  },
  description: 'Descubre vestidos, blusas y accesorios artesanales de alta costura, diseñados por Gerlyn en Bucaramanga. Envíos a toda Colombia.',
  keywords: ['moda artesanal Bucaramanga', 'vestidos alta costura Colombia', 'ropa pintada a mano', 'accesorios artesanales', 'Subliime by Gerlyn'],
  authors: [{ name: 'Gerlyn', url: 'https://www.subliime.co' }],
  creator: 'Subliime by Gerlyn',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://www.subliime.co',
    siteName: 'Subliime by Gerlyn',
    title: 'Moda Artesanal en Bucaramanga | Subliime by Gerlyn',
    description: 'Vestidos, blusas y accesorios artesanales de alta costura, diseñados por Gerlyn en Bucaramanga. Envíos a toda Colombia.',
    images: [{ url: '/images/store_front.jpeg', width: 1200, height: 630, alt: 'Subliime by Gerlyn - Moda Artesanal Bucaramanga' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moda Artesanal en Bucaramanga | Subliime by Gerlyn',
    description: 'Vestidos, blusas y accesorios artesanales de alta costura, diseñados por Gerlyn en Bucaramanga.',
    images: ['/images/store_front.jpeg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: 'https://www.subliime.co' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" />
        <meta name="theme-color" content="#C4A882" />
        <link rel="icon" type="image/png" href="/images/subliime-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Subliime by Gerlyn',
              url: 'https://www.subliime.co',
              logo: 'https://www.subliime.co/images/subliime-logo.png',
              description: 'Moda artesanal de alta costura diseñada en Bucaramanga, Colombia.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Calle 41 #34-16',
                addressLocality: 'Bucaramanga',
                addressRegion: 'Santander',
                addressCountry: 'CO',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+57-310-306-8584',
                contactType: 'customer service',
                availableLanguage: 'Spanish',
              },
            }),
          }}
        />
      </head>
      <body className="bg-sand text-charcoal font-sans antialiased min-h-screen flex flex-col">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <FloatingWhatsApp />
        </CartProvider>
      </body>
    </html>
  );
}
