import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mulheres de Honra - Alphaville 2025.2",
  description: "Existe uma identidade poderosa em Deus esperando para ser despertada em você — e o Mulheres de Honra é onde essa transformação acontece.",
  openGraph: {
    title: "Mulheres de Honra - Alphaville 2025.2",
    description: "Existe uma identidade poderosa em Deus esperando para ser despertada em você — e o Mulheres de Honra é onde essa transformação acontece.",
    url: "https://mulheresdehonra.com.br",
    siteName: "Mulheres de Honra - Alphaville 2025.2",
    images: [
      {
        url: "https://mulheresdehonra.com.br/images/capa.jpg",
        width: 720,
        height: 480,
      },
    ],
    locale: "pt_BR",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
