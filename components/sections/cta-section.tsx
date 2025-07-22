import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-8 md:py-16 bg-burgundy">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Faça Parte Dessa Experiência</h2>
        <p className="text-cream text-xl mb-8 mx-auto">
          Junte-se a nós neste evento transformador e conecte-se com mulheres extraordinárias que estão fazendo a
          diferença.
        </p>
        <Link href="/inscricao">
          <button className="bg-cream text-burgundy px-8 py-3 rounded-md font-bold hover:bg-white transition duration-300 text-lg">
            Inscreva-se Agora
          </button>
        </Link>
      </div>
    </section>
  )
}
