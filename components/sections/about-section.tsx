"use client"

import Image from "next/image"
import { Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-2/3 order-1">
            <h2 className="text-2xl md:text-4xl font-bold text-burgundy mb-6 font-serif">
              O que é o Mulheres de Honra?
            </h2>
            <p className="text-gray-700 mb-4">
              <b>
                Existe uma identidade poderosa em Deus esperando para ser despertada em você — e o Mulheres de Honra é
                onde essa transformação acontece.
              </b>
            </p>
            <p className="text-gray-700 mb-4">
              Este não é apenas mais um evento feminino. É um encontro sobrenatural onde mulheres descobrem sua
              verdadeira identidade, ativam seu propósito divino e caminham em santidade autêntica.
            </p>
            <p className="text-gray-700 mb-4">
              Se você sente o chamado de Deus para mais profundidade, mais clareza e mais propósito, este encontro foi
              feito para você.
            </p>
            <p className="text-gray-700 mb-4">
              <b>Prepare-se para uma experiência que vai marcar seu espírito e redefinir sua jornada.</b>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-burgundy" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-burgundy">IDENTIDADE CURADA</h3>
                <p className="text-sm text-gray-600">
                  Descubra quem você verdadeiramente é aos olhos de Deus e rompa com mentiras que limitam seu potencial.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-burgundy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-burgundy">PROPÓSITO ATIVADO</h3>
                <p className="text-sm text-gray-600">
                  Receba clareza, coragem e confirmação divina para caminhar no que você nasceu para realizar.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-burgundy"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-burgundy">SANTIDADE COM PROPÓSITO</h3>
                <p className="text-sm text-gray-600">
                  Aprenda a viver uma vida consagrada de forma real e apaixonada, movida pelo amor, não pela obrigação.
                </p>
              </div>
            </div>
          </div>

          {/* Container da imagem - visível em todos os tamanhos */}
          <div className="w-full lg:w-1/3 order-2">
            <div className="relative w-full max-w-xs sm:max-w-sm mx-auto">
              {/* Container com altura fixa para mobile */}
              <div className="relative h-80 sm:h-96 lg:h-[480px] w-full rounded-lg overflow-hidden shadow-xl bg-burgundy/5">
                <Image
                  src="/images/organizadoras-lady-marcia.jpg"
                  alt="Lady Daiane e Marcia Saccomani, organizadoras do Mulheres de Honra"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  priority
                  onLoad={() => console.log("Imagem carregada com sucesso")}
                  onError={(e) => {
                    console.error("Erro ao carregar imagem:", e)
                    // Fallback para placeholder
                    const target = e.target as HTMLImageElement
                    target.src = "/placeholder.svg?height=400&width=300&text=Mulheres+de+Honra"
                  }}
                />

                {/* Loading indicator */}
                <div className="absolute inset-0 bg-burgundy/5 animate-pulse flex items-center justify-center">
                  <div className="text-burgundy/50 text-sm font-serif">Carregando...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
