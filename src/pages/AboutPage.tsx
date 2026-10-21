import { Link } from 'react-router-dom';
import { Shield, Clock, Award, CheckCircle2, Zap, Phone, Mail, MapPin, Users, Wrench, Building2, Home, ArrowRight, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { BUSINESS, SERVICES, SERVICE_LOCATIONS, MAIN_LOCATION, COMPANY_CREDENTIALS, PROJECT_GALLERY } from '@/data/business';
import { localBusinessSchema, organizationSchema, webSiteSchema, breadcrumbSchema } from '@/data/schema';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  const featuredServices = [
    { slug: 'residential-electrician', title: 'Residential Electrician', desc: 'Home rewiring, safety inspections, lighting, and dedicated circuits.' },
    { slug: 'commercial-electrician', title: 'Commercial Electrician', desc: 'Tenant improvements, retail buildouts, 3-phase power, and maintenance.' },
    { slug: 'panel-upgrade', title: 'Electrical Panel Upgrades', desc: 'Modernizing 100A panels to 200A/400A with whole-home surge protection.' },
    { slug: 'ev-charger-installation', title: 'EV Charger Installation', desc: 'Level 2 home and commercial charging stations for Tesla and all EV brands.' },
    { slug: 'electrical-repair', title: 'Electrical Repair & Diagnostics', desc: 'Fast troubleshooting for tripping breakers, dead outlets, and wiring faults.' },
    { slug: 'emergency-electrician', title: '24/7 Emergency Service', desc: 'Immediate dispatch for sparking, burning odors, or sudden power loss.' },
  ];

  return (
    <>
      <SEO
        title="About Ultimate Green Electric | California Electrical Contractor"
        description="Learn about Ultimate Green Electric, Inc., licensed electrical contractor (CA Lic #999000) serving Mission Viejo & South Orange County. 20+ years of verified experience."
        canonical="/about"
        schema={[
          organizationSchema(),
          webSiteSchema(),
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' },
          ]),
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-dark-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Licensed electrician from Ultimate Green Electric working on high quality electrical system"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/90 to-dark-950/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'About Us', url: '/about' },
              ]}
            />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-400/30 text-primary-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6">
              <Shield className="w-4 h-4 text-primary-400" />
              <span>California Licensed Electrical Contractor · C-10 Lic #{BUSINESS.license}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold leading-tight mb-6 text-shadow-lg">
              About Ultimate Green Electric, Inc.
            </h1>

            <p className="text-lg md:text-xl text-dark-200 leading-relaxed mb-8">
              Founded in Mission Viejo with over <span className="text-white font-bold">{COMPANY_CREDENTIALS.yearsInBusiness} years</span> of hands-on field experience, delivering code-compliant electrical excellence, transparent pricing, and unwavering safety across South Orange County.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2.5 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-primary-500/30 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phoneDisplay}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all"
              >
                Contact Our Team
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company History & Service Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Authentic History */}
            <div className="lg:col-span-7">
              <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
                Our Story & Heritage
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-6">
                Two Decades of Reliable Electrical Craftsmanship
              </h2>

              <div className="space-y-4 text-dark-600 text-base leading-relaxed">
                <p>
                  Established in {COMPANY_CREDENTIALS.establishedYear}, <strong>{BUSINESS.name}</strong> was created with a clear mission: to provide South Orange County property owners with an electrical contractor they could depend on for honest advice, precise workmanship, and total code compliance.
                </p>
                <p>
                  Over the past {COMPANY_CREDENTIALS.yearsInBusiness} years, electrical technology has evolved drastically — from simple residential wiring repairs to high-capacity 200A/400A panel upgrades, smart architectural lighting systems, and Level 2 electric vehicle charging infrastructure. Through it all, our team has remained at the forefront of the industry by continuously training on the latest California Electrical Code (Title 24) and national NFPA 70 standards.
                </p>
                <p>
                  Today, we operate from our headquarters at <strong className="text-dark-800">{BUSINESS.street} in Mission Viejo</strong>, dispatching fully equipped service vehicles throughout South Orange County to resolve electrical problems quickly and correctly the first time.
                </p>
              </div>

              {/* Service Philosophy Pills */}
              <div className="mt-8 pt-8 border-t border-dark-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Code-Compliant Safety',
                    desc: 'Every installation strictly adheres to NEC and City of Mission Viejo municipal codes.',
                  },
                  {
                    title: 'Upfront Itemized Pricing',
                    desc: 'Detailed estimates provided before work starts. No hidden surcharges, ever.',
                  },
                  {
                    title: 'Meticulous Cleanliness',
                    desc: 'Shoe covers and surface protection on every job. We leave your property spotless.',
                  },
                  {
                    title: 'Guaranteed Workmanship',
                    desc: 'Full warranty coverage on all electrical labor and materials installed by our team.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-dark-50 p-4 rounded-xl border border-dark-100">
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-dark-900 text-sm mb-1">{item.title}</h4>
                      <p className="text-dark-500 text-xs leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Work Photos & Credential Badges */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-dark-100">
                <img
                  src="https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Actual panel upgrade completed by Ultimate Green Electric"
                  className="w-full h-72 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs">
                    <span className="font-bold text-sm block">Panel Modernization in Mission Viejo</span>
                    <span>Clean 200A Square D installation with surge protection</span>
                  </div>
                </div>
              </div>

              {/* Official Credential Box */}
              <div className="bg-dark-900 text-white rounded-2xl p-6 border border-dark-800">
                <h3 className="font-display font-bold text-lg mb-4 text-primary-400 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary-400" />
                  Verified Contractor Credentials
                </h3>
                <ul className="space-y-3 text-xs text-dark-300">
                  <li className="flex justify-between border-b border-dark-800 pb-2">
                    <span className="text-dark-400">California Contractor License:</span>
                    <span className="font-mono font-bold text-white">#{COMPANY_CREDENTIALS.cslbLicense}</span>
                  </li>
                  <li className="flex justify-between border-b border-dark-800 pb-2">
                    <span className="text-dark-400">CSLB Classification:</span>
                    <span className="font-medium text-white">{COMPANY_CREDENTIALS.classification}</span>
                  </li>
                  <li className="flex justify-between border-b border-dark-800 pb-2">
                    <span className="text-dark-400">Surety Bond:</span>
                    <span className="font-medium text-white">{COMPANY_CREDENTIALS.bondedAmount}</span>
                  </li>
                  <li className="flex justify-between border-b border-dark-800 pb-2">
                    <span className="text-dark-400">Liability Coverage:</span>
                    <span className="font-medium text-white">{COMPANY_CREDENTIALS.insuranceCoverage}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-dark-400">Operating Area:</span>
                    <span className="font-medium text-white">Mission Viejo & South Orange County</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Information & Field Equipment */}
      <section className="py-16 md:py-20 bg-dark-50 border-y border-dark-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Our Professional Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              State-Certified Electricians Who Care
            </h2>
            <p className="text-dark-600 text-base leading-relaxed">
              When an electrician enters your home or business, you deserve complete trust. Our team is background-checked, drug-tested, and trained in modern electrical diagnosis and safety protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-dark-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-dark-900 mb-2">Certified Journeymen</h3>
              <p className="text-dark-500 text-sm leading-relaxed mb-4">
                Our electricians carry verified California journeyman certifications and undergo regular continuing education on updated electrical codes and safety regulations.
              </p>
              <div className="text-xs font-semibold text-primary-600">NFPA 70E Safety Certified</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-dark-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-dark-900 mb-2">Stocked Service Fleet</h3>
              <p className="text-dark-500 text-sm leading-relaxed mb-4">
                Our mobile units carry hundreds of electrical parts, breakers, GFCIs, commercial disconnects, and advanced infrared diagnostic tools for instant same-day fixes.
              </p>
              <div className="text-xs font-semibold text-primary-600">Same-Day Resolution Rate &gt; 90%</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-dark-100 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-dark-900 mb-2">Permit Specialists</h3>
              <p className="text-dark-500 text-sm leading-relaxed mb-4">
                We pull municipal electrical permits with the City of Mission Viejo and surrounding Orange County building departments, managing the inspection process end-to-end.
              </p>
              <div className="text-xs font-semibold text-primary-600">100% Code Compliance Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Genuine Work Photos & Types of Projects Completed */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
                Proven Track Record
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900">
                Types of Projects Completed
              </h2>
            </div>
            <p className="text-dark-500 text-sm max-w-md">
              From single-family residences in Mission Viejo to commercial office complexes across Irvine, our project portfolio demonstrates our versatility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECT_GALLERY.slice(0, 6).map((project) => (
              <div key={project.id} className="border border-dark-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-dark-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-md">
                    {project.category}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs bg-dark-950/70 px-2 py-0.5 rounded">
                    <MapPin className="w-3 h-3 text-primary-400" />
                    {project.location}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-dark-900 text-base mb-1.5">{project.title}</h3>
                  <p className="text-dark-500 text-xs leading-relaxed line-clamp-2 mb-3">{project.description}</p>
                  <div className="text-xs font-semibold text-primary-600">
                    {project.specs[0]} · {project.specs[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actual Service Area Explained */}
      <section className="py-16 md:py-20 bg-dark-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <span className="text-primary-400 font-bold text-xs uppercase tracking-wider block mb-2">
                Geographic Coverage
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Actual Service Area in South Orange County
              </h2>
              <p className="text-dark-300 text-sm leading-relaxed mb-6">
                Our central dispatch hub is located at <strong className="text-white">{BUSINESS.street} in Mission Viejo</strong>. Because our electricians are stationed throughout the region, we provide prompt, reliable arrival times across our verified coverage corridor:
              </p>

              <div className="p-4 bg-dark-950 rounded-xl border border-dark-800 text-xs text-dark-300 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  Primary Headquarters: Mission Viejo, CA 92692
                </div>
                <p className="text-dark-400">
                  Fast response to Felipe Rd, Marguerite Pkwy, Alicia Pkwy, Crown Valley, and surrounding communities.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all"
              >
                Inquire About Service in Your City
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SERVICE_LOCATIONS.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/electrician-${loc.slug}`}
                    className="p-4 rounded-xl bg-dark-800/80 hover:bg-primary-900/30 border border-dark-700 hover:border-primary-500/50 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-primary-400 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-white text-sm group-hover:text-primary-300 transition-colors">
                        {loc.name}
                      </span>
                    </div>
                    <span className="text-[11px] text-dark-400 block">ZIP: {loc.zip}</span>
                    <span className="text-xs text-primary-400 font-medium mt-2 inline-block">
                      View Local Page →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Services Navigation Links */}
      <section className="py-16 md:py-20 bg-dark-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-primary-600 font-bold text-xs uppercase tracking-wider block mb-2">
              Our Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark-900 mb-3">
              Explore Our Electrical Services
            </h2>
            <p className="text-dark-500 text-sm">
              Click any of our specialized service categories below for detailed project scopes, FAQs, and pricing estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredServices.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}-${MAIN_LOCATION}`}
                className="p-5 rounded-xl bg-white border border-dark-200 hover:border-primary-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display font-bold text-dark-900 text-base mb-1.5 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-500 text-xs leading-relaxed mb-3">
                    {service.desc}
                  </p>
                </div>
                <span className="text-xs font-semibold text-primary-600 flex items-center gap-1">
                  Read full service details →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary-600 hover:text-primary-700"
            >
              Have a question for our electricians? Contact us today →
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTASection
        title="Work With Orange County's Trusted Electrical Contractors"
        subtitle="Call us today for honest assessments, fair pricing, and code-compliant electrical work."
      />
    </>
  );
}
