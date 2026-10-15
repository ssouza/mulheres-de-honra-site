import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mulheres de Honra - É tempo de Florescer",
  description: "Existe uma identidade poderosa em Deus esperando para ser despertada em você — e o Mulheres de Honra é onde essa transformação acontece.",
  openGraph: {
    title: "Mulheres de Honra - É tempo de Florescer",
    description: "Existe uma identidade poderosa em Deus esperando para ser despertada em você — e o Mulheres de Honra é onde essa transformação acontece.",
    url: "https://mulheresdehonra.com.br",
    siteName: "Mulheres de Honra - É tempo de Florescer",
    images: [
      {
        url: "https://mulheresdehonra.com.br/images/capa.png",
        width: 720,
        height: 480,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Inicializa o rastreamento UTM assim que a página carrega
              (function() {
                console.log('🚀 Iniciando rastreamento UTM...');
                
                // Função para capturar UTMs
                function captureUTMs() {
                  try {
                    const urlParams = new URLSearchParams(window.location.search);
                    const utmParams = {};
                    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'utm_id'];
                    
                    console.log('📍 URL atual:', window.location.href);
                    console.log('🔍 Parâmetros da URL:', window.location.search);
                    
                    utmKeys.forEach(key => {
                      const value = urlParams.get(key);
                      if (value) {
                        utmParams[key] = value;
                        console.log('✅ ' + key + ':', value);
                      }
                    });
                    
                    const trackingData = {
                      ...utmParams,
                      referrer: document.referrer || 'direct',
                      landing_page: window.location.href,
                      user_agent: navigator.userAgent,
                      timestamp: new Date().toISOString(),
                      session_id: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
                    };
                    
                    console.log('📊 Dados capturados:', trackingData);
                    
                    // Verifica se já existe dados
                    const existingData = localStorage.getItem('mulheres_honra_tracking');
                    console.log('💾 Dados existentes:', existingData);
                    
                    // Salva se houver UTMs ou se for primeira visita
                    if (Object.keys(utmParams).length > 0 || !existingData) {
                      localStorage.setItem('mulheres_honra_tracking', JSON.stringify(trackingData));
                      console.log('✅ Dados salvos no localStorage');
                      
                      // Verifica se salvou
                      const saved = localStorage.getItem('mulheres_honra_tracking');
                      console.log('🔍 Verificação - dados salvos:', saved);
                    }
                    
                  } catch (error) {
                    console.error('❌ Erro no rastreamento UTM:', error);
                  }
                }
                
                // Executa imediatamente
                captureUTMs();
                
                // Executa novamente após carregamento completo
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', captureUTMs);
                }
                
                // Executa quando a janela carregar completamente
                window.addEventListener('load', captureUTMs);
                
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
