import type { Metadata } from "next"
import InscricaoClientPage from "./InscricaoClientPage"

export const metadata: Metadata = {
  title: "Inscrição - Mulheres de Honra - Alphaville",
  description: "Faça sua inscrição para o evento Mulheres de Honra em Alphaville",
}

export default function InscricaoPage() {
  return <InscricaoClientPage />
}
