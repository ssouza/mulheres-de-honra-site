"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string // formato: YYYY-MM-DD
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date(targetDate)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
        return
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <div className="flex flex-wrap justify-center gap-8">
      <div className="text-center">
        <div className="text-4xl font-bold text-burgundy">{days}</div>
        <div className="text-burgundy-dark">DIAS</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-burgundy">{hours}</div>
        <div className="text-burgundy-dark">HORAS</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-burgundy">{minutes}</div>
        <div className="text-burgundy-dark">MINUTOS</div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold text-burgundy">{seconds}</div>
        <div className="text-burgundy-dark">SEGUNDOS</div>
      </div>
    </div>
  )
}
