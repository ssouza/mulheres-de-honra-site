import Image from "next/image"
import { Users } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-6 font-serif">
              O que é o Mulheres de Honra?
            </h2>
            <p className="text-gray-700 mb-4">
              O Mulheres de Honra é um evento anual que reúne mulheres de diferentes áreas e trajetórias para
              compartilhar experiências, conhecimentos e inspiração. Nosso objetivo é criar um espaço de conexão,
              aprendizado e crescimento para todas as participantes.
            </p>
            <p className="text-gray-700 mb-6">
              Durante o evento, você terá a oportunidade de participar de palestras inspiradoras, workshops práticos e
              momentos de networking com mulheres extraordinárias que estão fazendo a diferença em suas comunidades e
              profissões.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-burgundy/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-burgundy" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-burgundy">COMUNIDADE</h3>
                <p className="text-sm text-gray-600">
                  Conecte-se com mulheres inspiradoras e construa relacionamentos significativos
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
                <h3 className="text-lg font-bold mb-2 text-burgundy">CAPACITAÇÃO</h3>
                <p className="text-sm text-gray-600">
                  Desenvolva habilidades e conhecimentos para impulsionar sua vida pessoal e profissional
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
                <h3 className="text-lg font-bold mb-2 text-burgundy">TRANSFORMAÇÃO</h3>
                <p className="text-sm text-gray-600">
                  Experimente momentos de renovação e inspiração para uma vida de propósito
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/about-image.jpg" alt="Mulheres de Honra - Momentos" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
