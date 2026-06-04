import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { products } from '../data';
import { useSEO } from '../hooks/useSEO';

export function Catalog() {
  const location = useLocation();
  
  const { filteredProducts, title, categoryParam } = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const filter = params.get('filter');
    const query = params.get('q');
    const categoryQuery = params.get('category');

    let result = products;
    let pageTitle = "Colección";

    if (categoryQuery) {
      pageTitle = categoryQuery;
      result = products.filter(p => p.category === categoryQuery);
    } else if (filter === 'new') {
      pageTitle = "Novedades";
      // Just simulate filtering by taking the first half of the products
      result = products.slice(0, Math.ceil(products.length / 2));
    } else if (query) {
      pageTitle = `Resultados para "${query}"`;
      const q = query.toLowerCase();
      result = products.filter(p => 
        p.name.toLowerCase().includes(q) || 
        (p.description && p.description.toLowerCase().includes(q))
      );
    }

    return { filteredProducts: result, title: pageTitle, categoryParam: categoryQuery };
  }, [location.search]);

  useSEO({
    title: title,
    description: `Explora nuestra ${title.toLowerCase()} en Subliime by Gerlyn. Moda artesanal de alta costura.`
  });

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-charcoal/10 pb-4">
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">{title}</h1>
        {(!location.search || categoryParam) && (
          <div className="flex gap-4 text-[10px] uppercase tracking-widest text-charcoal/40 font-medium overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            <Link to="/catalog" className={!categoryParam ? "text-charcoal border-b border-charcoal pb-1 opacity-100" : "hover:text-charcoal hover:opacity-100 transition-all"}>Todo</Link>
            <Link to="/catalog?category=Vestidos" className={categoryParam === 'Vestidos' ? "text-charcoal border-b border-charcoal pb-1 opacity-100" : "hover:text-charcoal hover:opacity-100 transition-all"}>Vestidos</Link>
            <Link to="/catalog?category=Accesorios" className={categoryParam === 'Accesorios' ? "text-charcoal border-b border-charcoal pb-1 opacity-100" : "hover:text-charcoal hover:opacity-100 transition-all"}>Accesorios</Link>
          </div>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 font-serif opacity-60 text-lg">
          No se encontraron productos.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(idx * 0.1, 1.5), duration: 0.6 }}
              className="group cursor-pointer flex flex-col gap-3"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] overflow-hidden bg-sage">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:scale-105 group-hover:opacity-100"
                />
                {product.images[1] && (
                  <img 
                    src={product.images[1]} 
                    alt={`${product.name} alternate`}
                    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                )}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white text-charcoal text-[10px] px-3 py-2 uppercase tracking-tighter hover:bg-charcoal hover:text-white transition-colors">
                    Ver detalle +
                  </div>
                </div>
              </Link>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-wide">{product.name}</h3>
                  <p className="text-[10px] opacity-50 italic font-serif mt-1">{product.category}</p>
                </div>
                <span className="text-xs font-medium">${product.price.toLocaleString('es-CO')}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
