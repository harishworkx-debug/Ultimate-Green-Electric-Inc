import SEO from '@/components/SEO';
import MapSection from '@/components/MapSection';
import CTASection from '@/components/CTASection';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Ultimate Green Electric"
        description="Contact Ultimate Green Electric for a free estimate on your electrical needs in Mission Viejo and South Orange County. Call us today!"
        canonical="/contact"
      />
      <div className="pt-16 md:pt-24">
        <MapSection />
      </div>
      <CTASection />
    </>
  );
}
