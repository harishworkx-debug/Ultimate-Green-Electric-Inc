import { Shield, Clock, Star, Zap, Award, ThumbsUp, Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      desc: `California License #${BUSINESS.license}. Fully bonded and insured for your complete protection and peace of mind.`,
    },
    {
      icon: Clock,
      title: 'Fast Response Times',
      desc: 'Based right here in Mission Viejo, we reach most South Orange County homes quickly — often the same day you call.',
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      desc: 'Every job is done to code by trained electricians who take pride in clean, safe, long-lasting results.',
    },
    {
      icon: ThumbsUp,
      title: 'Upfront Pricing',
      desc: 'You get a clear price before we start. No surprise fees, no hidden charges — just honest, transparent estimates.',
    },
    {
      icon: Zap,
      title: 'Free Estimates',
      desc: 'Most projects qualify for a free estimate. Call us and we will send a licensed electrician to assess your needs.',
    },
    {
      icon: Star,
      title: '5-Star Reputation',
      desc: 'Hundreds of satisfied homeowners and businesses across South Orange County trust us with their electrical work.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            The Electrician Mission Viejo Trusts
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            We have earned our reputation one job at a time — through honest service, fair pricing, and electrical work that lasts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-dark-50 rounded-2xl p-6 border border-dark-100 hover:border-primary-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                <f.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="font-display font-bold text-dark-900 text-lg mb-2">{f.title}</h3>
              <p className="text-dark-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg active:scale-95"
          >
            <Phone className="w-5 h-5" />
            Call {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
