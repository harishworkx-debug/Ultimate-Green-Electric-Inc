import { Phone, Mail, MapPin, Clock, Shield, AlertTriangle, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import EstimateForm from '@/components/EstimateForm';
import { BUSINESS, SERVICE_LOCATIONS, COMPANY_CREDENTIALS } from '@/data/business';
import { localBusinessSchema, organizationSchema, webSiteSchema, breadcrumbSchema } from '@/data/schema';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Ultimate Green Electric | Request an Estimate"
        description="Contact Ultimate Green Electric in Mission Viejo, CA. Call (949) 312-6033 or request a free electrical estimate online. 24/7 emergency service available."
        canonical="/contact"
        schema={[
          organizationSchema(),
          webSiteSchema(),
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact', url: '/contact' },
          ]),
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-24 md:pt-32 pb-14 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Contact Us', url: '/contact' },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
              <Shield className="w-3.5 h-3.5 text-primary-400" />
              <span>CA Electrical Contractor Lic #{BUSINESS.license}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-4 leading-tight">
              Contact Ultimate Green Electric, Inc.
            </h1>

            <p className="text-base sm:text-lg text-dark-200 leading-relaxed mb-6">
              Have questions about an upcoming electrical project or need emergency troubleshooting? Get in touch with our licensed Mission Viejo electricians. We provide free upfront estimates and respond to inquiries within 1 business hour.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-dark-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary-400" />
                Response Time: Under 60 Mins (Mon-Fri)
              </span>
              <span className="hidden sm:inline text-dark-600">·</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary-400" />
                Free On-Site & Online Estimates
              </span>
              <span className="hidden sm:inline text-dark-600">·</span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary-400" />
                24/7 Emergency Dispatch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid & Estimate Form */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Emergency Alert Banner */}
          <div className="mb-10 p-5 rounded-2xl bg-amber-50 border-2 border-amber-300/80 text-amber-950 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-200 text-amber-800 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h2 className="font-display font-bold text-base text-amber-900">
                  Experiencing an Electrical Emergency?
                </h2>
                <p className="text-xs text-amber-800">
                  Sparking, burning odors, buzzing main breakers, or sudden loss of power requires immediate dispatch. Call our 24/7 hotline directly:
                </p>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold text-sm transition-all whitespace-nowrap shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Estimate Form */}
            <div className="lg:col-span-7">
              <EstimateForm sourcePage="Contact Page Main Form" />
            </div>

            {/* Right Column: Contact Details, Address, Hours */}
            <div className="lg:col-span-5 space-y-6">
              {/* Direct Phone & Click-to-Call */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-dark-500 font-semibold uppercase tracking-wider block">Direct Phone</span>
                    <h2 className="text-xl font-display font-bold text-dark-900">Call Our Office</h2>
                  </div>
                </div>
                <p className="text-xs text-dark-600 leading-relaxed mb-4">
                  Speak directly with an electrical coordinator to discuss project scopes, schedule on-site inspections, or request emergency assistance.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary-500 hover:bg-primary-600 text-white rounded-xl font-bold text-base transition-all shadow-md active:scale-[0.98]"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {BUSINESS.phoneDisplay}</span>
                </a>
              </div>

              {/* Direct Email */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-dark-500 font-semibold uppercase tracking-wider block">Email Inquiries</span>
                    <h2 className="text-xl font-display font-bold text-dark-900">Send an Email</h2>
                  </div>
                </div>
                <p className="text-xs text-dark-600 leading-relaxed mb-4">
                  Have architectural blueprints, electrical plans, or inspection reports to send? Email our team directly:
                </p>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-bold text-sm hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>{BUSINESS.email}</span>
                </a>
              </div>

              {/* Verified Physical Address */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-dark-500 font-semibold uppercase tracking-wider block">Verified Location</span>
                    <h2 className="text-xl font-display font-bold text-dark-900">Mission Viejo Office</h2>
                  </div>
                </div>
                <address className="not-italic text-sm text-dark-700 leading-relaxed mb-3">
                  <strong>{BUSINESS.name}</strong><br />
                  {BUSINESS.street}<br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </address>
                <div className="text-xs text-dark-500">
                  Centrally located in Mission Viejo off Crown Valley / Puerta Real, providing quick access to Interstate 5 and all of South Orange County.
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="p-6 rounded-2xl bg-dark-50 border border-dark-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-dark-500 font-semibold uppercase tracking-wider block">Operating Schedule</span>
                    <h2 className="text-xl font-display font-bold text-dark-900">Service Hours</h2>
                  </div>
                </div>
                <ul className="space-y-2.5 text-xs text-dark-700">
                  <li className="flex justify-between border-b border-dark-200/60 pb-2">
                    <span className="font-semibold text-dark-900">Monday – Friday:</span>
                    <span className="text-dark-600">{BUSINESS.hours.weekdays}</span>
                  </li>
                  <li className="flex justify-between border-b border-dark-200/60 pb-2">
                    <span className="font-semibold text-dark-900">Saturday – Sunday:</span>
                    <span className="text-dark-600">{BUSINESS.hours.weekend}</span>
                  </li>
                  <li className="flex justify-between text-primary-700 font-bold pt-1">
                    <span>Emergency Dispatch:</span>
                    <span>24/7 / 365 Days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map & Service Area Details */}
      <section className="py-16 bg-dark-50 border-t border-dark-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Serving All of South Orange County
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Verified Service Coverage Area
            </h2>
            <p className="text-dark-600 text-sm leading-relaxed">
              We dispatch licensed electricians directly from our Mission Viejo headquarters to residential and commercial properties throughout South Orange County:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Map Frame */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-lg border border-dark-200 min-h-[420px] bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326350.0099134697!2d-122.5960285944551!3d35.494666200804254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca54e0d30e35%3A0xab1aeb65d3aec52c!2sUltimate%20Green%20Electric%2C%20Inc.!5e0!3m2!1sen!2sin!4v1789726957376!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Ultimate Green Electric Mission Viejo headquarters map"
              />
            </div>

            {/* Direct City Links */}
            <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-dark-200 flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="font-display font-bold text-xl text-dark-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  Cities & Communities We Serve
                </h3>
                <p className="text-xs text-dark-500 mb-6 leading-relaxed">
                  Click your city below to learn more about localized electrical solutions, panel upgrade permits, and dedicated electricians assigned to your neighborhood:
                </p>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  {SERVICE_LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      to={`/electrician-${loc.slug}`}
                      className="p-2.5 rounded-lg border border-dark-100 hover:border-primary-400 hover:bg-primary-50/40 text-dark-800 font-medium transition-all flex items-center justify-between group"
                    >
                      <span className="group-hover:text-primary-700">{loc.name}</span>
                      <ArrowRight className="w-3 h-3 text-dark-400 group-hover:text-primary-600 group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-dark-100 text-xs text-dark-500">
                <span className="font-bold text-dark-800 block mb-1">Do not see your specific area listed?</span>
                If you are located in South Orange County, we likely cover your property. Call <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary-600 font-bold hover:underline">{BUSINESS.phoneDisplay}</a> to confirm immediate availability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Expectations & Privacy Notice Commitment Section */}
      <section className="py-12 bg-white border-t border-dark-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 text-primary-700 bg-primary-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4 text-primary-600" />
            Our Service Commitment
          </div>
          <h2 className="text-2xl font-display font-bold text-dark-900 mb-3">
            Clear Response Expectations & Absolute Privacy
          </h2>
          <p className="text-dark-600 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            We know that when you reach out to an electrician, timely communication is critical. All online estimate submissions are routed directly to our on-duty field manager and acknowledged within 1 business hour.
          </p>
          <div className="p-4 rounded-xl bg-dark-50 border border-dark-200 text-left text-xs text-dark-500 max-w-2xl mx-auto">
            <strong className="text-dark-800 block mb-1">Privacy Notice:</strong>
            Ultimate Green Electric, Inc. never sells, leases, or trades customer data to third-party marketing brokers or contractors. All submitted phone numbers and addresses are used strictly by our dispatch personnel to process your estimate request and confirm service appointments.
          </div>
        </div>
      </section>
    </>
  );
}
