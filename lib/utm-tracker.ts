interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  utm_id?: string
}

interface TrackingData extends UTMParams {
  referrer?: string
  landing_page?: string
  user_agent?: string
  timestamp?: string
  session_id?: string
}

export class UTMTracker {
  private static readonly STORAGE_KEY = "mulheres_honra_tracking"
  private static readonly SESSION_KEY = "mulheres_honra_session"

  /**
   * Captura e armazena os parâmetros UTM da URL atual
   */
  static captureUTMParams(): TrackingData {
    if (typeof window === "undefined") return {}

    console.log("🔍 Iniciando captura de UTM params...")
    console.log("📍 URL atual:", window.location.href)

    const urlParams = new URLSearchParams(window.location.search)
    const utmParams: UTMParams = {}

    // Captura todos os parâmetros UTM
    const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id"]
    utmKeys.forEach((key) => {
      const value = urlParams.get(key)
      if (value) {
        utmParams[key as keyof UTMParams] = value
        console.log(`✅ ${key}: ${value}`)
      }
    })

    // Dados adicionais de rastreamento
    const trackingData: TrackingData = {
      ...utmParams,
      referrer: document.referrer || "direct",
      landing_page: window.location.href,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      session_id: this.getOrCreateSessionId(),
    }

    console.log("📊 Dados de rastreamento capturados:", trackingData)

    // Verifica se já existe dados armazenados
    const existingData = this.getStoredTrackingData()
    console.log("💾 Dados existentes no localStorage:", existingData)

    // Armazena sempre se houver UTMs na URL atual, ou se não houver dados salvos
    if (Object.keys(utmParams).length > 0) {
      console.log("💾 Salvando novos dados UTM no localStorage...")
      this.storeTrackingData(trackingData)
    } else if (!existingData) {
      console.log("💾 Primeira visita sem UTMs, salvando dados básicos...")
      this.storeTrackingData(trackingData)
    } else {
      console.log("📋 Mantendo dados existentes do localStorage")
    }

    return trackingData
  }

  /**
   * Recupera os dados de rastreamento armazenados
   */
  static getStoredTrackingData(): TrackingData | null {
    if (typeof window === "undefined") return null

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY)
      const data = stored ? JSON.parse(stored) : null
      console.log("📖 Dados recuperados do localStorage:", data)
      return data
    } catch (error) {
      console.error("❌ Erro ao recuperar dados de rastreamento:", error)
      return null
    }
  }

  /**
   * Armazena os dados de rastreamento
   */
  private static storeTrackingData(data: TrackingData): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data))
      console.log("✅ Dados salvos no localStorage:", data)

      // Verifica se realmente foi salvo
      const verification = localStorage.getItem(this.STORAGE_KEY)
      console.log("🔍 Verificação - dados no localStorage:", verification)
    } catch (error) {
      console.error("❌ Erro ao armazenar dados de rastreamento:", error)
    }
  }

  /**
   * Gera ou recupera um ID de sessão único
   */
  private static getOrCreateSessionId(): string {
    if (typeof window === "undefined") return ""

    try {
      let sessionId = sessionStorage.getItem(this.SESSION_KEY)
      if (!sessionId) {
        sessionId = "session_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9)
        sessionStorage.setItem(this.SESSION_KEY, sessionId)
        console.log("🆔 Novo session ID criado:", sessionId)
      } else {
        console.log("🆔 Session ID existente:", sessionId)
      }
      return sessionId
    } catch (error) {
      console.error("❌ Erro ao gerenciar session ID:", error)
      return "session_" + Date.now()
    }
  }

  /**
   * Limpa os dados de rastreamento
   */
  static clearTrackingData(): void {
    if (typeof window === "undefined") return

    try {
      localStorage.removeItem(this.STORAGE_KEY)
      sessionStorage.removeItem(this.SESSION_KEY)
      console.log("🗑️ Dados de rastreamento limpos")
    } catch (error) {
      console.error("❌ Erro ao limpar dados de rastreamento:", error)
    }
  }

  /**
   * Prepara os dados para envio ao backend
   */
  static prepareTrackingDataForBackend(): TrackingData {
    const storedData = this.getStoredTrackingData()
    const currentData = this.captureUTMParams()

    console.log("📤 Preparando dados para backend...")
    console.log("📋 Dados armazenados:", storedData)
    console.log("📋 Dados atuais:", currentData)

    // Prioriza dados armazenados (primeira visita) sobre dados atuais
    const finalData = {
      ...currentData,
      ...storedData, // Sobrescreve com dados da primeira visita se existirem
    }

    console.log("📤 Dados finais para backend:", finalData)
    return finalData
  }

  /**
   * Força a captura e armazenamento dos UTMs (para usar no layout)
   */
  static initializeTracking(): void {
    if (typeof window === "undefined") return

    console.log("🚀 Inicializando sistema de rastreamento...")

    // Aguarda um pouco para garantir que a página carregou completamente
    setTimeout(() => {
      this.captureUTMParams()
    }, 100)
  }
}
