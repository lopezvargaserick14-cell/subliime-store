import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-charcoal text-sand py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1 border-r border-sand/20 pr-8">
          <img src="/images/subliime-logo.png" alt="Subliime by Gerlyn Logo" className="h-10 w-auto object-contain mb-6 invert brightness-0 opacity-90" />
          <p className="text-sand/60 text-sm tracking-wide leading-relaxed mb-6">Ropa con enfoque artesanal y natural, dando un toque elegante y fluido. Diseñado por Gerlyn.</p>
          <div className="text-sand/60 text-xs font-mono tracking-wider space-y-1">
            <p>Calle 41 #34-16</p>
            <p>Bucaramanga, Santander</p>
            <p>Colombia</p>
          </div>
        </div>
        <div>
          <h3 className="uppercase tracking-widest text-xs font-semibold mb-6">Explorar</h3>
          <ul className="space-y-4 text-sand/60 text-sm">
            <li><Link href="/catalog" className="hover:text-sand transition-colors">La Colección</Link></li>
            <li><Link href="/catalog?category=Accesorios" className="hover:text-sand transition-colors">Accesorios</Link></li>
            <li><Link href="/#about" className="hover:text-sand transition-colors">La Creadora</Link></li>
            <li><Link href="/catalog?filter=new" className="hover:text-sand transition-colors">Novedades</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase tracking-widest text-xs font-semibold mb-6">Asistencia</h3>
          <ul className="space-y-4 text-sand/60 text-sm">
            {['Atención al Cliente','Envíos y Devoluciones','Cita Privada','Preguntas Frecuentes'].map(item => (
              <li key={item}><a href="https://wa.me/573103068584" target="_blank" rel="noopener noreferrer" className="hover:text-sand transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="uppercase tracking-widest text-xs font-semibold mb-6">Newsletter</h3>
          <p className="text-sand/60 text-sm mb-4">Suscríbete para acceso anticipado a nuevas colecciones.</p>
          <div className="flex border-b border-sand/30 pb-2">
            <input type="email" placeholder="Email" className="bg-transparent border-none outline-none text-sand placeholder:text-sand/40 flex-1 text-sm" />
            <button className="text-xs uppercase tracking-widest hover:text-sand/70 transition-colors">Unirse</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-sand/40 pt-8 border-t border-sand/10">
        <p>&copy; 2026 Subliime by Gerlyn. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}
