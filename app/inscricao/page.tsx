"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function InscricaoPage() {
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

  const validateForm = () => {
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
    }

    // Validação do WhatsApp (deve ter 11 dígitos sem contar caracteres especiais)
    const whatsappDigits = formData.whatsapp.replace(/\D/g, "")
    if (whatsappDigits.length !== 11) {
      newErrors.whatsapp = "Número de WhatsApp inválido"
      isValid = false
    }

    // Validação do CPF (deve ter 11 dígitos sem contar caracteres especiais)
    const cpfDigits = formData.cpf.replace(/\D/g, "")
    if (cpfDigits.length !== 11) {
      newErrors.cpf = "CPF inválido"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Aqui você pode implementar a lógica para enviar os dados para o servidor
      console.log("Dados do formulário:", formData)

      // Redirecionar para a página de agradecimento
      router.push("/obrigado")
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
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-burgundy text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-serif font-bold">
              Mulheres de Honra
            </Link>
          </div>
        </div>
      </header>

      {/* Formulário */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-serif font-bold text-burgundy mb-6 text-center">Inscrição para o Evento</h1>

          <p className="text-gray-600 mb-8 text-center">
            Preencha o formulário abaixo para garantir sua participação no evento Mulheres de Honra.
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
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy ${
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
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy ${
                  errors.whatsapp ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="(00) 00000-0000"
              />
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
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-burgundy ${
                  errors.cpf ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="000.000.000-00"
              />
              {errors.cpf && <p className="mt-1 text-red-500 text-sm">{errors.cpf}</p>}
            </div>

            <div className="bg-cream/50 p-4 rounded-md">
              <p className="text-gray-700 text-sm">
                <strong>Observação:</strong> Todos os campos são obrigatórios. Estas informações são necessárias para
                garantir seu acesso autorizado ao local do evento.
              </p>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-burgundy text-white py-3 px-6 rounded-md font-bold hover:bg-burgundy-dark transition duration-300"
              >
                Confirmar Inscrição
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
