'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/data';

const heroImages = [
  '/images/Clean_fashion_lookbook_studio_shot_202606020841.jpeg',
  '/images/Candid,_unposed_portrait_of_a_202606020841.jpeg',
  '/images/La_chica_lleva_puesto_el_202606020841.jpeg',
  '/images/Se_ven_estos_zapatos_muy_202606020845.jpeg',
  '/images/woman_in_her_early_20s._202606020841.jpeg',
];

let hasShownSplash = false;

export function HomeClient() {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSplash, setShowSplash] = useState(!hasShownSplash);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1.25;
  }, [isMobile, showSplash]);

  useEffect(() => {
    if (showSplash) return;
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [showSplash]);

  const featured = activeCategory === 'Todos'
    ? products.slice(0, 6)
    : products.filter(p => p.category === activeCategory).slice(0, 6);

  return (
    <div className="w-full">
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && (
          <motion.div key="splash" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 1.5, ease: 'easeInOut' } }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal"
          >
            <video key={isMobile ? 'mobile' : 'desktop'} ref={videoRef} autoPlay muted playsInline
              onEnded={() => { setShowSplash(false); hasShownSplash = true; }}
              className="absolute inset-0 w-full h-full object-cover bg-charcoal"
            >
              <source src={isMobile ? '/videos/hero_vertical.mp4' : '/videos/Video_con_agua.mp4'} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-charcoal/20" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center bg-charcoal overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div key={currentImageIndex} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 2, ease: 'easeInOut' }} className="absolute inset-0"
          >
            <Image src={heroImages[currentImageIndex]} alt="Subliime by Gerlyn - Moda artesanal Bucaramanga" fill priority sizes="100vw" className="object-cover brightness-[0.7]" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
        <div className="relative z-10 text-center space-y-6 px-4 flex flex-col items-center pt-24 md:pt-0">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={!showSplash ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }} className="max-w-3xl mx-auto"
          >
            <img src="/images/subliime-logo.png" alt="Subliime by Gerlyn - Moda Artesanal Bucaramanga" className="w-full h-auto max-h-48 md:max-h-64 object-contain invert brightness-0 drop-shadow-2xl" />
          </motion.div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={!showSplash ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }} className="pt-8"
          >
            <Link href="/catalog" className="inline-block border border-white text-white px-8 py-3 uppercase tracking-[0.2em] text-[11px] hover:bg-white hover:text-charcoal transition-colors duration-300">
              Explorar Colección
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-charcoal/10 pb-4">
          <h2 className="text-xs font-semibold tracking-widest uppercase">Catálogo Destacado</h2>
          <div className="flex gap-4">
            {['Todos', 'Vestidos', 'Accesorios'].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.1em] ${activeCategory === cat ? 'border-b border-charcoal' : 'opacity-40'}`}
              >{cat}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {featured.map((product) => (
              <motion.div key={product.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} className="group cursor-pointer flex flex-col"
              >
                <Link href={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden mb-6 bg-stone-200">
                  <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" src={product.images[0]} alt={`${product.name} - Subliime by Gerlyn`} className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  {product.images[1] && (
                    <Image fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" src={product.images[1]} alt={`${product.name} - vista alternativa`} className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  )}
                </Link>
                <h3 className="font-medium text-sm tracking-wide">{product.name}</h3>
                <p className="text-charcoal/60 mt-1">${product.price.toLocaleString('es-CO')}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="mt-16 flex justify-center">
          <Link href={activeCategory === 'Todos' ? '/catalog' : `/catalog?category=${activeCategory}`}
            className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase font-medium group hover:text-charcoal/70 transition-colors"
          >
            Ver {activeCategory === 'Todos' ? 'todos los productos' : activeCategory.toLowerCase()}
            <span className="inline-block border border-charcoal/20 p-2 rounded-full group-hover:bg-charcoal group-hover:text-white transition-all duration-300">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </span>
          </Link>
        </div>
      </section>

      {/* About / Editorial */}
      <section id="about" className="min-h-[80vh] flex flex-col md:flex-row w-full bg-stone-100">
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <Image src="/images/me_gusta_pero_quiero_que_202606032053.jpeg" alt="Gerlyn - Creadora de Subliime, diseñadora artesanal de Bucaramanga" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-sage text-charcoal">
          <div className="max-w-lg space-y-6">
            <span className="font-serif italic text-charcoal/50 text-3xl">by Gerlyn</span>
            <h2 className="font-serif text-3xl lg:text-5xl leading-tight pt-2">Elegancia<br />Natural y Artesanal</h2>
            <p className="font-light tracking-wide leading-relaxed text-charcoal/80 text-sm md:text-base">
              Nacida en Bucaramanga, Subliime es la visión de Gerlyn, una creadora con extensa experiencia en el mundo del arte y la moda. Cada prenda transmite un enfoque artesanal, buscando realzar la belleza natural en una silueta elegante.
            </p>
            <p className="font-light tracking-wide leading-relaxed text-charcoal/80 text-sm md:text-base">
              Creemos firmemente en el poder de la inclusión; por eso, nuestras creaciones están diseñadas para abrazar, embellecer y ser cómodas en todo tipo de cuerpos, con patrones desarrollados meticulosamente desde la talla XS hasta la 5XL.
            </p>
            <div className="pt-6">
              <Link href="/catalog" className="inline-block border-b border-charcoal pb-1 font-medium tracking-widest text-[11px] uppercase hover:text-charcoal/70 transition-colors">
                Ver Colección
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="min-h-[80vh] flex flex-col md:flex-row-reverse w-full bg-charcoal text-white">
        <div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
          <Image src="/images/store_front.jpeg" alt="Tienda Subliime by Gerlyn - Calle 41 #34-16 Bucaramanga" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-charcoal">
          <div className="max-w-lg space-y-8 w-full">
            <h2 className="uppercase tracking-[0.2em] text-[11px] font-medium opacity-60">Visítanos</h2>
            <h3 className="font-serif text-3xl lg:text-4xl leading-tight">Nuestra Tienda</h3>
            <div className="space-y-4 font-light tracking-wide text-white/80 text-sm md:text-base">
              <p>Descubre nuestra colección en persona y disfruta de un servicio de atención exclusiva.</p>
              <p className="flex items-start gap-4">
                <svg className="w-5 h-5 shrink-0 mt-0.5 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span><strong>Dirección:</strong><br />Calle 41 # 34-16<br />Bucaramanga, Santander</span>
              </p>
            </div>
            <div className="h-64 w-full bg-white/5 border border-white/10 mt-8 overflow-hidden relative">
              <a href="https://www.google.com/maps/dir//Calle+41+%23+34-16,+Bucaramanga,+Santander" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="Obtener indicaciones" />
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.584988775432!2d-73.11181282496152!3d7.114757292889269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fcdf0f4bba7%3A0x6002f1a669bc430e!2sCl.%2041%20%2334-16%2C%20Cabecera%20del%20llano%2C%20Bucaramanga%2C%20Santander%2C%20Colombia!5e0!3m2!1sen!2sus!4v1717345674000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ubicación de Subliime by Gerlyn en Bucaramanga"
              />
            </div>
            <a href="https://www.google.com/maps/dir//Calle+41+%23+34-16,+Bucaramanga,+Santander" target="_blank" rel="noopener noreferrer"
              className="inline-block border-b border-white pb-1 font-medium tracking-widest text-[11px] uppercase hover:text-white/70 transition-colors mt-4"
            >Cómo llegar</a>
          </div>
        </div>
      </section>
    </div>
  );
}
