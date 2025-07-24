"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function InscricaoClientPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    whatsapp: "",
    cpf: "",
  })
  const [errors, setErrors] = useState({
    nomeCompleto: "",
    whatsapp: "",
    cpf: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isValidatingWhatsApp, setIsValidatingWhatsApp] = useState(false)

  // Função para formatar o número de WhatsApp
  const formatWhatsApp = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, "")

    // Aplica a máscara (99) 99999-9999
    if (numbers.length <= 2) {
      return `(${numbers}`
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    } else {
      // Limita a 11 dígitos
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }
  }

  // Função para formatar o CPF
  const formatCPF = (value: string) => {
    // Remove todos os caracteres não numéricos
    const numbers = value.replace(/\D/g, "")

    // Aplica a máscara 999.999.999-99
    if (numbers.length <= 3) {
      return numbers
    } else if (numbers.length <= 6) {
      return `${numbers.slice(0, 3)}.${numbers.slice(3)}`
    } else if (numbers.length <= 9) {
      return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`
    } else {
      // Limita a 11 dígitos
      return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`
    }
  }

  // Função para validar CPF seguindo as regras brasileiras
  const validateCPF = (cpf: string): boolean => {
    // Remove formatação
    const cleanCPF = cpf.replace(/\D/g, "")

    // Verifica se tem 11 dígitos
    if (cleanCPF.length !== 11) {
      return false
    }

    // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cleanCPF)) {
      return false
    }

    // Validação do primeiro dígito verificador
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += Number.parseInt(cleanCPF.charAt(i)) * (10 - i)
    }
    let remainder = sum % 11
    const firstDigit = remainder < 2 ? 0 : 11 - remainder

    if (Number.parseInt(cleanCPF.charAt(9)) !== firstDigit) {
      return false
    }

    // Validação do segundo dígito verificador
    sum = 0
    for (let i = 0; i < 10; i++) {
      sum += Number.parseInt(cleanCPF.charAt(i)) * (11 - i)
    }
    remainder = sum % 11
    const secondDigit = remainder < 2 ? 0 : 11 - remainder

    if (Number.parseInt(cleanCPF.charAt(10)) !== secondDigit) {
      return false
    }

    return true
  }

  // Função para validar WhatsApp via API
  const validateWhatsAppNumber = async (whatsappNumber: string): Promise<boolean> => {
    try {
      setIsValidatingWhatsApp(true)

      // Adiciona código do país (55) se não tiver
      const numberWithCountryCode = whatsappNumber.startsWith("55") ? whatsappNumber : `55${whatsappNumber}`
      alert(JSON.stringify(process.env))
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_EVOLUTION_API_INSTANCE_URL}/chat/whatsappNumbers/${process.env.NEXT_PUBLIC_EVOLUTION_API_INSTANCE_NAME}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_EVOLUTION_API_PUBLIC_API_KEY || "",
          },
          body: JSON.stringify({
            numbers: [numberWithCountryCode],
          }),
        },
      )

      if (!response.ok) {
        console.error("Erro na validação do WhatsApp:", response.status)
        return false
      }

      const data = await response.json()

      // Verifica se o número é válido na resposta da API
      // A estrutura da resposta pode variar, ajuste conforme necessário
      if (data && Array.isArray(data) && data.length > 0) {
        return data[0].exists === true || data[0].valid === true
      }

      return false
    } catch (error) {
      console.error("Erro ao validar WhatsApp:", error)
      return false
    } finally {
      setIsValidatingWhatsApp(false)
    }
  }

  const validateForm = async () => {
    let isValid = true
    const newErrors = {
      nomeCompleto: "",
      whatsapp: "",
      cpf: "",
    }

    // Validação do nome
    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = "Nome completo é obrigatório"
      isValid = false
    } else if (formData.nomeCompleto.trim().length < 3) {
      newErrors.nomeCompleto = "Nome deve ter pelo menos 3 caracteres"
      isValid = false
    }

    // Validação do WhatsApp
    const whatsappDigits = formData.whatsapp.replace(/\D/g, "")
    if (whatsappDigits.length !== 11) {
      newErrors.whatsapp = "Número de WhatsApp deve ter 11 dígitos"
      isValid = false
    } else {
      // Se tem 11 dígitos, valida via API
      const isWhatsAppValid = await validateWhatsAppNumber(whatsappDigits)
      if (!isWhatsAppValid) {
        newErrors.whatsapp = "Número de WhatsApp inválido ou não existe"
        isValid = false
      }
    }

    // Validação do CPF
    const cpfDigits = formData.cpf.replace(/\D/g, "")
    if (cpfDigits.length !== 11) {
      newErrors.cpf = "CPF deve ter 11 dígitos"
      isValid = false
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = "CPF inválido"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const isFormValid = await validateForm()
    if (!isFormValid) {
      return
    }

    setIsSubmitting(true)

    try {
      // Preparar dados para envio (remover formatação)
      const dataToSend = {
        nomeCompleto: formData.nomeCompleto.trim(),
        whatsapp: formData.whatsapp.replace(/\D/g, ""), // Remove formatação
        cpf: formData.cpf.replace(/\D/g, ""), // Remove formatação
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/inscricoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY || "",
        },
        body: JSON.stringify(dataToSend),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `Erro na inscrição: ${response.status}`)
      }

      // Sucesso - redirecionar para página de agradecimento
      router.push("/obrigado")
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error)

      // Mostrar erro para o usuário
      setErrors({
        nomeCompleto: "",
        whatsapp: "",
        cpf: error instanceof Error ? error.message : "Erro ao processar inscrição. Tente novamente.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    if (name === "whatsapp") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatWhatsApp(value),
      }))
    } else if (name === "cpf") {
      setFormData((prev) => ({
        ...prev,
        [name]: formatCPF(value),
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Limpar erro do campo quando usuário começar a digitar
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

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

      {/* Formulário */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-burgundy mb-6 text-center">
            Inscrição para o Evento
          </h1>

          <p className="text-gray-600 mb-8 text-center">
            Preencha o formulário abaixo para garantir sua participação no evento Mulheres de Honra, em 23 de Agosto de
            2025.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nomeCompleto" className="block text-gray-700 font-medium mb-2">
                Nome Completo *
              </label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                value={formData.nomeCompleto}
                onChange={handleChange}
                disabled={isSubmitting || isValidatingWhatsApp}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.nomeCompleto ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Digite seu nome completo"
              />
              {errors.nomeCompleto && <p className="mt-1 text-red-500 text-sm">{errors.nomeCompleto}</p>}
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-gray-700 font-medium mb-2">
                WhatsApp *
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                disabled={isSubmitting || isValidatingWhatsApp}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.whatsapp ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="(00) 00000-0000"
              />
              {isValidatingWhatsApp && <p className="mt-1 text-blue-500 text-sm">Validando número do WhatsApp...</p>}
              {errors.whatsapp && <p className="mt-1 text-red-500 text-sm">{errors.whatsapp}</p>}
            </div>

            <div>
              <label htmlFor="cpf" className="block text-gray-700 font-medium mb-2">
                CPF *
              </label>
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                disabled={isSubmitting || isValidatingWhatsApp}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy disabled:opacity-50 disabled:cursor-not-allowed ${
                  errors.cpf ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="000.000.000-00"
              />
              {errors.cpf && <p className="mt-1 text-red-500 text-sm">{errors.cpf}</p>}
            </div>

            <div className="bg-cream/50 p-4 rounded-md">
              <p className="text-gray-700 text-sm">
                <strong>Observação:</strong> Todos os campos são obrigatórios. Estas informações são necessárias para
                garantir seu acesso autorizado ao local do evento. O número do WhatsApp e CPF serão validados
                automaticamente.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || isValidatingWhatsApp}
                className="w-full bg-burgundy text-white py-3 px-6 rounded-md font-bold hover:bg-burgundy-dark transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting
                  ? "Processando..."
                  : isValidatingWhatsApp
                    ? "Validando WhatsApp..."
                    : "Confirmar Inscrição"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-burgundy hover:underline">
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
