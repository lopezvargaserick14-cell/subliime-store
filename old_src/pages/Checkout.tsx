import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Lock } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export function Checkout() {
  const { items, cartTotal, clearCart } = useCart();
  const [status, setStatus] = useState<'idle' | 'processing'>('idle');
  const [formData, setFormData] = useState({
    nombre: '',
    correo: ''
  });

  useSEO({
    title: 'Finalizar Compra',
    description: 'Finaliza tu compra de manera segura y coordina el envío con nosotros vía WhatsApp.'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('processing');
    
    const phoneNumber = "573103068584";
    const productItemsStr = items.map(i => `${i.quantity}x ${i.product.name} (Talla: ${i.size})`).join(', ');
    const message = `Hola Subliime, soy ${formData.nombre}. Acabo de realizar un pedido por $${cartTotal.toLocaleString('es-CO')}. Mi correo es ${formData.correo}. \n\nMi pedido:\n${productItemsStr}\n\nMe gustaría recibir los datos para completar la compra.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Redirect after a short delay
    setTimeout(() => {
      window.location.href = whatsappUrl;
      clearCart();
    }, 800);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-6 flex flex-col items-center justify-center text-center">
        <h2 className="font-serif text-3xl mb-4">Tu bolsa está vacía</h2>
        <p className="text-charcoal/60 mb-8">No puedes proceder al pago sin artículos.</p>
        <a href="/catalog" className="uppercase tracking-widest text-sm border-b border-charcoal pb-1">Volver a la colección</a>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="font-serif text-4xl tracking-tight">Finalizar Compra</h1>
        <p className="text-sm mt-4 text-charcoal/50 flex items-center justify-center gap-2">
          <Lock size={14} /> Redirección segura a WhatsApp
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-16 lg:gap-24">
        {/* Payment Form side */}
        <div className="w-full lg:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-charcoal/10 pb-4">1. Mis Datos</h2>
              <div className="space-y-4">
                <input 
                  required 
                  type="text" 
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  placeholder="Nombre completo" 
                  className="w-full p-4 border border-charcoal/20 bg-transparent outline-none focus:border-charcoal transition-colors" 
                />
                <input 
                  required 
                  type="email" 
                  value={formData.correo}
                  onChange={(e) => setFormData({...formData, correo: e.target.value})}
                  placeholder="Correo electrónico" 
                  className="w-full p-4 border border-charcoal/20 bg-transparent outline-none focus:border-charcoal transition-colors" 
                />
              </div>
            </div>

            <div>
              <h2 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-charcoal/10 pb-4">2. Método de Pedido</h2>
              <div className="space-y-4 p-6 border border-charcoal/10 bg-white/50">
                <p className="text-sm font-light text-charcoal/80 leading-relaxed mb-4">
                  Al hacer clic en finalizar compra, te redirigiremos a <strong>WhatsApp</strong> con un mensaje preescrito sobre tu pedido para coordinar el pago y envío directamente con nosotros.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="bg-[#25D366]/10 p-3 rounded-full text-[#25D366]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-[#25D366]">Atención personalizada</p>
                </div>
              </div>
            </div>

            <div className="payment-pill rounded-full p-4 flex flex-col md:flex-row items-center justify-end mt-8 gap-4">
              <button 
                type="submit" 
                disabled={status === 'processing'}
                className="w-full md:w-auto bg-charcoal text-white px-8 py-3 rounded-full text-[11px] tracking-[0.2em] uppercase font-medium hover:bg-charcoal/90 transition-colors disabled:opacity-70 disabled:cursor-wait flex items-center justify-center gap-3"
              >
                {status === 'processing' ? 'Redirigiendo a WhatsApp...' : `Finalizar Compra`}
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary side */}
        <div className="w-full lg:w-1/2">
           <div className="bg-stone-100 p-8">
             <h2 className="uppercase tracking-widest text-xs font-semibold mb-6 border-b border-charcoal/10 pb-4">Resumen del Pedido</h2>
             
             <div className="space-y-6 mb-8">
               {items.map(item => (
                 <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                   <div className="w-16 h-24 bg-stone-200 shrink-0">
                     <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                   </div>
                   <div className="flex-1 flex justify-between">
                     <div>
                       <h3 className="text-sm font-medium">{item.product.name}</h3>
                       <p className="text-xs text-charcoal/60 mt-1">Talla: {item.size} | Cantidad: {item.quantity}</p>
                     </div>
                     <p className="text-sm">${(item.product.price * item.quantity).toLocaleString('es-CO')}</p>
                   </div>
                 </div>
               ))}
             </div>

             <div className="border-t border-charcoal/10 pt-6 space-y-4 text-sm">
               <div className="flex justify-between text-charcoal/60">
                 <span>Subtotal</span>
                 <span>${cartTotal.toLocaleString('es-CO')}</span>
               </div>
               <div className="flex justify-between font-medium text-base pt-4 border-t border-charcoal/10">
                 <span>Total</span>
                 <span className="font-serif text-xl">${cartTotal.toLocaleString('es-CO')}</span>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
