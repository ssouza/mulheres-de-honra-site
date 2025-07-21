import FAQItem from "@/components/faq-item"

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-burgundy mb-4 font-serif">Perguntas Frequentes</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre o evento Mulheres de Honra.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <FAQItem
            question="Quem pode participar do evento Mulheres de Honra?"
            answer="O evento é aberto a todas as mulheres, independentemente de idade, profissão ou trajetória de vida. Nosso objetivo é criar um espaço inclusivo e acolhedor para todas."
          />

          <FAQItem
            question="Qual o valor da inscrição e o que está incluso?"
            answer="O valor da inscrição é R$250,00 e inclui acesso a todas as palestras e workshops, material do evento, coffee breaks e certificado de participação."
          />

          <FAQItem
            question="Haverá transmissão online do evento?"
            answer="Sim, oferecemos a opção de participação online com valor reduzido. As participantes virtuais terão acesso às palestras principais e material digital do evento."
          />

          <FAQItem
            question="Como posso me inscrever?"
            answer="As inscrições podem ser realizadas diretamente pelo site, através do botão 'Inscreva-se' no topo da página. Aceitamos pagamento via cartão de crédito, boleto bancário e PIX."
          />

          <FAQItem
            question="Haverá certificado de participação?"
            answer="Sim, todas as participantes receberão certificado digital de participação com carga horária de 16 horas, enviado por e-mail após o evento."
          />
        </div>
      </div>
    </section>
  )
}
