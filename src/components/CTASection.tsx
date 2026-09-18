import { Phone, Clock, Shield } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export default function CTASection({
  title = 'Ready to Get Started? Call Us Today',
  subtitle = 'Free estimates on most projects. Licensed, bonded, and insured electricians ready to help.',
}: CTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="max-w-4xl mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-balance mb-4">
          {title}
        </h2>
        <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-3 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all hover:shadow-2xl active:scale-95 animate-pulse-subtle"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-primary-100 text-sm">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Licensed & Insured
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Emergency Service Available
          </div>
        </div>
      </div>
    </section>
  );
}
