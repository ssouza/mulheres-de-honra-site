import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-burgundy text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-lg md:text-2xl font-serif font-bold">
              Mulheres de Honra
            </Link>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <Check className="w-10 h-10 text-green-600" />
            </div>
          </div>

          <h1 className="text-2xl md:text-3xl font-serif font-bold text-burgundy mb-4">Inscrição Confirmada!</h1>

          <p className="text-gray-600 mb-8">
            Obrigado por se inscrever no evento Mulheres de Honra. Em breve você receberá uma mensagem no número de
            WhatsApp informado com a confirmação da sua inscrição.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold text-burgundy mb-4">Junte-se à nossa comunidade no WhatsApp</h2>
            <p className="text-gray-600 mb-4">
              Fique por dentro de todas as novidades e interaja com outras participantes do evento.
            </p>
            <a
              href="https://chat.whatsapp.com/JW3IxmpCfaXAteDzhU2yPJ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white py-3 px-6 rounded-md font-bold hover:bg-green-700 transition duration-300"
            >
              Acessar Comunidade
            </a>
          </div>

          <div className="mt-8">
            <Link href="/" className="inline-flex items-center text-burgundy hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para a página inicial
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 Mulheres de Honra. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
