import Navigation from "@/components/sections/navigation"
import HeroSection from "@/components/sections/hero-section"
import CountdownSection from "@/components/sections/countdown-section"
import AboutSection from "@/components/sections/about-section"
import SpeakersSection from "@/components/sections/speakers-section"
import ScheduleSection from "@/components/sections/schedule-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import VenueSection from "@/components/sections/venue-section"
import FAQSection from "@/components/sections/faq-section"
import CTASection from "@/components/sections/cta-section"
import FooterSection from "@/components/sections/footer-section"

export default function Home() {
  const eventDate = "2025-10-12" // Data do evento

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

      {/* Schedule Section */}
      <ScheduleSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

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
