'use client';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  const sizes = [
    { size: 'XS', bust: '82-86', waist: '62-66', hip: '88-92' },
    { size: 'S', bust: '86-90', waist: '66-70', hip: '92-96' },
    { size: 'M', bust: '90-94', waist: '70-74', hip: '96-100' },
    { size: 'L', bust: '94-100', waist: '74-80', hip: '100-106' },
    { size: 'XL', bust: '100-106', waist: '80-86', hip: '106-112' },
    { size: '2XL', bust: '106-112', waist: '86-92', hip: '112-118' },
    { size: '3XL', bust: '112-118', waist: '92-98', hip: '118-124' },
    { size: '4XL', bust: '118-124', waist: '98-104', hip: '124-130' },
    { size: '5XL', bust: '124-130', waist: '104-110', hip: '130-136' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50" />
          <motion.div
            initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-0 md:bottom-auto md:top-1/2 left-0 w-full md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl bg-sand z-50 rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
          >
            <div className="p-6 border-b border-charcoal/10 flex justify-between items-center bg-sand shrink-0">
              <h2 className="font-serif text-2xl">Guía de Tallas</h2>
              <button onClick={onClose} className="p-2 hover:bg-charcoal/5 rounded-full transition-colors"><X size={20} /></button>
            </div>
            <div className="p-6 overflow-y-auto">
              <p className="text-sm font-light text-charcoal/80 mb-6">Todas nuestras prendas están diseñadas pensando en la comodidad. Las medidas están en centímetros (cm).</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="border-b border-charcoal/20">
                      {['Talla','Busto','Cintura','Cadera'].map(h => (
                        <th key={h} className="py-3 px-4 font-semibold uppercase tracking-widest text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {sizes.map((row, i) => (
                      <tr key={row.size} className={i % 2 === 0 ? 'bg-black/5' : ''}>
                        <td className="py-3 px-4 font-medium">{row.size}</td>
                        <td className="py-3 px-4 text-charcoal/70">{row.bust}</td>
                        <td className="py-3 px-4 text-charcoal/70">{row.waist}</td>
                        <td className="py-3 px-4 text-charcoal/70">{row.hip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-4 bg-[#25D366]/10 text-[#25D366] rounded-xl text-sm flex gap-3 items-start">
                <svg className="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <p><strong>¿Aún tienes dudas?</strong><br/>Al ser prendas artesanales, también hacemos ajustes personalizados. Escríbenos a WhatsApp.</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
