import Navigation from "@/components/sections/navigation"
import HeroSection from "@/components/sections/hero-section"
import CountdownSection from "@/components/sections/countdown-section"
import AboutSection from "@/components/sections/about-section"
import SpeakersSection from "@/components/sections/speakers-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import SupportersSection from "@/components/sections/supporters-section"
import VenueSection from "@/components/sections/venue-section"
import FAQSection from "@/components/sections/faq-section"
import CTASection from "@/components/sections/cta-section"
import FooterSection from "@/components/sections/footer-section"
export default function Home() {
  const eventDate = "2026-11-14T15:00:00-03:00" // Data do evento

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Countdown Section */}
      <CountdownSection eventDate={eventDate} />

      {/* About Section */}
      <AboutSection />

      {/* Speakers Section */}
      <SpeakersSection />

      {/* Schedule Section 
      <ScheduleSection />*/}

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Photos Section 
      <PhotosSection />*/}

      {/* Supporters Section */}
      <SupportersSection />

      {/* Venue Section */}
      <VenueSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <FooterSection />

    </div>
  )
}
