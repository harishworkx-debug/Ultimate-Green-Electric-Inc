import { Navigate } from 'react-router-dom';
import { Phone, MapPin, CheckCircle2, Star, Shield, Clock, ChevronRight, Zap, Wrench, Building2, Home, ArrowRight, AlertTriangle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import Testimonials from '@/components/Testimonials';
import EstimateForm from '@/components/EstimateForm';
import { SERVICES, SERVICE_LOCATIONS, BUSINESS, MAIN_LOCATION, GENERAL_FAQS, COMPANY_CREDENTIALS } from '@/data/business';
import { localBusinessSchema, faqSchema, breadcrumbSchema, organizationSchema, webSiteSchema } from '@/data/schema';
import { LOCATION_CONTENTS } from '@/data/locations';

export default function LocationPage({ slug }: { slug: string }) {
  const location = SERVICE_LOCATIONS.find((l) => l.slug === slug);
  const content = LOCATION_CONTENTS[slug];

  if (!location || !content) {
    return <Navigate to="/404" replace />;
  }

  const isMain = location.slug === MAIN_LOCATION;
  const locationName = location.name;
  const primaryKeyword = content.primaryKeyword || `Electrician in ${locationName}, CA`;
  const canonical = `/electrician-${location.slug}`;

  const allFaqs = [...content.faqs, ...GENERAL_FAQS.slice(0, 2)];

  const nearbyCities = SERVICE_LOCATIONS.filter((l) => l.slug !== slug).slice(0, 5);

  const cityServiceLinks = [
    {
      slug: 'residential-electrician',
      title: `Residential Electrician in ${locationName}`,
      icon: Home,
      summary: content.residential,
      action: 'Explore Residential Services',
    },
    {
      slug: 'commercial-electrician',
      title: `Commercial Electrical Contracting in ${locationName}`,
      icon: Building2,
      summary: content.commercial,
      action: 'View Commercial Capabilities',
    },
    {
      slug: 'panel-upgrade',
      title: `Electrical Panel Upgrades in ${locationName}`,
      icon: Zap,
      summary: content.panel,
      action: 'See Panel Upgrade Options',
    },
    {
      slug: 'ev-charger-installation',
      title: `Level 2 EV Charger Installation in ${locationName}`,
      icon: CheckCircle2,
      summary: content.ev,
      action: 'Schedule EV Charger Install',
    },
    {
      slug: 'electrical-repair',
      title: `Electrical Repair & Diagnostics in ${locationName}`,
      icon: Wrench,
      summary: `Fast diagnosis for tripping breakers, flickering lights, dead outlets, and wiring faults throughout ${locationName}. Upfront itemized pricing before work begins.`,
      action: 'Book Electrical Repair',
    },
    {
      slug: 'emergency-electrician',
      title: `24/7 Emergency Electrician serving ${locationName}`,
      icon: AlertTriangle,
      summary: content.emergency,
      action: 'Call 24/7 Emergency Line',
    },
  ];

  return (
    <>
      <SEO
        title={content.metaTitle}
        description={content.metaDescription}
        canonical={canonical}
        schema={[
          organizationSchema(),
          webSiteSchema(),
          localBusinessSchema(),
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Service Areas', url: '/#service-areas' },
            { name: primaryKeyword, url: canonical },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-20 md:pt-28 pb-16 md:pb-24 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt={`Licensed electrician working on an electrical panel in ${locationName}, CA`}
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
                { name: 'Service Areas', url: '/#service-areas' },
                { name: primaryKeyword, url: canonical },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 backdrop-blur-md">
              <MapPin className="w-4 h-4 text-primary-400" />
              <span>Verified Service Area: {locationName}, CA ({content.zipCodes.join(', ')})</span>
            </div>

            {/* Clear Primary Keyword H1 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white leading-tight mb-5 text-shadow-lg">
              {primaryKeyword} — <span className="text-primary-400">Ultimate Green Electric</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-dark-200 mb-8 leading-relaxed">
              Licensed California electrical contractor (<span className="text-white font-semibold">CA Lic #{BUSINESS.license}</span>) providing code-compliant residential installations, commercial electrical contracting, and fast emergency repairs throughout {locationName} and South Orange County.
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
                href="#city-estimate"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-4 rounded-xl font-bold text-base transition-all"
              >
                <span>Request Free Estimate</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Verified Transparency Pill */}
            <div className="p-3.5 bg-dark-900/80 backdrop-blur-md rounded-xl border border-dark-700/80 text-xs text-dark-300 flex items-center gap-3">
              <Shield className="w-4 h-4 text-primary-400 flex-shrink-0" />
              <span>
                {isMain ? (
                  <><strong>Mission Viejo Headquarters:</strong> 27525 Puerta Real Ste 300-140 · On-site dispatch and office appointments available.</>
                ) : (
                  <><strong>Direct Mobile Dispatch:</strong> Mobile service units dispatched to {locationName} daily from our nearby Mission Viejo hub ({BUSINESS.street}). Typical arrival in 30–45 mins.</>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials Strip */}
      <section className="bg-dark-900 py-4 border-b border-dark-800 text-xs text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary-400" />
              <span>California CSLB Lic #{COMPANY_CREDENTIALS.cslbLicense}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-400" />
              <span>{COMPANY_CREDENTIALS.insuranceCoverage}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-400" />
              <span>Mon-Fri 7AM-5PM · 24/7 Emergency</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-accent-400" fill="currentColor" />
              <span>5-Star Verified Customer Reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Unique City Overview & Architectural Characteristics */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
                  Local Electrical Expertise
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 leading-tight">
                  Electrical Services Tailored for {locationName}
                </h2>
              </div>

              <p className="text-base text-dark-700 leading-relaxed">
                {content.intro}
              </p>

              <div className="p-5 rounded-2xl bg-dark-50 border border-dark-200 space-y-3">
                <div className="flex items-center gap-2 text-dark-900 font-bold text-sm">
                  <FileText className="w-4 h-4 text-primary-600" />
                  Building Characteristics & Local Code Requirements in {locationName}
                </div>
                <p className="text-xs text-dark-600 leading-relaxed">
                  {content.buildingCharacteristics}
                </p>
                <div className="text-xs text-dark-500 pt-2 border-t border-dark-200 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-600" />
                  <span>Permits coordinated directly through the <strong>{content.permitAuthority}</strong>.</span>
                </div>
                <div className="text-xs text-dark-700 pt-2 border-t border-dark-200">
                  <span className="font-semibold text-dark-900">Common local projects:</span> Due to local housing characteristics and power requirements, homeowners and commercial property managers frequently schedule{' '}
                  <Link to={`/panel-upgrade-${MAIN_LOCATION}`} className="text-primary-600 font-semibold hover:underline">
                    electrical panel upgrades in {locationName}
                  </Link>
                  {', '}
                  <Link to={`/ev-charger-installation-${MAIN_LOCATION}`} className="text-primary-600 font-semibold hover:underline">
                    Level 2 EV charger installations
                  </Link>
                  {', and '}
                  <Link to={`/electrical-repair-${MAIN_LOCATION}`} className="text-primary-600 font-semibold hover:underline">
                    troubleshooting electrical repairs
                  </Link>
                  .
                </div>
              </div>

              <p className="text-sm text-dark-600 leading-relaxed">
                {content.servicesIntro}
              </p>
            </div>

            {/* Quick Request Box on Right */}
            <div className="lg:col-span-4 bg-dark-900 text-white p-6 rounded-2xl border border-dark-800 shadow-xl">
              <span className="text-xs text-primary-400 font-bold uppercase tracking-wider block mb-1">
                Need Help in {locationName}?
              </span>
              <h3 className="text-xl font-display font-bold mb-3">
                Talk to an Electrician Now
              </h3>
              <p className="text-xs text-dark-300 leading-relaxed mb-5">
                We review all inquiries within 1 business hour. For sparking, burning odors, or sudden power loss in {locationName}, call our 24/7 hotline directly:
              </p>
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-500 hover:bg-primary-400 text-white rounded-xl font-bold text-base transition-all shadow-md mb-3"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS.phoneDisplay}</span>
              </a>
              <a
                href="#city-estimate"
                className="block text-center w-full py-2.5 bg-dark-800 hover:bg-dark-700 text-dark-200 rounded-xl font-semibold text-xs border border-dark-700 transition-colors"
              >
                Jump to Online Estimate Form ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* City-Specific Services with Direct Internal Links */}
      <section className="py-16 md:py-20 bg-dark-50 border-y border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Comprehensive Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Core Electrical Services in {locationName}
            </h2>
            <p className="text-dark-600 text-sm leading-relaxed">
              Explore our full range of licensed electrical services for {locationName} homes and commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityServiceLinks.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-dark-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-dark-900 text-lg mb-2">
                    <Link
                      to={`/${service.slug}-${MAIN_LOCATION}`}
                      className="hover:text-primary-600 transition-colors"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-dark-600 text-xs leading-relaxed mb-4">
                    {service.summary}
                  </p>
                </div>
                <Link
                  to={`/${service.slug}-${MAIN_LOCATION}`}
                  className="text-xs font-bold text-primary-600 hover:text-primary-700 flex items-center gap-1.5 pt-3 border-t border-dark-100 mt-2"
                >
                  <span>{service.action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Complementary Services Strip */}
          <div className="mt-8 p-5 bg-white rounded-2xl border border-dark-200 text-center text-xs text-dark-600">
            <span className="font-semibold text-dark-800">Additional specialized services available in {locationName}: </span>
            <Link to={`/lighting-installation-${MAIN_LOCATION}`} className="text-primary-600 hover:underline font-medium">Recessed & Exterior Lighting</Link>
            {' · '}
            <Link to={`/outlet-switch-repair-${MAIN_LOCATION}`} className="text-primary-600 hover:underline font-medium">Outlet & Switch Repairs</Link>
            {' · '}
            <Link to={`/ceiling-fan-installation-${MAIN_LOCATION}`} className="text-primary-600 hover:underline font-medium">Ceiling Fan Installation</Link>
            {' · '}
            <Link to={`/electrical-inspection-${MAIN_LOCATION}`} className="text-primary-600 hover:underline font-medium">Code Compliance Inspections</Link>
          </div>
        </div>
      </section>

      {/* Real Local Project Evidence */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Verified Workmanship
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 mb-3">
              Completed Electrical Work in {locationName}
            </h2>
            <p className="text-dark-600 text-sm leading-relaxed">
              Genuine local project example completed by Ultimate Green Electric in {locationName} or surrounding South Orange County neighborhoods.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-dark-50 rounded-2xl overflow-hidden border border-dark-200 shadow-lg grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-5 relative min-h-[260px]">
              <img
                src={content.localProject.image}
                alt={content.localProject.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 bg-dark-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
                {content.localProject.category}
              </div>
              <div className="absolute bottom-3 left-3 bg-dark-950/70 text-white text-xs px-2.5 py-1 rounded flex items-center gap-1">
                <MapPin className="w-3 h-3 text-primary-400" />
                {locationName}, CA
              </div>
            </div>

            <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wider block mb-1">
                  Local Job Spotlight
                </span>
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-3">
                  {content.localProject.title}
                </h3>
                <p className="text-dark-600 text-sm leading-relaxed mb-4">
                  {content.localProject.description}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-dark-200 mb-6">
                  {content.localProject.specs.map((spec, i) => (
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
                  <span>Request Similar Project in {locationName}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <span className="text-[11px] text-dark-400">CSLB Lic #{BUSINESS.license}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for this Location */}
      <section className="py-14 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <span className="text-primary-400 font-bold text-xs uppercase tracking-wider block mb-2">
                Locally Respected
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4">
                Why {locationName} Residents Trust Ultimate Green Electric
              </h2>
              <p className="text-dark-300 text-sm leading-relaxed mb-6">
                {content.whyChoose}
              </p>
              <div className="grid grid-cols-2 gap-4 text-xs text-dark-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Licensed, bonded & insured ($2M liability)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Itemized quotes with zero surprise fees</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>Clean work etiquette & floor protection</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                  <span>100% code compliance warranty</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-dark-950 p-6 md:p-8 rounded-2xl border border-dark-800">
              <div className="text-xs text-dark-400 font-semibold mb-2 uppercase">Nearby Communities Served</div>
              <p className="text-xs text-dark-300 mb-4 leading-relaxed">{content.areasNear}</p>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/electrician-${c.slug}`}
                    className="text-xs px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-primary-900/40 text-dark-200 hover:text-primary-300 border border-dark-700 transition-colors"
                  >
                    Electrician {c.name} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Estimate Form for High Conversion */}
      <section id="city-estimate" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
                Free Upfront Estimates
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
                Request an Electrical Estimate in {locationName}
              </h2>
              <p className="text-dark-600 text-sm leading-relaxed mb-6">
                Tell us about your electrical repair, panel upgrade, or installation in {locationName}. Our dispatch coordinator reviews every inquiry within 1 business hour to provide pricing and schedule service.
              </p>

              <div className="p-4 rounded-xl bg-dark-50 border border-dark-200 text-xs text-dark-600 space-y-2 mb-6">
                <div className="font-bold text-dark-800">Direct Phone Inquiries:</div>
                <div>Prefer to speak with an electrician immediately?</div>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-block text-primary-600 hover:text-primary-700 font-bold text-base"
                >
                  Call {BUSINESS.phoneDisplay}
                </a>
              </div>

              <div className="text-xs text-dark-500">
                <strong>CSLB License Notice:</strong> Ultimate Green Electric, Inc. is licensed under California Contractor License #999000 (C-10 Electrical). All work is performed in compliance with the California Electrical Code and municipal guidelines.
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateForm
                initialCity={locationName}
                sourcePage={`${locationName} Landing Page`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Proof & Authentic Testimonials */}
      <Testimonials />

      {/* Nearby Communities We Serve */}
      <section className="py-12 bg-white border-t border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-1">
              Regional Coverage
            </span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-dark-900 mb-2">
              Serving Communities Neighboring {locationName}
            </h3>
            <p className="text-dark-600 text-xs">
              Our mobile electricians also provide prompt on-site service to adjacent South Orange County cities:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyCities.map((nearLoc) => (
              <Link
                key={nearLoc.slug}
                to={`/electrician-${nearLoc.slug}`}
                className="px-4 py-2.5 rounded-xl bg-dark-50 border border-dark-200 text-dark-700 hover:text-primary-600 hover:border-primary-400 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm hover:shadow"
              >
                <MapPin className="w-3.5 h-3.5 text-primary-500" />
                <span>Electrician in {nearLoc.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Service Area Notice / Dispatch Information */}
      <section className="py-12 bg-dark-50 border-t border-dark-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 text-primary-700 bg-primary-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-primary-600" />
            Service Area Business Transparency
          </div>
          <h2 className="text-2xl font-display font-bold text-dark-900 mb-3">
            Serving {locationName} from Our South Orange County Office
          </h2>
          <p className="text-dark-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-4">
            Ultimate Green Electric, Inc. is a licensed California electrical contractor headquartered at <strong>{BUSINESS.street}, {BUSINESS.city}, CA {BUSINESS.zip}</strong>. We operate fully equipped mobile electrical units providing on-site residential and commercial service directly to properties in {locationName} and surrounding South Orange County communities.
          </p>
          <p className="text-dark-500 text-xs">
            CA Lic #{BUSINESS.license} · Phone: <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary-600 font-bold hover:underline">{BUSINESS.phoneDisplay}</a> · Email: <a href={`mailto:${BUSINESS.email}`} className="text-primary-600 font-bold hover:underline">{BUSINESS.email}</a>
          </p>
        </div>
      </section>

      {/* Local Customer Questions (FAQs) */}
      <FAQAccordion
        faqs={allFaqs}
        title={`Electrical Questions in ${locationName}`}
      />
    </>
  );
}
