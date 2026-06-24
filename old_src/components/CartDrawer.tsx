import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-sand shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-charcoal/10">
              <h2 className="font-serif text-2xl">Tu Bolsa</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-charcoal/5 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-charcoal/60 space-y-4">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p>Tu bolsa de compras está vacía</p>
                  <button 
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/catalog');
                    }}
                    className="text-sm border-b border-charcoal pb-1 hover:text-charcoal transition-colors"
                  >
                    Continuar comprando
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-4">
                    <div className="w-24 h-32 bg-stone-200 shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-sm">{item.product.name}</h3>
                          {item.size && <p className="text-xs text-charcoal/60 mt-1">Talla: {item.size}</p>}
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-xs text-charcoal/60 hover:text-charcoal underline"
                        >
                          Eliminar
                        </button>
                      </div>
                      
                      <div className="flex justify-between items-end mt-4">
                        <div className="flex items-center border border-charcoal/20 rounded">
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1, item.size)}
                            className="p-1.5 hover:bg-charcoal/5"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1, item.size)}
                            className="p-1.5 hover:bg-charcoal/5"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="font-medium">${(item.product.price * item.quantity).toLocaleString('es-CO')}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-charcoal/10">
                <div className="flex justify-between mb-6">
                  <span className="font-medium uppercase tracking-wider text-sm">Subtotal</span>
                  <span className="font-serif text-xl">${cartTotal.toLocaleString('es-CO')}</span>
                </div>
                <button 
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full py-4 bg-charcoal text-white tracking-widest text-sm uppercase hover:bg-charcoal/90 transition-colors"
                >
                  Finalizar compra
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
