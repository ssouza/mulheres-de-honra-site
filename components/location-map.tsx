"use client"

import { useEffect, useRef } from "react"

interface LocationMapProps {
  address: string
}

export default function LocationMap({ address }: LocationMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Carrega o script do Google Maps dinamicamente
    const loadGoogleMapsScript = () => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`
      script.async = true
      script.defer = true
      document.head.appendChild(script)

      // Define a função de callback global
      window.initMap = initMap
    }

    // Inicializa o mapa quando o script estiver carregado
    const initMap = () => {
      if (!mapRef.current) return

      // Coordenadas para Av. das Flores, 1500, Jardim Primavera, São Paulo - SP (fictício)
      // Normalmente você usaria geocoding para obter as coordenadas exatas
      const location = { lat: -23.55052, lng: -46.633308 }

      const map = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
      })

      new window.google.maps.Marker({
        position: location,
        map: map,
        title: address,
      })
    }

    // Verifica se o Google Maps já está carregado
    if (!window.google) {
      loadGoogleMapsScript()
    } else {
      initMap()
    }

    return () => {
      // Remove a função de callback global quando o componente for desmontado
      window.initMap = undefined
    }
  }, [address])

  return <div ref={mapRef} className="h-[400px] rounded-lg overflow-hidden shadow-xl" />
}

// Adiciona a definição do tipo global para o callback do Google Maps
declare global {
  interface Window {
    initMap: () => void
    google: any
  }
}
