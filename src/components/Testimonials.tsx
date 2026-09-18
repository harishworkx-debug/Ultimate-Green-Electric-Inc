import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/business';

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent-500" fill="currentColor" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            Trusted by homeowners and businesses across Mission Viejo and South Orange County.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-dark-100"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-4 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-dark-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center font-display font-bold text-primary-700">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-dark-800 text-sm">{t.name}</div>
                  <div className="text-xs text-dark-400">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
