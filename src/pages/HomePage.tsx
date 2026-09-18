import { Phone, MapPin, Shield, Clock, Star, Zap, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import ServicesGrid from '@/components/ServicesGrid';
import ServiceAreasSection from '@/components/ServiceAreasSection';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import MapSection from '@/components/MapSection';
import FAQAccordion from '@/components/FAQAccordion';
import { BUSINESS, HOME_FAQS } from '@/data/business';
import { localBusinessSchema, faqSchema } from '@/data/schema';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Ultimate Green Electric | Mission Viejo Electrician — (949) 305-3545"
        description="Top-rated licensed electrician in Mission Viejo, CA. Residential, commercial, emergency, panel upgrades, EV chargers & more. Serving all of South Orange County. Call (949) 305-3545."
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

      <ServicesGrid />
      <AboutSection />
      <ServiceAreasSection />
      <Testimonials />
      <CTASection />
      <MapSection />
      <FAQAccordion faqs={HOME_FAQS} />
    </>
  );
}
