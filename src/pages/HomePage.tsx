import { Phone, MapPin, Shield, Clock, Star, Zap, ChevronRight, CheckCircle2, Award, ArrowRight, Wrench, Building2, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import ServicesGrid from '@/components/ServicesGrid';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import FAQAccordion from '@/components/FAQAccordion';
import ProjectGallery from '@/components/ProjectGallery';
import EstimateForm from '@/components/EstimateForm';
import { BUSINESS, HOME_FAQS, SERVICES, SERVICE_LOCATIONS, MAIN_LOCATION, COMPANY_CREDENTIALS } from '@/data/business';
import { localBusinessSchema, faqSchema, organizationSchema, webSiteSchema } from '@/data/schema';

export default function HomePage() {
  const topServices = [
    {
      slug: 'residential-electrician',
      title: 'Residential Electrician',
      icon: Home,
      desc: 'Panel upgrades, whole-home rewiring, EV charger installations, and lighting for Mission Viejo homeowners.',
    },
    {
      slug: 'commercial-electrician',
      title: 'Commercial Electrician',
      icon: Building2,
      desc: 'Code-compliant electrical contracting, tenant improvements, LED retrofits, and scheduled maintenance.',
    },
    {
      slug: 'electrical-repair',
      title: 'Electrical Repairs',
      icon: Wrench,
      desc: 'Fast diagnosis and repair of tripping breakers, faulty outlets, flickering lights, and power loss.',
    },
    {
      slug: 'emergency-electrician',
      title: '24/7 Emergency Service',
      icon: Zap,
      desc: 'Rapid emergency response for sparking, burning smells, or sudden outages across South Orange County.',
    },
  ];

  const primaryCities = SERVICE_LOCATIONS.slice(0, 6);

  return (
    <>
      <SEO
        title="Electrician in Mission Viejo, CA | Ultimate Green Electric"
        description="Top-rated licensed electrician in Mission Viejo, CA (Lic #999000). Residential, commercial, panel upgrades, EV chargers & fast electrical repairs. Call (949) 312-6033."
        canonical="/"
        schema={[organizationSchema(), webSiteSchema(), localBusinessSchema(), faqSchema(HOME_FAQS)]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[620px] md:min-h-[720px] flex items-center overflow-hidden pt-20 md:pt-28 bg-dark-950">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Licensed electrician installing circuit breakers in Mission Viejo CA"
            fetchpriority="high"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/85 to-dark-950/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-dark-950/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/40 text-primary-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 backdrop-blur-md">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Primary Service Area: Mission Viejo & South Orange County</span>
              </div>

              {/* Single Clear H1 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-5 tracking-tight text-shadow-lg">
                Electrician Mission Viejo CA — <span className="text-primary-400">Ultimate Green Electric</span>
              </h1>

              {/* Supporting Topics Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-dark-200 mb-8 max-w-2xl leading-relaxed">
                California licensed electrical contractor (<span className="text-white font-semibold">CA Lic #{BUSINESS.license}</span>) specializing in residential electrical installations, commercial tenant projects, and fast electrical repairs with upfront pricing and zero hidden fees.
              </p>

              {/* Above the fold CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Phone CTA */}
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-400 text-white px-7 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-primary-500/40 active:scale-95 group"
                >
                  <Phone className="w-6 h-6 animate-pulse" />
                  <span>Call {BUSINESS.phoneDisplay}</span>
                </a>

                {/* Estimate Request CTA */}
                <a
                  href="#estimate-section"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-7 py-4 rounded-xl font-bold text-lg transition-all shadow-lg active:scale-95"
                >
                  <span>Request Free Estimate</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Verified Credentials Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-dark-300 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span>CA Lic #{BUSINESS.license}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span>Bonded & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary-400 flex-shrink-0" />
                  <span>24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-accent-400 flex-shrink-0" fill="currentColor" />
                  <span>5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Right Above-The-Fold Quick Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="bg-dark-900/90 backdrop-blur-md rounded-2xl p-6 border border-dark-700/80 shadow-2xl text-white">
                <div className="flex items-center justify-between pb-4 border-b border-dark-800 mb-4">
                  <div>
                    <span className="text-xs text-primary-400 font-bold uppercase tracking-wider block">Immediate Dispatch</span>
                    <span className="font-display font-bold text-lg">Mission Viejo Service Hub</span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center border border-primary-500/30">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 mb-5 text-xs text-dark-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Licensed Electrical Contractor:</strong> Full code compliance, City of Mission Viejo permits pulled & inspected.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Residential & Commercial:</strong> Dedicated crews for both home rewiring & commercial properties.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Upfront Itemized Pricing:</strong> Detailed quotes before any work starts with zero surprises.</span>
                  </div>
                </div>

                <div className="bg-dark-950 rounded-xl p-4 border border-dark-800 text-center mb-4">
                  <div className="text-xs text-dark-400 mb-1">Direct Electrical Hotline</div>
                  <a
                    href={`tel:${BUSINESS.phoneRaw}`}
                    className="font-display font-bold text-xl text-primary-400 hover:text-primary-300 block transition-colors"
                  >
                    {BUSINESS.phoneDisplay}
                  </a>
                  <div className="text-[11px] text-dark-400 mt-1">Average response time: &lt; 15 mins during business hours</div>
                </div>

                <a
                  href="#estimate-section"
                  className="block text-center w-full py-3 bg-primary-500 hover:bg-primary-400 text-white rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  Get an Instant Online Estimate →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar & Metrics */}
      <section className="bg-dark-900 py-6 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: COMPANY_CREDENTIALS.yearsInBusiness, label: 'Years in Orange County', detail: 'Serving since 2005' },
              { value: `Lic #${COMPANY_CREDENTIALS.cslbLicense}`, label: 'CSLB Electrical License', detail: 'C-10 Active & Verified' },
              { value: '100%', label: 'Satisfaction Guarantee', detail: 'Code-compliant work' },
              { value: '24/7', label: 'Emergency Electrician', detail: 'South OC coverage' },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left md:border-r border-dark-800 last:border-0 pl-2">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-400">{stat.value}</div>
                <div className="text-xs md:text-sm font-semibold text-white mt-0.5">{stat.label}</div>
                <div className="text-[11px] text-dark-400">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Links to Most Important Service & City Pages */}
      <section className="py-12 bg-white border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-primary-600 font-semibold text-xs uppercase tracking-wider block mb-1">
                Direct Service Directory
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900">
                Core Electrical Services in Mission Viejo & South OC
              </h2>
            </div>
            <Link
              to="/#services"
              className="text-primary-600 hover:text-primary-700 text-sm font-bold flex items-center gap-1 self-start"
            >
              <span>Explore all 10 specialized services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topServices.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="group p-6 rounded-2xl bg-dark-50 border border-dark-100 hover:border-primary-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-dark-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-500 text-xs leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
                <div className="flex items-center text-primary-600 font-semibold text-xs group-hover:translate-x-1 transition-transform">
                  <span>Learn more about {service.title}</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Quick city navigation bar */}
          <div className="mt-8 pt-6 border-t border-dark-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-dark-700 mr-2 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary-600" />
              Direct City Pages:
            </span>
            {primaryCities.map((city) => (
              <Link
                key={city.slug}
                to={`/electrician-${city.slug}`}
                className="text-xs px-3 py-1.5 bg-white border border-dark-200 rounded-lg text-dark-700 hover:border-primary-400 hover:text-primary-600 hover:bg-primary-50/50 transition-colors font-medium"
              >
                Electrician {city.name}
              </Link>
            ))}
            <Link
              to="#service-areas"
              className="text-xs font-semibold text-primary-600 hover:underline px-2 py-1"
            >
              + View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Supporting Topics Deep Dive */}
      <section className="py-16 md:py-20 bg-dark-50 border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-semibold text-xs uppercase tracking-wider block mb-2">
              Comprehensive Electrical Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Your Licensed Electrical Contractor in Mission Viejo
            </h2>
            <p className="text-dark-600 text-base leading-relaxed">
              From historic neighborhoods to modern corporate centers, Ultimate Green Electric, Inc. delivers code-compliant electrical excellence backed by certified electricians and state-of-the-art diagnostic technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Topic 1: Licensed Electrical Contractor */}
            <div className="bg-white p-8 rounded-2xl border border-dark-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-dark-900">Licensed Electrical Contractor</h3>
                  <span className="text-xs text-primary-600 font-medium">California CSLB License #999000</span>
                </div>
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-4">
                Working with an unlicensed handyman puts your home and insurance coverage at serious risk. Ultimate Green Electric is a fully verified California C-10 Electrical Contractor holding comprehensive worker's compensation and $2,000,000 general liability insurance. We handle all city permit pulling, load calculations, and pass inspections with Orange County building departments.
              </p>
              <div className="space-y-2 text-xs text-dark-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Compliant with 2026 California Electrical Code (Title 24)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>City permit acquisition and inspection coordination included</span>
                </div>
              </div>
            </div>

            {/* Topic 2: Residential Electrician */}
            <div className="bg-white p-8 rounded-2xl border border-dark-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-dark-900">Residential Electrician</h3>
                  <span className="text-xs text-primary-600 font-medium">Home Wiring, Panels & Clean Workmanship</span>
                </div>
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-4">
                Whether you need a 200A panel upgrade to support central AC, a dedicated Level 2 EV charging station for your Tesla, or modern recessed LED lighting throughout your kitchen and living spaces, our residential team treats your home with the highest respect. We wear shoe covers, protect your flooring, and vacuum before leaving.
              </p>
              <div className="space-y-2 text-xs text-dark-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Level 2 Tesla & universal EV charger installations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Whole-home rewiring, arc-fault & GFCI breaker upgrades</span>
                </div>
              </div>
            </div>

            {/* Topic 3: Commercial Electrician */}
            <div className="bg-white p-8 rounded-2xl border border-dark-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-dark-900">Commercial Electrician</h3>
                  <span className="text-xs text-primary-600 font-medium">Tenant Buildouts & Energy Retrofits</span>
                </div>
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-4">
                Commercial electrical downtime costs money. We work with property managers, retail storefronts, restaurants, and medical suites across South Orange County. We offer flexible after-hours and weekend scheduling so your daily business operations remain uninterrupted during major electrical installations.
              </p>
              <div className="space-y-2 text-xs text-dark-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Title 24 commercial LED retrofits with automatic daylight sensors</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>3-phase distribution panels and dedicated machine circuits</span>
                </div>
              </div>
            </div>

            {/* Topic 4: Electrical Repairs in the Verified Service Area */}
            <div className="bg-white p-8 rounded-2xl border border-dark-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-dark-900">Fast Electrical Repairs in Verified Service Area</h3>
                  <span className="text-xs text-primary-600 font-medium">Same-Day Diagnostic & Repair Vehicles</span>
                </div>
              </div>
              <p className="text-dark-600 text-sm leading-relaxed mb-4">
                Our service vehicles are fully stocked mobile warehouses loaded with commercial-grade breakers, switches, GFCIs, and conduit. When our Mission Viejo electrician arrives, we identify the root cause using thermal cameras and precision circuit analyzers, preventing recurring breaker trips or hazardous arcing.
              </p>
              <div className="space-y-2 text-xs text-dark-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Same-day troubleshooting across Mission Viejo, Irvine, & Laguna Niguel</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-500" />
                  <span>Upfront itemized quotes before any repair work commences</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Actual Project Photos & Showcase */}
      <ProjectGallery />

      {/* Full Services Grid */}
      <ServicesGrid />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Process Section */}
      <ProcessSection />

      {/* About Section */}
      <AboutSection />

      {/* Estimate Request Form Section Anchor */}
      <section id="estimate-section" className="py-16 md:py-24 bg-gradient-to-b from-dark-950 to-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 bg-primary-500/20 text-primary-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-primary-500/30">
                <Zap className="w-3.5 h-3.5" />
                Free Estimates & Honest Advice
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Request an Electrical Estimate in Mission Viejo
              </h2>
              <p className="text-dark-300 text-base leading-relaxed mb-6">
                Tell us about your project or repair needs. Our licensed master electrician will review your scope, provide transparent pricing, and schedule a fast site visit.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">No Obligation Quotes</h4>
                    <p className="text-dark-400 text-xs">Clear itemized scope with parts and labor clearly detailed.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-500/30">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">1-Hour Response SLA</h4>
                    <p className="text-dark-400 text-xs">We respond to every estimate inquiry within 1 hour during business hours.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/20 text-primary-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">Prefer to Talk Now?</h4>
                    <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary-400 font-bold hover:underline text-xs">
                      Call {BUSINESS.phoneDisplay} for immediate assistance
                    </a>
                  </div>
                </div>
              </div>

              {/* License Card */}
              <div className="p-4 rounded-xl bg-dark-900 border border-dark-800 text-xs text-dark-400">
                <span className="font-bold text-white block mb-1">Ultimate Green Electric, Inc.</span>
                <span>27525 Puerta Real Ste 300-140, Mission Viejo, CA 92692</span><br />
                <span>CSLB C-10 Electrical License #{BUSINESS.license}</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <EstimateForm sourcePage="Homepage Estimate Section" />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Callout */}
      <section className="py-12 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-800 to-primary-950 rounded-2xl p-8 md:p-12 relative overflow-hidden border border-primary-500/30">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  <Zap className="w-3.5 h-3.5" />
                  24/7 Immediate Emergency Dispatch
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Electrical Emergency in Mission Viejo? Do Not Wait.
                </h2>
                <p className="text-primary-100 leading-relaxed mb-6">
                  Sparking outlets, burning plastic smells, buzzing main panels, or sudden whole-home power outages are immediate fire hazards. Our emergency electricians are on standby 24 hours a day, 7 days a week.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Sparking or arcing', 'Burning smell from breaker', 'Breaker tripping repeatedly', 'Sudden power loss', 'Water contact with panel'].map((item, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-primary-100 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all hover:shadow-2xl active:scale-95 shadow-xl"
                >
                  <Phone className="w-7 h-7 text-primary-600 animate-pulse" />
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="text-primary-200 text-sm mt-4">
                  24/7 Live Operator Dispatch · Mission Viejo & South Orange County
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section with Direct Links */}
      <ServiceAreasSection />

      {/* Testimonials Customer Proof */}
      <Testimonials />

      {/* License & Trust Verification Strip */}
      <section className="py-10 bg-white border-y border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-center">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary-600" />
              <span className="text-dark-700 font-semibold text-sm">CA Licensed #{BUSINESS.license}</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-dark-200" />
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary-600" />
              <span className="text-dark-700 font-semibold text-sm">Bonded & Insured ($2M Liability)</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-dark-200" />
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-accent-500" fill="currentColor" />
              <span className="text-dark-700 font-semibold text-sm">5-Star Verified Customer Rated</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-dark-200" />
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary-600" />
              <span className="text-dark-700 font-semibold text-sm">Serving South OC Since {COMPANY_CREDENTIALS.establishedYear}</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <MapSection />
      <FAQAccordion faqs={HOME_FAQS} />
    </>
  );
}
