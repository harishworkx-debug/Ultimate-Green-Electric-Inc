import { Phone, MapPin, Shield, Clock, Star, Zap, ChevronRight, CheckCircle2 } from 'lucide-react';
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
import { BUSINESS, HOME_FAQS, SERVICES, MAIN_LOCATION } from '@/data/business';
import { localBusinessSchema, faqSchema } from '@/data/schema';

export default function HomePage() {
  const popularServices = SERVICES.slice(0, 4);

  return (
    <>
      <SEO
        title="Ultimate Green Electric | Mission Viejo Electrician — (949) 284-7981"
        description="Top-rated licensed electrician in Mission Viejo, CA. Residential, commercial, emergency, panel upgrades, EV chargers & more. Serving all of South Orange County. Call (949) 284-7981."
        canonical="/"
        schema={[localBusinessSchema(), faqSchema(HOME_FAQS)]}
      />

      {/* Hero */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden pt-16 md:pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/17842832/pexels-photo-17842832.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Professional electrician working on an electrical panel in Mission Viejo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <MapPin className="w-4 h-4" />
              Serving Mission Viejo & South Orange County
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-bold text-white text-balance leading-tight mb-6 animate-fade-in-up text-shadow-lg">
              Mission Viejo's Trusted <span className="text-primary-400">Electrician</span>
            </h1>

            <p className="text-lg md:text-xl text-dark-200 mb-8 max-w-xl leading-relaxed animate-fade-in-up">
              Licensed, bonded, and insured electricians for residential, commercial, and emergency electrical services. Fast response, fair pricing, quality work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in-up">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="flex items-center justify-center gap-3 bg-primary-500 hover:bg-primary-400 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-2xl hover:shadow-primary-500/40 active:scale-95"
              >
                <Phone className="w-6 h-6" />
                Call Now: {BUSINESS.phoneDisplay}
              </a>
              <Link
                to="/#services"
                className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:bg-white/20"
              >
                View Services
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-dark-300 animate-fade-in">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary-400" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary-400" />
                Emergency Service
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-accent-400" fill="currentColor" />
                5-Star Rated
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary-400" />
                Free Estimates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-dark-900 py-6 border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '5,000+', label: 'Jobs Completed' },
              { value: '100%', label: 'Satisfaction' },
              { value: '24/7', label: 'Emergency Service' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-400">{stat.value}</div>
                <div className="text-xs md:text-sm text-dark-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular services quick links */}
      <section className="py-12 md:py-16 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
              Popular Services
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-3">
              Fast Help for Common Electrical Needs
            </h2>
            <p className="text-dark-500 max-w-2xl mx-auto">
              Whatever your electrical issue, our licensed Mission Viejo electricians have the tools and experience to solve it.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {popularServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}-${MAIN_LOCATION}`}
                className="group bg-white rounded-xl p-5 border border-dark-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                    <Zap className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark-800 group-hover:text-primary-600 transition-colors text-sm">
                      {s.title}
                    </h3>
                  </div>
                </div>
                <p className="text-dark-400 text-xs mb-3 line-clamp-2">{s.summary}</p>
                <span className="text-primary-600 text-sm font-medium">
                  {s.title} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSection />
      <AboutSection />

      {/* Emergency callout */}
      <section className="py-12 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-primary-800 to-primary-950 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  <Zap className="w-3.5 h-3.5" />
                  Emergency Service Available
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  Electrical Emergency? Do Not Wait.
                </h2>
                <p className="text-primary-100 leading-relaxed mb-6">
                  Sparking outlets, burning smells, buzzing panels, or sudden power loss are fire hazards that need immediate professional attention. We respond fast to electrical emergencies in Mission Viejo and all of South Orange County — any time, day or night.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['Sparking or arcing', 'Burning smell', 'Breaker will not reset', 'Power outage', 'Water near wiring'].map((item, i) => (
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
                  className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-5 rounded-xl font-bold text-xl hover:bg-primary-50 transition-all hover:shadow-2xl active:scale-95"
                >
                  <Phone className="w-7 h-7" />
                  {BUSINESS.phoneDisplay}
                </a>
                <p className="text-primary-200 text-sm mt-4">
                  Available 24/7 for electrical emergencies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceAreasSection />
      <Testimonials />

      {/* License & trust strip */}
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
              <span className="text-dark-700 font-semibold text-sm">Bonded & Insured</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-dark-200" />
            <div className="flex items-center gap-2">
              <Star className="w-6 h-6 text-accent-500" fill="currentColor" />
              <span className="text-dark-700 font-semibold text-sm">5-Star Customer Rated</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-dark-200" />
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary-600" />
              <span className="text-dark-700 font-semibold text-sm">Serving Since 2005</span>
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
