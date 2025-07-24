import type { Metadata } from "next"
import InscricaoClientPage from "./InscricaoClientPage"
import EnvDebug from "@/components/env-debug"

export const metadata: Metadata = {
  title: "Inscrição - Mulheres de Honra - Alphaville",
  description: "Faça sua inscrição para o evento Mulheres de Honra em Alphaville",
}

export default function InscricaoPage() {
  return (
    <div>
      <EnvDebug />
      <InscricaoClientPage />
      </div>
  )
}
