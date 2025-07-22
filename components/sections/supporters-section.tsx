import Image from "next/image"
import Link from "next/link"

export default function SupportersSection() {
  const supporters = [
    {
      name: "Montesanto Semijoias",
      logo: "/images/supporters/monte-santo-semijoias.png",
      alt: "Logo Montesanto Semijoias",
      url: "https://www.instagram.com/montesantosemijoias",
    },
    {
      name: "Rafisa Consultoria",
      logo: "/images/supporters/rafisa.png",
      alt: "Logo Rafisa Consultoria",
      url: "https://www.rafisaconsultoria.com.br/bra/",
    },
    {
      name: "LD Advocacia",
      logo: "/images/supporters/ld-advocacia.png",
      alt: "Logo LD Advocacia",
      url: "https://www.instagram.com/ladydaianeadv",
    },
  ]

  return (
    <section id="apoiadores" className="py-8 md:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 font-serif">Nossos Apoiadores</h2>
          <p className="text-gray-700 mx-auto">
            Agradecemos às empresas e organizações que tornam possível a realização do evento Mulheres de Honra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {supporters.map((supporter, index) => (
            <Link
              key={index}
              href={supporter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block duration-300 overflow-hidden cursor-pointer"
            >
              <div className="relative w-full h-80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                <Image
                  src={supporter.logo || "/placeholder.svg"}
                  alt={supporter.alt}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
