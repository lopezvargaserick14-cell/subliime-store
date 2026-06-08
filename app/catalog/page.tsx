import type { Metadata } from 'next';
import { Suspense } from 'react';
import { CatalogClient } from './CatalogClient';

export const metadata: Metadata = {
  title: 'Colección',
  description: 'Explora vestidos, blusas y accesorios artesanales de alta costura en Subliime by Gerlyn. Ropa pintada a mano, diseños únicos de Bucaramanga.',
  alternates: { canonical: 'https://www.subliime.co/catalog' },
  openGraph: {
    title: 'Colección | Subliime by Gerlyn',
    description: 'Explora vestidos, blusas y accesorios artesanales de alta costura.',
    images: [{ url: '/images/store_front.jpeg', width: 1200, height: 630 }],
  },
};

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center min-h-screen font-serif text-charcoal/40">Cargando colección...</div>}>
      <CatalogClient />
    </Suspense>
  );
}
