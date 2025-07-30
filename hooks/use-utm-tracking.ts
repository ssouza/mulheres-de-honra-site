"use client"

import { useEffect, useState } from "react"
import { UTMTracker } from "@/lib/utm-tracker"

interface TrackingData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  utm_id?: string
  referrer?: string
  landing_page?: string
  user_agent?: string
  timestamp?: string
  session_id?: string
}

export function useUTMTracking() {
  const [trackingData, setTrackingData] = useState<TrackingData>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    console.log("🎣 Hook useUTMTracking iniciado")

    // Função para carregar dados
    const loadTrackingData = () => {
      // Primeiro tenta capturar novos dados
      const currentData = UTMTracker.captureUTMParams()

      // Depois pega os dados armazenados (que podem ser mais completos)
      const storedData = UTMTracker.getStoredTrackingData()

      // Combina os dados priorizando os armazenados
      const finalData = {
        ...currentData,
        ...storedData,
      }

      console.log("🎣 Dados finais no hook:", finalData)
      setTrackingData(finalData)
      setIsLoaded(true)
    }

    // Carrega imediatamente
    loadTrackingData()

    // Carrega novamente após um pequeno delay para garantir
    const timeout = setTimeout(loadTrackingData, 500)

    return () => clearTimeout(timeout)
  }, [])

  const getTrackingDataForSubmission = () => {
    console.log("📤 Preparando dados para submissão...")
    const data = UTMTracker.prepareTrackingDataForBackend()
    console.log("📤 Dados preparados:", data)
    return data
  }

  // Função para debug - verificar localStorage
  const debugLocalStorage = () => {
    const stored = localStorage.getItem("mulheres_honra_tracking")
    console.log("🔍 Debug localStorage:", stored)
    return stored ? JSON.parse(stored) : null
  }

  return {
    trackingData,
    isLoaded,
    getTrackingDataForSubmission,
    debugLocalStorage, // Para debug
  }
}
