"use client"

import { Copy } from "lucide-react"
import { useState } from "react"

export default function CopyAddressBox({ address }:{address:string}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // reset after 2s
  }

  return (
    <div className="bg-primary text-white font-mono text-lg px-6 py-4 flex items-center justify-between gap-4 neo-border neo-shadow">
      <span className="truncate text-lg text-white">{address}</span>
      <button
        onClick={handleCopy}
        className="p-2 bg-black text-white neo-border neo-shadow hover:scale-110 transition-transform"
      >
        {copied ? "✅" : <Copy size={20} />}
      </button>
    </div>
  )
}
