import { Navigate } from 'react-router-dom';
import { Phone, CheckCircle2, Star, Clock, Shield, Zap, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import MapSection from '@/components/MapSection';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';
import { SERVICES, SERVICE_LOCATIONS, BUSINESS, MAIN_LOCATION, GENERAL_FAQS } from '@/data/business';
import { localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema } from '@/data/schema';

export default function ServicePage({ service: serviceSlug }: { service: string }) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const pageTitle = service.metaTitle;
  const pageDescription = service.metaDescription;
  const canonical = `/${service.slug}`;

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);
  const allFaqs = [...service.faqs, ...GENERAL_FAQS.slice(0, 2)];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        schema={[
          localBusinessSchema(),
          serviceSchema(service.title, service.slug, "South Orange County"),
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: service.title, url: canonical },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-16 md:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: service.title, url: canonical },
              ]}
            />
          </div>

          <div className="max-w-2xl">
            <span className="inline-block bg-primary-500/20 border border-primary-400/30 text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              South Orange County, CA
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white text-balance leading-tight mb-4 text-shadow-lg">
              {service.h1}
            </h1>
            <p className="text-lg text-dark-200 mb-8 leading-relaxed">
              {service.summary} Call {BUSINESS.phoneDisplay} for a free estimate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3.5 rounded-xl font-bold text-lg transition-all hover:shadow-2xl active:scale-95"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS.phoneDisplay}
              </a>
              <div className="flex items-center gap-4 text-sm text-dark-300">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-primary-400" />
                  Licensed
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-accent-400" fill="currentColor" />
                  5-Star
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg text-dark-600 leading-relaxed mb-8">{service.intro}</p>

          {service.sections.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
                {section.heading}
              </h2>
              <p className="text-dark-600 leading-relaxed">{section.body}</p>
            </div>
          ))}

          {/* Benefits list */}
          <div className="bg-primary-50 rounded-2xl p-6 md:p-8 my-8 border border-primary-100">
            <h3 className="font-display font-bold text-dark-900 text-lg mb-4">
              Why Choose Ultimate Green Electric?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Licensed, bonded & insured (CA Lic #999000)',
                'Free estimates on most projects',
                'Same-day service available',
                'Upfront, transparent pricing',
                'Clean, professional workmanship',
                'Emergency service available',
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-dark-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call out */}
          <div className="bg-dark-900 rounded-2xl p-6 md:p-8 text-center my-8">
            <Zap className="w-10 h-10 text-primary-500 mx-auto mb-4" />
            <h3 className="font-display font-bold text-white text-xl mb-2">
              Need {service.title.toLowerCase()}?
            </h3>
            <p className="text-dark-300 mb-4">Call now for a free estimate and fast service.</p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg active:scale-95"
            >
              <Phone className="w-5 h-5" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 text-center mb-8">
            Other Electrical Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${MAIN_LOCATION}`}
                className="group bg-white rounded-xl p-5 border border-dark-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-dark-800 group-hover:text-primary-600 transition-colors mb-2">
                  {s.title}
                </h3>
                <p className="text-dark-400 text-sm mb-2 line-clamp-2">{s.summary}</p>
                <span className="text-primary-600 text-sm font-medium flex items-center gap-1">
                  {s.title} <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection
        title={`Ready for Expert ${service.title.toLowerCase()}?`}
        subtitle="Call us today for a free estimate. Licensed electricians ready to help."
      />
      <MapSection />
      <FAQAccordion faqs={allFaqs} title={`${service.title} FAQs`} />
    </>
  );
}
