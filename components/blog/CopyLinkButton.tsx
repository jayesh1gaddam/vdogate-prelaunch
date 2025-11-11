'use client'

import { useCallback, useState } from 'react'
import { Link2 } from 'lucide-react'

export default function CopyLinkButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false)
  const onClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // no-op
    }
  }, [url])

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-neutral-gray-lighter hover:border-portal-primary hover:bg-portal-primary/5 transition-all duration-300 group"
      aria-label={copied ? 'Copied!' : 'Copy link'}
    >
      <div className="w-8 h-8 bg-neutral-gray rounded-lg flex items-center justify-center">
        <Link2 className="w-4 h-4 text-white" />
      </div>
      <span className="text-sm font-medium text-neutral-gray-dark group-hover:text-portal-primary">
        {copied ? 'Copied!' : 'Copy Link'}
      </span>
    </button>
  )
}

