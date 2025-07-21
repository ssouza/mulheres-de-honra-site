"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-6 pb-6 border-b border-gray-200">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full text-left">
        <h3 className="flex items-center text-xl font-medium text-burgundy">
          <span className="mr-2">•</span>
          {question}
        </h3>
        <span className="text-burgundy">{isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </button>

      <div
        className={`pl-6 text-gray-600 mt-2 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  )
}
