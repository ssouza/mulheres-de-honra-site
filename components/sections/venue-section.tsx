import { MapPin } from "lucide-react"
import GoogleMapEmbed from "@/components/google-map-embed"

export default function VenueSection() {
  return (
    <section id="local" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 font-serif">Local do Evento</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            O evento será realizado em um espaço aconchegante e acessível, projetado para proporcionar conforto e
            facilitar a interação entre as participantes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <GoogleMapEmbed />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-burgundy mb-6">Centro de Convenções Espaço Mulher</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <MapPin className="h-6 w-6 text-burgundy" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Endereço</h4>
                  <p className="text-gray-600">
                    Av. das Flores, 1500
                    <br />
                    Jardim Primavera, São Paulo - SP
                    <br />
                    CEP: 04000-000
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-burgundy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Como Chegar</h4>
                  <p className="text-gray-600">
                    Próximo à estação de metrô Jardim Primavera
                    <br />
                    Diversas linhas de ônibus nas proximidades
                    <br />
                    Estacionamento no local (R$20,00/dia)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-burgundy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Hospedagem</h4>
                  <p className="text-gray-600">
                    Diversos hotéis e pousadas nas proximidades
                    <br />
                    Descontos especiais para participantes do evento
                    <br />
                    Entre em contato para mais informações
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
