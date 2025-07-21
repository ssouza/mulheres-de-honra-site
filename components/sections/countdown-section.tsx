import CountdownTimer from "@/components/countdown-timer"

interface CountdownSectionProps {
  eventDate: string
}

export default function CountdownSection({ eventDate }: CountdownSectionProps) {
  return (
    <section className="bg-cream py-4">
      <div className="container mx-auto px-4">
        <CountdownTimer targetDate={eventDate} />
      </div>
    </section>
  )
}
