import type { Metadata } from 'next';
import { CheckoutClient } from './CheckoutClient';

export const metadata: Metadata = {
  title: 'Finalizar Compra',
  description: 'Finaliza tu compra de manera segura y coordina el envío con nosotros vía WhatsApp.',
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}
