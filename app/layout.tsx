import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mulheres de Honra",
  // description: "Mulheres de Honra 2025.2 - Um evento transformador para mulheres de fé em Alphaville",
  openGraph: {
    title: "Mulheres de Honra",
    // description: "Mulheres de Honra - Alphaville 2025.2",
    url: "https://mulheresdehonra.com.br",
    siteName: "Mulheres de Honra",
    images: [
      {
        url: "/images/capa.jpg",
        width: 720,
        height: 480,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
    generator: 'v0.dev'
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
