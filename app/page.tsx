import type { Metadata } from 'next';
import { HomeClient } from './HomeClient';

export const metadata: Metadata = {
  title: 'Moda Artesanal en Bucaramanga | Subliime by Gerlyn',
  description: 'Descubre vestidos, blusas y accesorios artesanales de alta costura, diseñados por Gerlyn en Bucaramanga. Envíos a toda Colombia. Explora la colección.',
  alternates: { canonical: 'https://www.subliime.co/' },
};

export default function HomePage() {
  return <HomeClient />;
}
