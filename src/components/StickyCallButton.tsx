import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${BUSINESS.phoneRaw}`}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary-500 text-white py-4 flex items-center justify-center gap-2 font-bold text-lg shadow-[0_-4px_20px_rgba(0,0,0,0.3)] active:bg-primary-600 transition-colors"
      aria-label={`Call ${BUSINESS.phoneDisplay}`}
    >
      <Phone className="w-5 h-5 animate-pulse" />
      Call Now: {BUSINESS.phoneDisplay}
    </a>
  );
}
