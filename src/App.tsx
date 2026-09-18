import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import HomePage from '@/pages/HomePage';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { SERVICES, SERVICE_LOCATIONS } from '@/data/business';

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

function parseRoute(pathname: string): { type: 'home' | 'service' | 'location' | '404'; service?: string; location?: string; locationSlug?: string; pageType?: 'electrician' | 'electrical-services' } {
  const path = pathname.replace(/^\//, '').replace(/\/$/, '');

  if (!path) return { type: 'home' };

  // Check for /electrician-{location}
  if (path.startsWith('electrician-')) {
    const locationSlug = path.replace('electrician-', '');
    const loc = SERVICE_LOCATIONS.find((l) => l.slug === locationSlug);
    if (loc) return { type: 'location', locationSlug, pageType: 'electrician' };
    return { type: '404' };
  }

  // Check for /electrical-services-{location}
  if (path.startsWith('electrical-services-')) {
    const locationSlug = path.replace('electrical-services-', '');
    const loc = SERVICE_LOCATIONS.find((l) => l.slug === locationSlug);
    if (loc) return { type: 'location', locationSlug, pageType: 'electrical-services' };
    return { type: '404' };
  }

  // Check for service pages: /{service-slug}-{location-slug}
  // Sort services by slug length descending so longer matches first
  const sortedServices = [...SERVICES].sort((a, b) => b.slug.length - a.slug.length);
  for (const service of sortedServices) {
    const prefix = service.slug + '-';
    if (path.startsWith(prefix)) {
      const locationSlug = path.replace(prefix, '');
      const loc = SERVICE_LOCATIONS.find((l) => l.slug === locationSlug);
      if (loc) return { type: 'service', service: service.slug, location: locationSlug };
    }
  }

  return { type: '404' };
}

function DynamicRouter() {
  const { pathname } = useLocation();
  const route = parseRoute(pathname);

  if (route.type === 'home') return <HomePage />;
  if (route.type === '404') return <NotFoundPage />;
  if (route.type === 'service' && route.service && route.location) {
    return <ServicePage key={`${route.service}-${route.location}`} service={route.service} location={route.location} />;
  }
  if (route.type === 'location' && route.locationSlug && route.pageType) {
    return <LocationPage key={`${route.pageType}-${route.locationSlug}`} slug={route.locationSlug} pageType={route.pageType} />;
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
