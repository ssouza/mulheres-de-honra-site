import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-burgundy/80 to-burgundy-dark/80 z-10"></div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5443.JPG-LJubkZBvq6x4GClqAgQ9BRwAJMWiV8.jpeg"
        alt="Mulheres de Honra - Evento"
        fill
        className="object-cover"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white font-serif mb-4">Mulheres de Honra</h1>
        <p className="text-xl md:text-2xl text-cream mb-8 max-w-2xl">
          Um encontro para inspirar, capacitar e celebrar mulheres extraordinárias
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/inscricao">
            <button className="bg-cream text-burgundy px-8 py-3 rounded-md font-bold hover:bg-white transition duration-300">
              Inscreva-se Agora
            </button>
          </Link>
          <button className="border-2 border-cream text-cream px-8 py-3 rounded-md font-bold hover:bg-cream/10 transition duration-300">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  )
}
