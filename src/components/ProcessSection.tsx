import { Phone, ClipboardCheck, Wrench, ThumbsUp } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function ProcessSection() {
  const steps = [
    {
      icon: Phone,
      title: 'Call Us',
      desc: `Pick up the phone and call ${BUSINESS.phoneDisplay}. Tell us what is going on and we will schedule a visit at a time that works for you.`,
    },
    {
      icon: ClipboardCheck,
      title: 'Free Estimate',
      desc: 'Our licensed electrician arrives on time, inspects the issue, and gives you a clear, upfront price — no obligation, no pressure.',
    },
    {
      icon: Wrench,
      title: 'Quality Repair',
      desc: 'Once you approve, we get to work. Most repairs are done the same day using quality parts and code-compliant methods.',
    },
    {
      icon: ThumbsUp,
      title: 'Job Complete',
      desc: 'We clean up, test everything, and make sure you are 100% satisfied before we leave. Your safety is our priority.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-dark-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
            Simple, Stress-Free Electrical Service
          </h2>
          <p className="text-dark-500 max-w-2xl mx-auto">
            From your first call to the final handshake, we make getting electrical work done easy and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl p-6 border border-dark-100 hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary-500 text-white flex items-center justify-center mx-auto mb-4 relative">
                  <step.icon className="w-7 h-7" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-dark-900 text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-display font-bold text-dark-900 text-lg mb-2">{step.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-dark-200 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
