import { Navigate } from 'react-router-dom';
import { Phone, CheckCircle2, Star, Clock, Shield, Zap, ChevronRight, AlertTriangle, ArrowRight, FileText, Wrench, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import Testimonials from '@/components/Testimonials';
import EstimateForm from '@/components/EstimateForm';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';
import { SERVICES, SERVICE_LOCATIONS, BUSINESS, MAIN_LOCATION, GENERAL_FAQS, COMPANY_CREDENTIALS } from '@/data/business';
import { localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema, organizationSchema, webSiteSchema } from '@/data/schema';

const RELATED_SERVICES_MAP: Record<string, string[]> = {
  'panel-upgrade': ['ev-charger-installation', 'electrical-inspection', 'residential-electrician', 'electrical-repair'],
  'ev-charger-installation': ['panel-upgrade', 'electrical-inspection', 'residential-electrician', 'commercial-electrician'],
  'electrical-repair': ['emergency-electrician', 'panel-upgrade', 'outlet-switch-repair', 'electrical-inspection'],
  'emergency-electrician': ['electrical-repair', 'panel-upgrade', 'outlet-switch-repair', 'electrical-inspection'],
  'lighting-installation': ['ceiling-fan-installation', 'outlet-switch-repair', 'residential-electrician', 'commercial-electrician'],
  'ceiling-fan-installation': ['lighting-installation', 'outlet-switch-repair', 'electrical-repair', 'residential-electrician'],
  'outlet-switch-repair': ['electrical-repair', 'panel-upgrade', 'lighting-installation', 'emergency-electrician'],
  'electrical-inspection': ['panel-upgrade', 'electrical-repair', 'residential-electrician', 'ev-charger-installation'],
  'residential-electrician': ['panel-upgrade', 'ev-charger-installation', 'lighting-installation', 'electrical-repair'],
  'commercial-electrician': ['ev-charger-installation', 'lighting-installation', 'electrical-inspection', 'electrical-repair'],
};

const SERVICE_CROSS_LINKS: Record<string, { prompt: string; linkText: string; url: string; note: string }> = {
  'panel-upgrade': {
    prompt: 'Planning an electric vehicle charging station or solar battery?',
    linkText: 'Level 2 EV charger installation',
    url: `/ev-charger-installation-${MAIN_LOCATION}`,
    note: 'requires proper 200A capacity planning under NEC 625 continuous load rules.',
  },
  'ev-charger-installation': {
    prompt: 'Need additional electrical headroom for 48A continuous charging?',
    linkText: 'electrical panel upgrade',
    url: `/panel-upgrade-${MAIN_LOCATION}`,
    note: 'may be required if your current home has a 100A or 125A main breaker.',
  },
  'electrical-repair': {
    prompt: 'Facing an urgent fire hazard, sparks, or sudden power failure?',
    linkText: '24/7 emergency electrician',
    url: `/emergency-electrician-${MAIN_LOCATION}`,
    note: 'team responds immediately with fully stocked mobile units.',
  },
  'emergency-electrician': {
    prompt: 'Need permanent follow-up wiring or diagnostic tracing?',
    linkText: 'comprehensive electrical repair',
    url: `/electrical-repair-${MAIN_LOCATION}`,
    note: 'stabilizes circuits and restores long-term code compliance.',
  },
  'lighting-installation': {
    prompt: 'Looking to optimize bedroom or living room air circulation?',
    linkText: 'ceiling fan installation',
    url: `/ceiling-fan-installation-${MAIN_LOCATION}`,
    note: 'pairs perfectly with recessed LED downlights and modern dimmers.',
  },
  'ceiling-fan-installation': {
    prompt: 'Want coordinated accent and recessed lighting?',
    linkText: 'lighting installation',
    url: `/lighting-installation-${MAIN_LOCATION}`,
    note: 'enhances room brightness with Title 24 high-efficacy fixtures.',
  },
  'outlet-switch-repair': {
    prompt: 'Experiencing warm switch plates or frequent tripping?',
    linkText: 'electrical repair diagnostics',
    url: `/electrical-repair-${MAIN_LOCATION}`,
    note: 'can identify loose neutral connections or overloaded branch lines.',
  },
  'electrical-inspection': {
    prompt: 'Inspection revealed an outdated Zinsco or FPE panel?',
    linkText: 'electrical panel upgrade',
    url: `/panel-upgrade-${MAIN_LOCATION}`,
    note: 'replaces hazardous bus bars with certified Square D or Siemens gear.',
  },
  'residential-electrician': {
    prompt: 'Preparing your home for modern electric vehicles?',
    linkText: 'Level 2 EV charger installation',
    url: `/ev-charger-installation-${MAIN_LOCATION}`,
    note: 'adds dedicated high-output charging in your garage or carport.',
  },
  'commercial-electrician': {
    prompt: 'Upgrading office or commercial warehouse lighting?',
    linkText: 'commercial lighting installation',
    url: `/lighting-installation-${MAIN_LOCATION}`,
    note: 'ensures full compliance with California Title 24 energy mandates.',
  },
};

export default function ServicePage({ service: serviceSlug }: { service: string }) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const canonical = `/${service.slug}-${MAIN_LOCATION}`;
  const relatedSlugs = RELATED_SERVICES_MAP[service.slug] || [];
  const relatedServices = relatedSlugs
    .map((slug) => SERVICES.find((s) => s.slug === slug))
    .filter((s): s is (typeof SERVICES)[number] => Boolean(s));
  const companionLink = SERVICE_CROSS_LINKS[service.slug];
  const allFaqs = [...service.faqs, ...GENERAL_FAQS.slice(0, 2)];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={canonical}
        schema={[
          organizationSchema(),
          webSiteSchema(),
          localBusinessSchema(),
          serviceSchema(service.title, `${service.slug}-${MAIN_LOCATION}`, "Mission Viejo & South Orange County"),
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Services', url: '/#services' },
            { name: service.title, url: canonical },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/85 to-dark-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Services', url: '/#services' },
                { name: service.title, url: canonical },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            {/* Primary Keyword Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 backdrop-blur-md">
              <Zap className="w-4 h-4 text-primary-400" />
              <span>{service.primaryKeyword} · Mission Viejo & South Orange County</span>
            </div>

            {/* Clear Primary Keyword H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-5 text-shadow-lg">
              {service.h1}
            </h1>

            {/* Summary */}
            <p className="text-base sm:text-lg text-dark-200 mb-8 leading-relaxed">
              {service.summary}
            </p>

            {/* Above the Fold CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2.5 bg-primary-500 hover:bg-primary-400 text-white px-7 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-primary-500/30 active:scale-95 group shadow-lg"
              >
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </a>

              <a
                href="#service-estimate"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-xl font-bold text-base transition-all"
              >
                <span>Request Free Estimate</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Trust Pill */}
            <div className="p-3.5 bg-dark-900/80 backdrop-blur-md rounded-xl border border-dark-700/80 text-xs text-dark-300 flex items-center gap-3">
              <Shield className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <span>
                <strong>California Licensed Contractor:</strong> C-10 Electrical License #{BUSINESS.license} · Bonded & Insured ($2M Liability) · Code-Compliant Workmanship Guarantee.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Guarantee Strip */}
      <section className="bg-dark-900 py-4 border-b border-dark-800 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-400" />
              <span>CA License #{COMPANY_CREDENTIALS.cslbLicense}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-400" />
              <span>Title 24 & NEC Code Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-400" />
              <span>Fast 1-Hour Estimate Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent-400" fill="currentColor" />
              <span>100% Satisfaction Warranty</span>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Overview & What is Included */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
                  Service Scope & Details
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 leading-tight">
                  Expert {service.title} Services
                </h2>
              </div>

              <p className="text-base text-dark-700 leading-relaxed">
                {service.intro}
              </p>

              {/* What This Service Includes Checklist */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-200 space-y-4">
                <div className="flex items-center gap-2 text-dark-900 font-bold text-base">
                  <Wrench className="w-5 h-5 text-primary-600" />
                  What Our {service.title} Service Includes:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.whatIncluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-dark-700">
                      <CheckCircle2 className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sections from business.ts */}
              {service.sections.map((section, i) => (
                <div key={i} className="pt-4">
                  <h3 className="text-xl font-display font-bold text-dark-900 mb-2">
                    {section.heading}
                  </h3>
                  <p className="text-sm text-dark-600 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            {/* Quick Estimate Request Card on Right */}
            <div className="lg:col-span-4 bg-dark-900 text-white p-6 rounded-2xl border border-dark-800 shadow-xl sticky top-24">
              <span className="text-xs text-primary-400 font-bold uppercase tracking-wider block mb-1">
                Fast Upfront Pricing
              </span>
              <h3 className="text-xl font-display font-bold mb-3">
                Need {service.title}?
              </h3>
              <p className="text-xs text-dark-300 leading-relaxed mb-5">
                We provide free estimates on most standard electrical projects across Mission Viejo and South Orange County. Call or request online:
              </p>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-500 hover:bg-primary-400 text-white rounded-xl font-bold text-base transition-all shadow-md mb-3"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href="#service-estimate"
                className="block text-center w-full py-2.5 bg-dark-800 hover:bg-dark-700 text-dark-200 rounded-xl font-semibold text-xs border border-dark-700 transition-colors"
              >
                Request Online Estimate ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* When a Customer Needs This Service */}
      <section className="py-14 md:py-20 bg-dark-50 border-y border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Warning Signs & Project Triggers
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 mb-3">
              When Do You Need {service.title}?
            </h2>
            <p className="text-dark-600 text-sm leading-relaxed">
              Common indicators, lifestyle upgrades, or electrical hazards that require professional attention from our licensed team.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.whenNeeded.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-dark-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-dark-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-dark-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Procedure */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Our Professional Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 mb-3">
              How the Work is Carried Out
            </h2>
            <p className="text-dark-600 text-sm leading-relaxed">
              From evaluation to final inspection, our proven 4-step process ensures transparency, code compliance, and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.procedure.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-dark-50 border border-dark-100 relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-500 text-white font-display font-bold flex items-center justify-center mb-4 shadow-md">
                  {step.step}
                </div>
                <h3 className="font-display font-bold text-dark-900 text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-dark-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Safety, Permitting & Installation Considerations */}
      <section className="py-14 md:py-20 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-primary-400 font-bold text-xs uppercase tracking-wider block">
                Safety & Code Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-tight">
                {service.safetyAndPermits.heading}
              </h2>
              <p className="text-dark-300 text-sm leading-relaxed">
                {service.safetyAndPermits.body}
              </p>
            </div>

            <div className="lg:col-span-6 bg-dark-950 p-6 md:p-8 rounded-2xl border border-dark-800 space-y-3">
              <div className="text-xs text-primary-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                Critical Compliance Highlights
              </div>
              <ul className="space-y-3 text-xs text-dark-300">
                {service.safetyAndPermits.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {companionLink && (
                <div className="mt-4 p-3.5 rounded-xl bg-dark-900 border border-dark-800 text-xs text-dark-300">
                  <span className="text-primary-400 font-semibold">{companionLink.prompt} </span>
                  Our licensed technicians provide comprehensive{' '}
                  <Link to={companionLink.url} className="text-primary-300 font-semibold underline hover:text-white">
                    {companionLink.linkText}
                  </Link>
                  {' '}{companionLink.note}
                </div>
              )}
              <div className="pt-4 border-t border-dark-800 text-[11px] text-dark-400">
                All work performed under California CSLB Electrical License #999000.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genuine Project Example / Photo Spotlight */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Verified Project Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 mb-3">
              Recent {service.title} Project
            </h2>
            <p className="text-dark-600 text-sm leading-relaxed">
              Genuine local electrical work completed by Ultimate Green Electric in South Orange County.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-dark-50 rounded-2xl overflow-hidden border border-dark-200 shadow-lg grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 relative min-h-[260px]">
              <img
                src={service.projectHighlight.image}
                alt={service.projectHighlight.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-dark-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                {service.title}
              </div>
              <div className="absolute bottom-3 left-3 bg-dark-950/70 text-white text-xs px-2.5 py-1 rounded flex items-center gap-1">
                <MapPin className="w-3 h-3 text-primary-400" />
                {service.projectHighlight.location}
              </div>
            </div>

            <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block mb-1">
                  Completed Job Spotlight
                </span>
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-3">
                  {service.projectHighlight.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-4">
                  {service.projectHighlight.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-dark-200 mb-6">
                  {service.projectHighlight.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-dark-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1"
                >
                  <span>Request Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-dark-400">CSLB Lic #{BUSINESS.license}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Estimate Form for High Conversion */}
      <section id="service-estimate" className="py-16 md:py-24 bg-dark-50 border-y border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
                Free Upfront Estimate
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
                Schedule Your {service.title}
              </h2>
              <p className="text-dark-600 text-sm leading-relaxed mb-6">
                Tell us about your electrical needs. Our dispatch team responds to all online estimate inquiries within 1 business hour.
              </p>

              <div className="p-4 rounded-xl bg-white border border-dark-200 text-xs text-dark-600 space-y-2 mb-6">
                <div className="font-bold text-dark-800">Direct Telephone Inquiries:</div>
                <div>Prefer to speak with an electrician now?</div>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-block text-primary-600 hover:text-primary-700 font-bold text-base"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>

              <div className="text-xs text-dark-500">
                <strong>Satisfaction Warranty:</strong> All workmanship and materials installed by Ultimate Green Electric, Inc. are covered by our 100% satisfaction and code compliance guarantee.
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateForm
                initialService={service.title}
                sourcePage={`${service.title} Page`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Electrical Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Related Solutions
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-2">
              Other Electrical Services You May Need
            </h2>
            <p className="text-dark-500 text-xs">
              Explore our complementary residential and commercial electrical services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${MAIN_LOCATION}`}
                className="group bg-dark-50 rounded-2xl p-5 border border-dark-100 hover:border-primary-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-dark-900 text-base mb-2 group-hover:text-primary-600 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-dark-500 text-xs leading-relaxed line-clamp-3 mb-4">
                    {s.summary}
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View {s.shortTitle} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Genuinely Served City Pages Grid */}
      <section className="py-14 bg-dark-50 border-t border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-1">
              Local Service Coverage
            </span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-dark-900 mb-2">
              Providing {service.title} Across South Orange County
            </h3>
            <p className="text-dark-600 text-xs leading-relaxed max-w-2xl mx-auto mb-4">
              We dispatch licensed mobile electricians for {service.title.toLowerCase()} across South Orange County. Whether your project is in{' '}
              <Link to="/electrician-mission-viejo" className="text-primary-600 font-medium hover:underline">Mission Viejo</Link>
              {', '}
              <Link to="/electrician-irvine" className="text-primary-600 font-medium hover:underline">Irvine</Link>
              {', '}
              <Link to="/electrician-lake-forest" className="text-primary-600 font-medium hover:underline">Lake Forest</Link>
              {', or coastal communities like '}
              <Link to="/electrician-dana-point" className="text-primary-600 font-medium hover:underline">Dana Point</Link>
              {' and '}
              <Link to="/electrician-newport-beach" className="text-primary-600 font-medium hover:underline">Newport Beach</Link>
              {', our service vehicles arrive fully equipped for code-compliant evaluation and same-day service.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
            {SERVICE_LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/electrician-${loc.slug}`}
                className="p-3 bg-white rounded-xl border border-dark-200 hover:border-primary-400 hover:text-primary-600 text-dark-700 font-medium transition-all text-center flex items-center justify-center gap-1.5 shadow-sm hover:shadow"
              >
                <MapPin className="w-3.5 h-3.5 text-primary-500" />
                <span>Electrician in {loc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CTASection
        title={`Ready for Expert ${service.title}?`}
        subtitle="Call us today for upfront itemized pricing, clean workmanship, and licensed electricians."
      />

      {/* Service-Specific FAQs */}
      <FAQAccordion faqs={allFaqs} title={`${service.title} FAQs`} />
    </>
  );
}
