import SEO from '@/components/SEO';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | Ultimate Green Electric"
        description="Learn more about Ultimate Green Electric, your trusted local electrician in Mission Viejo and South Orange County. Licensed, bonded, and insured."
        canonical="/about"
      />
      <div className="pt-16 md:pt-24">
        <AboutSection />
      </div>
      <WhyChooseUs />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}
