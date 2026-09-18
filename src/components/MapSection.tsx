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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326350.0099134697!2d-122.5960285944551!3d35.494666200804254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fca54e0d30e35%3A0xab1aeb65d3aec52c!2sUltimate%20Green%20Electric%2C%20Inc.!5e0!3m2!1sen!2sin!4v1789726957376!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ultimate Green Electric location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
