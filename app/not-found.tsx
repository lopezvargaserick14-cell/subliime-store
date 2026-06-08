import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-serif italic text-charcoal/30 text-6xl mb-6">404</p>
      <h1 className="font-serif text-3xl mb-4">Página no encontrada</h1>
      <p className="text-charcoal/60 mb-8">La página que buscas no existe o fue movida.</p>
      <Link href="/" className="uppercase tracking-widest text-sm border-b border-charcoal pb-1 hover:text-charcoal/60 transition-colors">Volver al inicio</Link>
    </div>
  );
}
