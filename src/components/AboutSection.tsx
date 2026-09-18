import { Phone, Shield, Clock, Award, CheckCircle2, Zap } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Professional electrician from Ultimate Green Electric working on wiring"
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white rounded-2xl p-6 shadow-2xl hidden md:block">
              <div className="text-4xl font-display font-bold">100%</div>
              <div className="text-sm text-primary-100">Satisfaction<br />Guaranteed</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Your Trusted Local Electrician in Mission Viejo
            </h2>
            <p className="text-dark-500 text-lg leading-relaxed mb-6">
              {BUSINESS.name} is a top-rated electrical company serving Mission Viejo and all of South Orange County. We offer fast, reliable, and affordable electrical services to residential and commercial clients alike. When you call us, you can expect a licensed electrician at your door — on time and ready to work.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: Shield, title: 'Licensed & Insured', desc: `CA Lic #${BUSINESS.license}` },
                { icon: Clock, title: 'On-Time Service', desc: '7AM-5PM Mon-Fri' },
                { icon: Award, title: 'Quality Workmanship', desc: 'Up to industry standards' },
                { icon: Zap, title: 'Emergency Ready', desc: 'Available when you need us' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
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

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg active:scale-95"
              >
                <Phone className="w-5 h-5" />
                Call {BUSINESS.phoneDisplay}
              </a>
              <Link
                to="/#services"
                className="inline-flex items-center gap-2 bg-dark-100 hover:bg-dark-200 text-dark-800 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
