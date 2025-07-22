"use client"

import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function PhotosSection() {
  const galleryImages = [
    { src: "/images/gallery/gallery-1.png", alt: "Mulheres em evento de networking" },
    { src: "/images/gallery/gallery-2.png", alt: "Palestrante apresentando na conferência" },
    { src: "/images/gallery/gallery-3.png", alt: "Audiência no evento de empoderamento feminino" },
    { src: "/images/gallery/gallery-4.png", alt: "Mulheres fazendo networking" },
    { src: "/images/gallery/gallery-5.png", alt: "Sessão de workshop com mulheres" },
    { src: "/images/gallery/gallery-6.png", alt: "Mulheres celebrando no evento" },
    { src: "/images/gallery/gallery-7.png", alt: "Painel de discussão na conferência" },
    { src: "/images/gallery/gallery-8.png", alt: "Mulheres se conectando no evento" },
    { src: "/images/gallery/gallery-9.png", alt: "Local da conferência com participantes" },
    { src: "/images/gallery/gallery-10.png", alt: "Cerimônia de encerramento" },
  ]

  return (
    <section id="fotos" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 font-serif">Momentos Especiais</h2>
          <p className="text-gray-700 mx-auto">
            Reviva os momentos mais marcantes das edições anteriores do Mulheres de Honra através desta galeria de
            fotos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 10000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
