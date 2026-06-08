'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { products } from '@/lib/data';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/catalog?q=${encodeURIComponent(query)}`);
      onClose();
    }
  };

  const results = query.trim().length > 0
    ? products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.description?.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.3 } }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-sand/95 backdrop-blur-md pt-[10vh]"
        >
          <div className="w-full max-w-4xl px-6 relative">
            <button onClick={onClose} className="absolute right-6 top-0 p-2 opacity-50 hover:opacity-100 transition-opacity">
              <X size={28} strokeWidth={1} />
            </button>
            <div className="flex flex-col items-center w-full">
              <p className="uppercase tracking-[0.2em] text-[10px] font-medium mb-6 opacity-60">Búsqueda</p>
              <form onSubmit={handleSearch} className="w-full relative">
                <input
                  autoFocus type="text" placeholder="Escribe para buscar productos..."
                  value={query} onChange={(e) => setQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-charcoal/30 text-3xl md:text-5xl font-serif py-4 px-2 outline-none placeholder:text-charcoal/20 text-center transition-colors focus:border-charcoal/80"
                />
              </form>
            </div>
            <div className="mt-12 h-[50vh] overflow-y-auto w-full">
              {results.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {results.slice(0, 4).map(product => (
                    <div key={product.id} className="group cursor-pointer" onClick={() => { router.push(`/product/${product.id}`); onClose(); }}>
                      <div className="aspect-[3/4] overflow-hidden mb-3 bg-stone-200">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <p className="text-xs uppercase tracking-wider">{product.name}</p>
                      <p className="text-xs opacity-60">${product.price.toLocaleString('es-CO')}</p>
                    </div>
                  ))}
                </div>
              ) : query.trim().length > 0 ? (
                <p className="text-center italic opacity-50 font-serif pt-10">No se encontraron productos para &ldquo;{query}&rdquo;</p>
              ) : null}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
