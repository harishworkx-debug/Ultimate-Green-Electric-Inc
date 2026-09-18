import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { SERVICE_LOCATIONS } from '@/data/business';

export default function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-16 md:py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Areas We Serve in Orange County
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            Based in Mission Viejo, we proudly serve communities throughout South Orange County. Click your city for local electrician services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {SERVICE_LOCATIONS.map((loc) => (
            <div key={loc.slug} className="space-y-2">
              <Link
                to={`/electrician-${loc.slug}`}
                className="block bg-white rounded-xl border border-dark-100 px-4 py-3 text-center hover:border-primary-300 hover:shadow-md transition-all group"
              >
                <MapPin className="w-5 h-5 text-primary-500 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-dark-700 group-hover:text-primary-600 transition-colors block">
                  {loc.name}
                </span>
                <span className="text-xs text-dark-400">Electrician</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
