import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from '@/lib/data';
import { ProductDetailClient } from './ProductDetailClient';

interface Props {
  params: Promise<{ id: string }>;
}

// Pre-generate all product pages at build time
export async function generateStaticParams() {
  return products.map(p => ({ id: p.id }));
}

// Generate per-product SEO metadata — this is the key SEO unlock
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) return { title: 'Producto no encontrado' };

  const price = product.price.toLocaleString('es-CO');

  return {
    title: product.name,
    description: `${product.description} Precio: $${price} COP. Envíos a toda Colombia. Subliime by Gerlyn, moda artesanal de Bucaramanga.`,
    alternates: { canonical: `https://www.subliime.co/product/${product.id}` },
    openGraph: {
      title: `${product.name} | Subliime by Gerlyn`,
      description: product.description,
      type: 'website',
      images: product.images.map(img => ({
        url: `https://www.subliime.co${img}`,
        width: 800,
        height: 1067,
        alt: `${product.name} - Subliime by Gerlyn`,
      })),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Subliime by Gerlyn`,
      description: product.description,
      images: [`https://www.subliime.co${product.images[0]}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  if (!product) notFound();

  // JSON-LD Product schema rendered server-side — visible to Google immediately
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map(img => `https://www.subliime.co${img}`),
    sku: product.id,
    brand: { '@type': 'Brand', name: 'Subliime by Gerlyn' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'COP',
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: `https://www.subliime.co/product/${product.id}`,
      seller: { '@type': 'Organization', name: 'Subliime by Gerlyn' },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductDetailClient productId={id} />
    </>
  );
}
