import { Clock } from "lucide-react"

export default function ScheduleSection() {
  return (
    <section id="programacao" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-15">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 font-serif">Programação</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Confira a programação completa do evento e planeje sua participação para aproveitar ao máximo cada momento.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-burgundy flex items-center justify-center text-white font-bold mr-4">
                
              </div>
              <h3 className="text-2xl font-bold text-burgundy">Sexta-feira</h3>
            </div>

            <div className="ml-16 space-y-6">
              <div className="bg-cream rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-bold text-burgundy">08:00 - 09:00</p>
                    <h4 className="text-lg font-medium mb-2">Credenciamento e Welcome Coffee</h4>
                    <p className="text-gray-600">
                      Recepção das participantes, entrega de materiais e momento de networking.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-bold text-burgundy">09:30 - 11:00</p>
                    <h4 className="text-lg font-medium mb-2">Palestra de Abertura: O Poder da Honra</h4>
                    <p className="text-gray-600">
                      Palestra inspiradora sobre o significado da honra na vida da mulher contemporânea.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-bold text-burgundy">11:30 - 13:00</p>
                    <h4 className="text-lg font-medium mb-2">Painel: Mulheres que Inspiram</h4>
                    <p className="text-gray-600">
                      Conversa com mulheres de destaque em diferentes áreas compartilhando suas trajetórias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-bold text-burgundy">11:30 - 13:00</p>
                    <h4 className="text-lg font-medium mb-2">Painel: Mulheres que Inspiram</h4>
                    <p className="text-gray-600">
                      Conversa com mulheres de destaque em diferentes áreas compartilhando suas trajetórias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-burgundy" />
                  </div>
                  <div>
                    <p className="font-bold text-burgundy">11:30 - 13:00</p>
                    <h4 className="text-lg font-medium mb-2">Painel: Mulheres que Inspiram</h4>
                    <p className="text-gray-600">
                      Conversa com mulheres de destaque em diferentes áreas compartilhando suas trajetórias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
