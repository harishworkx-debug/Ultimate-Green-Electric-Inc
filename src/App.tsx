import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import HomePage from '@/pages/HomePage';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import NotFoundPage from '@/pages/NotFoundPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { SERVICES, SERVICE_LOCATIONS, MAIN_LOCATION } from '@/data/business';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HashScrollHandler() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);
  return null;
}

function parseRoute(pathname: string): { type: 'home' | 'about' | 'contact' | 'service' | 'location' | '404'; service?: string; location?: string; locationSlug?: string } {
  const path = pathname.replace(/^\//, '').replace(/\/$/, '');

  if (!path) return { type: 'home' };
  if (path === 'about') return { type: 'about' };
  if (path === 'contact') return { type: 'contact' };

  // Check for /electrician-{location}
  if (path.startsWith('electrician-')) {
    const locationSlug = path.replace('electrician-', '');
    const loc = SERVICE_LOCATIONS.find((l) => l.slug === locationSlug);
    if (loc) return { type: 'location', locationSlug };
    return { type: '404' };
  }



  // Check for service pages: /{service-slug}-{MAIN_LOCATION}
  const suffix = `-${MAIN_LOCATION}`;
  if (path.endsWith(suffix)) {
    const serviceSlug = path.slice(0, -suffix.length);
    const service = SERVICES.find((s) => s.slug === serviceSlug);
    if (service) return { type: 'service', service: service.slug };
  }

  return { type: '404' };
}

function DynamicRouter() {
  const { pathname } = useLocation();
  const route = parseRoute(pathname);

  if (route.type === 'home') return <HomePage />;
  if (route.type === 'about') return <AboutPage />;
  if (route.type === 'contact') return <ContactPage />;
  if (route.type === '404') return <NotFoundPage />;
  if (route.type === 'service' && route.service) {
    return <ServicePage key={route.service} service={route.service} />;
  }
  if (route.type === 'location' && route.locationSlug) {
    return <LocationPage key={route.locationSlug} slug={route.locationSlug} />;
  }
  return <NotFoundPage />;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HashScrollHandler />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <DynamicRouter />
        </main>
        <Footer />
        <StickyCallButton />
        <div className="md:hidden h-16" />
      </div>
    </BrowserRouter>
  );
}
