"use client"

import { useEffect, useState } from "react"
import { UTMTracker } from "@/lib/utm-tracker"

export default function UTMDebug() {
  const [debugData, setDebugData] = useState<any>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Só mostra em desenvolvimento
    if (process.env.NODE_ENV === "development") {
      setIsVisible(true)
    }

    const updateDebugData = () => {
      const stored = UTMTracker.getStoredTrackingData()
      const current = UTMTracker.captureUTMParams()
      const urlParams = new URLSearchParams(window.location.search)

      setDebugData({
        currentUrl: window.location.href,
        urlParams: Object.fromEntries(urlParams.entries()),
        storedData: stored,
        currentData: current,
        localStorage: localStorage.getItem("mulheres_honra_tracking"),
        identifiedSource: stored ? UTMTracker.identifySource(stored) : "N/A",
      })
    }

    updateDebugData()

    // Atualiza a cada 2 segundos
    const interval = setInterval(updateDebugData, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "rgba(0,0,0,0.9)",
        color: "white",
        padding: "15px",
        borderRadius: "8px",
        fontSize: "12px",
        maxWidth: "400px",
        zIndex: 9999,
        fontFamily: "monospace",
      }}
    >
      <h4 style={{ margin: "0 0 10px 0", color: "#4CAF50" }}>🔍 UTM Debug Panel</h4>

      <div style={{ marginBottom: "8px" }}>
        <strong>URL Atual:</strong>
        <div style={{ color: "#81C784", wordBreak: "break-all" }}>{debugData.currentUrl}</div>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <strong>Parâmetros URL:</strong>
        <pre style={{ margin: "4px 0", color: "#FFB74D" }}>{JSON.stringify(debugData.urlParams, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <strong>LocalStorage:</strong>
        <pre style={{ margin: "4px 0", color: "#64B5F6" }}>{debugData.localStorage || "null"}</pre>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <strong>Dados Armazenados:</strong>
        <pre style={{ margin: "4px 0", color: "#A1C181" }}>{JSON.stringify(debugData.storedData, null, 2)}</pre>
      </div>

      <div style={{ marginBottom: "8px" }}>
        <strong>Origem Identificada:</strong>
        <div style={{ color: "#F06292" }}>{debugData.identifiedSource}</div>
      </div>

      <button
        onClick={() => {
          UTMTracker.clearTrackingData()
          window.location.reload()
        }}
        style={{
          background: "#f44336",
          color: "white",
          border: "none",
          padding: "5px 10px",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "11px",
        }}
      >
        🗑️ Limpar & Recarregar
      </button>
    </div>
  )
}
