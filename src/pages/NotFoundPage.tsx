import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '@/components/SEO';
import { BUSINESS } from '@/data/business';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Ultimate Green Electric"
        description="The page you're looking for doesn't exist. Please visit our homepage or call us at (949) 312-6033."
        canonical="/404"
      />
      <section className="min-h-screen flex items-center justify-center bg-dark-50 pt-20">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="text-8xl font-display font-bold text-primary-500 mb-4">404</div>
          <h1 className="text-2xl font-display font-bold text-dark-900 mb-4">Page Not Found</h1>
          <p className="text-dark-500 mb-8">
            Sorry, we couldn't find the page you were looking for. It may have been moved or no longer exists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg active:scale-95"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 bg-dark-100 hover:bg-dark-200 text-dark-800 px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
