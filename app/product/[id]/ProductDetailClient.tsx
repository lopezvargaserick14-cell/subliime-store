'use client';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { SizeGuideModal } from '@/components/SizeGuideModal';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL'];

export function ProductDetailClient({ productId }: { productId: string }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === productId)!;

  const [selectedSize, setSelectedSize] = useState('M');
  const [activeImage, setActiveImage] = useState(0);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const isOneSize = product.category === 'Accesorios' || product.details.some(d => d.toLowerCase() === 'talla única');
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="pt-24 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <button onClick={() => router.back()}
        className="flex items-center gap-2 text-sm uppercase tracking-widest text-charcoal/60 hover:text-charcoal transition-colors mb-12"
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Images */}
        <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-4">
          <div className="hidden md:flex flex-col gap-4 w-24 shrink-0">
            {product.images.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImage(idx)}
                className={`aspect-[3/4] overflow-hidden ${activeImage === idx ? 'ring-1 ring-charcoal' : 'opacity-60 hover:opacity-100 transition-opacity'}`}
              >
                <img src={img} alt={`${product.name} - imagen ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          <motion.div key={activeImage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 aspect-[3/4] bg-stone-200 overflow-hidden">
            <img src={product.images[activeImage]} alt={`${product.name} - Subliime by Gerlyn`} className="w-full h-full object-cover" />
          </motion.div>

          <div className="flex md:hidden gap-4 mt-4 overflow-x-auto pb-2">
            {product.images.map((img, idx) => (
              <button key={idx} onClick={() => setActiveImage(idx)}
                className={`w-20 aspect-[3/4] shrink-0 overflow-hidden ${activeImage === idx ? 'ring-1 ring-charcoal' : 'opacity-60'}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-full lg:w-2/5 flex flex-col pt-8">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="font-serif text-3xl md:text-4xl tracking-tight mb-4"
          >
            {product.name}
          </motion.h1>
          <p className="text-xl mb-8">${product.price.toLocaleString('es-CO')}</p>

          <div className="space-y-8 mb-12">
            <p className="font-light tracking-wide leading-relaxed text-charcoal/80">{product.description}</p>
            <ul className="text-sm font-light text-charcoal/70 space-y-2 list-disc pl-4">
              {product.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
            </ul>
          </div>

          {!isOneSize && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="uppercase tracking-widest text-xs font-semibold">Talla</span>
                <button onClick={() => setIsSizeGuideOpen(true)} className="text-xs tracking-wide underline text-charcoal/60 hover:text-charcoal transition-colors">
                  Guía de tallas
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {SIZES.map(size => (
                  <button key={size} onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm border font-medium ${selectedSize === size ? 'border-charcoal bg-charcoal text-white' : 'border-charcoal/20 hover:border-charcoal transition-colors'}`}
                  >{size}</button>
                ))}
              </div>
            </div>
          )}

          <button onClick={() => addToCart(product, isOneSize ? 'Única' : selectedSize)}
            className="w-full bg-charcoal text-white py-4 uppercase tracking-widest text-sm hover:bg-charcoal/90 transition-colors mb-4"
          >
            Añadir a la bolsa
          </button>

          <a href={`https://wa.me/573103068584?text=${encodeURIComponent(`Hola, vi el producto *${product.name}* y me gustaría pedirte información.`)}`}
            target="_blank" rel="noopener noreferrer"
            className="w-full border border-[#25D366] text-[#25D366] py-4 uppercase tracking-widest text-sm hover:bg-[#25D366] hover:text-white transition-colors flex items-center justify-center gap-2 mb-8"
          >
            Comprar por WhatsApp
          </a>

          <div className="border-t border-charcoal/10 pt-6 space-y-4">
            <h3 className="uppercase tracking-widest text-xs font-semibold">Métodos de Pago</h3>
            <p className="text-sm font-light text-charcoal/70 leading-relaxed">
              Trabajamos mediante pago por <strong>transferencia bancaria</strong>. Puedes hacer tu pedido en la web o contactándonos directamente vía WhatsApp para recibir los datos de transferencia.
            </p>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="mt-32 border-t border-charcoal/10 pt-16">
          <h2 className="uppercase tracking-widest text-sm font-semibold mb-8 text-center">También te podría gustar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map(p => (
              <Link key={p.id} href={`/product/${p.id}`} className="group flex flex-col">
                <div className="aspect-[3/4] bg-stone-200 mb-4 overflow-hidden">
                  <img src={p.images[0]} alt={`${p.name} - Subliime by Gerlyn`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-medium text-xs md:text-sm tracking-wide line-clamp-1">{p.name}</h3>
                <p className="text-charcoal/60 mt-1 text-xs md:text-sm">${p.price.toLocaleString('es-CO')}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
}
