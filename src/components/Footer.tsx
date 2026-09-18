import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Zap, Shield, ChevronRight } from 'lucide-react';
import { BUSINESS, SERVICES, SERVICE_LOCATIONS, MAIN_LOCATION } from '@/data/business';

export default function Footer() {
  return (
    <footer className="bg-dark-950 text-dark-300">
      {/* CTA strip */}
      <div className="bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white text-center md:text-left">
            <div className="font-display font-bold text-xl">Need an Electrician in Mission Viejo?</div>
            <div className="text-primary-100 text-sm">Licensed, bonded & insured. Free estimates available.</div>
          </div>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-bold text-lg hover:bg-primary-50 transition-colors active:scale-95 whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" fill="white" />
              </div>
              <div className="text-white">
                <div className="font-display font-bold text-lg leading-tight">Ultimate Green</div>
                <div className="text-primary-400 text-xs font-medium leading-tight">Electric, Inc.</div>
              </div>
            </Link>
            <p className="text-sm text-dark-400 leading-relaxed mb-4">
              Top-rated licensed electrician serving Mission Viejo and all of South Orange County. Residential, commercial, and emergency electrical services.
            </p>
            <div className="flex items-center gap-2 text-xs text-dark-400">
              <Shield className="w-4 h-4 text-primary-500" />
              <span>Licensed & Insured — CA Lic #{BUSINESS.license}</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}-${MAIN_LOCATION}`}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-primary-600" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {SERVICE_LOCATIONS.map((loc) => (
                <li key={loc.slug} className="space-y-1">
                  <Link
                    to={`/electrician-${loc.slug}`}
                    className="text-sm text-dark-400 hover:text-primary-400 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-primary-600" />
                    Electrician {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-semibold text-sm uppercase tracking-wider mb-4">
              <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="text-sm text-dark-200 hover:text-primary-400 transition-colors block font-semibold">
                    {BUSINESS.phoneDisplay}
                  </a>
                  <a href={`tel:${BUSINESS.secondaryPhone}`} className="text-xs text-dark-500 hover:text-primary-400 transition-colors">
                    {BUSINESS.secondaryPhone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${BUSINESS.email}`} className="text-sm text-dark-400 hover:text-primary-400 transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark-400">
                  {BUSINESS.street}<br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-dark-400">
                  Mon-Fri: {BUSINESS.hours.weekdays}<br />
                  Sat-Sun: {BUSINESS.hours.weekend}<br />
                  <span className="text-primary-400 font-medium">{BUSINESS.hours.emergency}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-dark-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-500 text-center md:text-left">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. CA Lic #{BUSINESS.license}
          </p>
          <div className="flex items-center gap-4">
            <Link to="/sitemap.xml" className="text-xs text-dark-500 hover:text-primary-400 transition-colors">Sitemap</Link>
            <Link to="/robots.txt" className="text-xs text-dark-500 hover:text-primary-400 transition-colors">Robots</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
