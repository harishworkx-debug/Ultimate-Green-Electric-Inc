import { Phone, MapPin } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function MapSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-900 mb-4">
              Visit Our Mission Viejo Location
            </h2>
            <p className="text-dark-500 text-lg mb-8">
              Located in the heart of Mission Viejo, we proudly serve all of South Orange County. Call us or visit our office for a free estimate on your next electrical project.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-dark-900">Our Address</div>
                  <div className="text-dark-500 text-sm">
                    {BUSINESS.street}<br />
                    {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-dark-900">Call Us</div>
                  <a href={`tel:${BUSINESS.phoneRaw}`} className="text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                    {BUSINESS.phoneDisplay}
                  </a>
                  <div className="text-dark-400 text-sm">Secondary: {BUSINESS.secondaryPhone}</div>
                </div>
              </div>
            </div>

            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-primary-500/30 active:scale-95 w-fit"
            >
              <Phone className="w-5 h-5" />
              Call for a Free Estimate
            </a>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[400px] border border-dark-100">
            <iframe
              src="https://maps.google.com/maps?q=27525%20Puerta%20Real%20Ste%20300-140%20Mission%20Viejo%20CA%2092692&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ultimate Green Electric location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
