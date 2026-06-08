'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenSearch?: () => void;
}

export function Navbar({ onOpenSearch }: NavbarProps) {
  const { setIsCartOpen, items } = useCart();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className={cn(
        "fixed top-0 w-full z-40 transition-colors duration-500",
        isTransparent ? "bg-transparent text-white border-b border-white/5" : "bg-sand text-charcoal shadow-sm"
      )}>
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center h-12 md:h-16 shrink-0">
            <img
              src="/images/subliime-logo.png"
              alt="Subliime by Gerlyn - Moda Artesanal Bucaramanga"
              className={cn("h-full w-auto object-contain transition-all duration-500 drop-shadow-sm", isTransparent ? "invert brightness-0" : "")}
            />
          </Link>

          <div className="hidden md:flex flex-1 justify-center gap-12 text-[11px] font-medium tracking-[0.2em] uppercase">
            <Link href="/catalog" className="hover:text-gold transition-colors">Colección</Link>
            <Link href="/catalog?filter=new" className="hover:text-gold transition-colors">Novedades</Link>
            {isHome ? (
              <a href="#about" className="hover:text-gold transition-colors">La Creadora</a>
            ) : (
              <Link href="/#about" className="hover:text-gold transition-colors">La Creadora</Link>
            )}
          </div>

          <div className="flex shrink-0 justify-end items-center gap-8 text-[11px] font-medium tracking-[0.2em] uppercase">
            <button className="hidden md:block hover:text-gold transition-colors" onClick={onOpenSearch}>Buscar</button>
            <button className="relative flex items-center gap-2 hover:text-gold transition-colors cursor-pointer" onClick={() => setIsCartOpen(true)}>
              <span>Bolsa</span>
              {totalItems > 0 && (
                <span className="bg-charcoal text-sand px-1.5 py-0.5 rounded-full text-[9px]">{totalItems}</span>
              )}
            </button>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(true)}><Menu size={24} strokeWidth={1.5} /></button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-sand text-charcoal flex flex-col"
          >
            <div className="px-6 h-20 flex items-center justify-between border-b border-charcoal/10">
              <span className="font-serif text-2xl tracking-widest uppercase text-charcoal">Subliime</span>
              <button onClick={() => setMobileMenuOpen(false)}><X size={24} strokeWidth={1.5} /></button>
            </div>
            <div className="p-8 flex flex-col gap-6 text-2xl font-serif">
              <Link href="/catalog">Colección Completa</Link>
              <Link href="/catalog?filter=new">Novedades</Link>
              <Link href="/#about">La Creadora</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
