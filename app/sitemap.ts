import { MetadataRoute } from 'next';
import { products } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map(p => ({
    url: `https://www.subliime.co/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: 'https://www.subliime.co', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://www.subliime.co/catalog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...productUrls,
  ];
}
