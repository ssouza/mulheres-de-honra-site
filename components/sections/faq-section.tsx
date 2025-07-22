import FAQItem from "@/components/faq-item"

export default function FAQSection() {
  return (
    <section id="faq" className="py-8 md:py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 font-serif">Perguntas Frequentes</h2>
          <p className="text-gray-700 mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o evento Mulheres de Honra.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQItem
            question="Quem pode participar do evento Mulheres de Honra?"
            answer="O evento é aberto a todas as mulheres, independentemente de idade, profissão ou trajetória de vida. Nosso objetivo é criar um espaço inclusivo e acolhedor para todas."
          />

          <FAQItem
            question="Qual o valor da inscrição?"
            answer="A inscrição é gratuita, devido ao nosso propósito de tornar o evento acessível a todas as mulheres que desejam participar desta experiência transformadora."
          />

          <FAQItem
            question="Haverá transmissão online do evento?"
            answer="Não haverá transmissão online. O evento foi pensado para ser uma experiência presencial única, focada no networking, conexões pessoais e na energia coletiva que só um encontro presencial pode proporcionar."
          />

          <FAQItem
            question="Como posso me inscrever?"
            answer="A inscrição pode ser feita diretamente pelo site, clicando no botão 'Inscreva-se' localizado no topo da página e em outras seções do site."
          />

          <FAQItem
            question="Haverá certificado de participação?"
            answer="Não haverá certificado de participação. O foco do evento está na experiência vivida, nas conexões estabelecidas e no crescimento pessoal que cada participante levará consigo."
          />
        </div>
      </div>
    </section>
  )
}
