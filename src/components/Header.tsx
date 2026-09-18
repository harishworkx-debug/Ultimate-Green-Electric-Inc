import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/#services' },
    { label: 'Service Areas', to: '/#service-areas' },
    { label: 'About', to: '/#about' },
    { label: 'Reviews', to: '/#reviews' },
    { label: 'Contact', to: '/#contact' },
  ];

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

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-dark-200 hover:text-primary-400 text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
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
        <div className="lg:hidden bg-dark-900 border-t border-dark-800 animate-fade-in">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-dark-200 hover:text-primary-400 text-base font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
