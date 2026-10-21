import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { SERVICES, MAIN_LOCATION, BUSINESS } from '@/data/business';
import { Phone } from 'lucide-react';

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Complete Electrical Services in Mission Viejo
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            From residential repairs to commercial installations and emergency service, our licensed electricians handle it all.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] || Icons.Zap;
            return (
              <Link
                key={service.slug}
                to={`/${service.slug}-${MAIN_LOCATION}`}
                className="group bg-white rounded-2xl border border-dark-100 overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-display font-semibold text-sm">{service.shortTitle}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-dark-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-500 text-sm leading-relaxed mb-3">{service.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700">
                      {service.title} →
                    </span>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-dark-400 hover:text-primary-600 transition-colors text-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Call
                    </a>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
