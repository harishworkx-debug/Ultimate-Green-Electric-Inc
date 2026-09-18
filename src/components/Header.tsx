import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap, ChevronDown } from 'lucide-react';
import { BUSINESS, SERVICES, SERVICE_LOCATIONS, MAIN_LOCATION } from '@/data/business';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [areasDropdown, setAreasDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
    setAreasDropdown(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-950/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-dark-950'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-primary-600/90 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-medium">Serving Mission Viejo & All of South Orange County</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="opacity-90">Mon-Fri 7AM-5PM | Emergency Service Available</span>
            <span className="opacity-90">Lic #{BUSINESS.license}</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 text-white" fill="white" />
            </div>
            <div className="text-white">
              <div className="font-display font-bold text-lg leading-tight">Ultimate Green</div>
              <div className="text-primary-400 text-xs font-medium leading-tight">Electric, Inc.</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            <Link to="/" className="text-dark-200 hover:text-primary-400 text-sm font-medium transition-colors">
              Home
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="flex items-center gap-1 text-dark-200 hover:text-primary-400 text-sm font-medium transition-colors py-2">
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-2xl border border-dark-100 py-2 overflow-hidden">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/${s.slug}-${MAIN_LOCATION}`}
                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-primary-50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                          <Zap className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-dark-700 text-sm font-medium group-hover:text-primary-700 transition-colors">
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasDropdown(true)}
              onMouseLeave={() => setAreasDropdown(false)}
            >
              <button className="flex items-center gap-1 text-dark-200 hover:text-primary-400 text-sm font-medium transition-colors py-2">
                Service Areas
                <ChevronDown className={`w-4 h-4 transition-transform ${areasDropdown ? 'rotate-180' : ''}`} />
              </button>
              {areasDropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 animate-fade-in">
                  <div className="bg-white rounded-xl shadow-2xl border border-dark-100 py-2 overflow-hidden">
                    {SERVICE_LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        to={`/electrician-${loc.slug}`}
                        className="flex items-center justify-between px-4 py-2.5 hover:bg-primary-50 transition-colors group"
                      >
                        <span className="text-dark-700 text-sm font-medium group-hover:text-primary-700 transition-colors">
                          {loc.name}
                        </span>
                        <span className="text-dark-300 text-xs group-hover:text-primary-500 transition-colors">Electrician →</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/#about" className="text-dark-200 hover:text-primary-400 text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/#reviews" className="text-dark-200 hover:text-primary-400 text-sm font-medium transition-colors">
              Reviews
            </Link>
            <Link to="/#contact" className="text-dark-200 hover:text-primary-400 text-sm font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="hidden sm:flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary-500/30 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">Call Now: </span>
              {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="sm:hidden flex items-center gap-2 bg-primary-500 text-white px-3 py-2 rounded-lg font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Call
            </a>
            <button
              className="lg:hidden text-white p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-900 border-t border-dark-800 animate-fade-in max-h-[calc(100vh-4rem)] overflow-y-auto">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link to="/" className="text-dark-200 hover:text-primary-400 text-base font-medium py-2.5 transition-colors">
              Home
            </Link>

            {/* Mobile Services accordion */}
            <button
              className="flex items-center justify-between text-dark-200 hover:text-primary-400 text-base font-medium py-2.5 transition-colors w-full"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col gap-0.5 pl-4 pb-2 animate-fade-in">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-${MAIN_LOCATION}`}
                    className="text-dark-300 hover:text-primary-400 text-sm font-medium py-2 transition-colors border-l border-dark-700 pl-3"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Service Areas accordion */}
            <button
              className="flex items-center justify-between text-dark-200 hover:text-primary-400 text-base font-medium py-2.5 transition-colors w-full"
              onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
            >
              Service Areas
              <ChevronDown className={`w-5 h-5 transition-transform ${mobileAreasOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileAreasOpen && (
              <div className="flex flex-col gap-0.5 pl-4 pb-2 animate-fade-in">
                {SERVICE_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/electrician-${loc.slug}`}
                    className="text-dark-300 hover:text-primary-400 text-sm font-medium py-2 transition-colors border-l border-dark-700 pl-3"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/#about" className="text-dark-200 hover:text-primary-400 text-base font-medium py-2.5 transition-colors">
              About
            </Link>
            <Link to="/#reviews" className="text-dark-200 hover:text-primary-400 text-base font-medium py-2.5 transition-colors">
              Reviews
            </Link>
            <Link to="/#contact" className="text-dark-200 hover:text-primary-400 text-base font-medium py-2.5 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
