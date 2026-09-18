import { Navigate } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, Star, Shield, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import MapSection from '@/components/MapSection';
import Testimonials from '@/components/Testimonials';
import { SERVICES, SERVICE_LOCATIONS, BUSINESS, MAIN_LOCATION, GENERAL_FAQS } from '@/data/business';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '@/data/schema';

export default function LocationPage({ slug }: { slug: string }) {
  const location = SERVICE_LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return <Navigate to="/404" replace />;
  }

  const isMain = location.slug === MAIN_LOCATION;
  const locationName = location.name;

  const pageTitle = isMain
    ? `Electrician ${locationName}, CA | Ultimate Green Electric — (949) 305-3545`
    : `Electrician in ${locationName}, CA | Ultimate Green Electric`;

  const pageDescription = `Looking for a licensed electrician in ${locationName}, CA? Ultimate Green Electric provides residential, commercial, and emergency electrical services. Call ${BUSINESS.phoneDisplay}.`;

  const canonical = `/electrician-${location.slug}`;

  const h1 = `Electrician in ${locationName}, CA`;

  const intro = `When you need a dependable electrician in ${locationName}, California, Ultimate Green Electric, Inc. is the name to trust. We're a licensed, bonded, and insured electrical contractor based in nearby Mission Viejo, serving ${locationName} and all of South Orange County with fast, professional service at fair prices.`;

  const locationFaqs = [
    {
      question: `Do you serve ${locationName}, CA?`,
      answer: `Yes. We are based in Mission Viejo and proudly serve ${locationName} and all of South Orange County. Call ${BUSINESS.phoneDisplay} to schedule service.`,
    },
    {
      question: `How fast can an electrician get to my ${locationName} home?`,
      answer: `Because we are based in nearby Mission Viejo, we can reach most ${locationName} addresses quickly. Same-day service is available for many service calls. Call ${BUSINESS.phoneDisplay} for current availability.`,
    },
    {
      question: `Are you licensed to work in ${locationName}?`,
      answer: `Yes. Ultimate Green Electric, Inc. holds California electrical license #${BUSINESS.license} and is fully bonded and insured. We comply with all local codes and permitting requirements in ${locationName}.`,
    },
    {
      question: `Do you offer free estimates in ${locationName}?`,
      answer: `Yes, we provide free estimates on most electrical projects in ${locationName}. Call ${BUSINESS.phoneDisplay} to schedule a visit from one of our licensed electricians.`,
    },
  ];

  const allFaqs = [...locationFaqs, ...GENERAL_FAQS];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={canonical}
        schema={[
          localBusinessSchema(),
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: `Electrician ${locationName}`, url: canonical },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative pt-16 md:pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt={`Electrician working on electrical panel in ${locationName}, CA`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: `Electrician ${locationName}`, url: canonical },
              ]}
            />
          </div>

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <MapPin className="w-4 h-4" />
              {locationName}, California
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-white text-balance leading-tight mb-4 text-shadow-lg">
              {h1}
            </h1>
            <p className="text-lg text-dark-200 mb-8 leading-relaxed">
              {`Licensed, bonded, and insured electrician serving ${locationName} and all of South Orange County. Fast response, fair pricing, and quality work — call ${BUSINESS.phoneDisplay}.`}
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
                  Lic #{BUSINESS.license}
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
          <p className="text-lg text-dark-600 leading-relaxed mb-8">{intro}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              {`Why ${locationName} Homeowners Choose Us`}
            </h2>
            <p className="text-dark-600 leading-relaxed mb-6">
              {`Finding a reliable electrician in ${locationName} doesn't have to be a guessing game. Ultimate Green Electric, Inc. has built a reputation throughout South Orange County for honest service, skilled workmanship, and fair pricing. Whether you need a quick repair, a panel upgrade, or a full rewiring project, our licensed electricians arrive on time, diagnose the problem accurately, and complete the work to code.`}
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              Serving {locationName} and Nearby Communities
            </h2>
            <p className="text-dark-600 leading-relaxed mb-6">
              We're based in Mission Viejo, just a short drive from {locationName}, which means fast response times for both scheduled appointments and emergency calls. We know the area, understand local code requirements, and have earned the trust of homeowners and businesses throughout South Orange County. Our service area also includes{' '}
              {SERVICE_LOCATIONS.filter((l) => l.slug !== location.slug).slice(0, 5).map((l, i, arr) => (
                <span key={l.slug}>
                  <Link to={`/electrician-${l.slug}`} className="text-primary-600 hover:text-primary-700 font-medium">{l.name}</Link>
                  {i < arr.length - 1 ? ', ' : ''}
                </span>
              ))}
              , and surrounding areas.
            </p>

            <h2 className="text-2xl font-display font-bold text-dark-900 mb-4">
              {`Electrical Services We Provide in ${locationName}`}
            </h2>
            <p className="text-dark-600 leading-relaxed mb-4">
              {`Our licensed electricians provide a comprehensive range of electrical services to ${locationName} homes and businesses:`}
            </p>
            <ul className="space-y-2 mb-6">
              {SERVICES.map((s) => (
                <li key={s.slug} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <Link
                    to={`/${s.slug}-${MAIN_LOCATION}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {s.title}
                  </Link>
                  <span className="text-dark-500"> — {s.summary}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
            {[
              { icon: Shield, title: 'Licensed & Insured', desc: `CA Lic #${BUSINESS.license}` },
              { icon: Clock, title: 'Fast Response', desc: 'Same-day service available' },
              { icon: Star, title: 'Trusted & Rated', desc: 'Serving South Orange County' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-dark-50 rounded-xl p-4 border border-dark-100">
                <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-dark-800 text-sm">{item.title}</div>
                  <div className="text-dark-400 text-xs">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service grid for this location */}
      <section className="py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 text-center mb-8">
            {`Our Services in ${locationName}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s) => (
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
        title={`Need an Electrician in ${locationName}?`}
        subtitle={`Call us today for a free estimate. Licensed electricians serving ${locationName} and all of South Orange County.`}
      />
      <MapSection />
      <FAQAccordion faqs={allFaqs} title={`Electrician FAQs — ${locationName}, CA`} />
    </>
  );
}
