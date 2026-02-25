'use client'

import Link from 'next/link'

// No API key needed. In .env.local set NEXT_PUBLIC_CALENDLY_URL to your
// Calendly event link, e.g. https://calendly.com/your-username/30min
const CALENDLY_EMBED_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || ''
const hasCalendlyLink =
  CALENDLY_EMBED_URL && CALENDLY_EMBED_URL !== 'https://calendly.com'

export default function BookPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="px-4 py-4 lg:px-8 border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
          >
            ← Back
          </Link>
          <h1 className="text-white font-semibold text-lg">Book a call</h1>
          <div className="w-14" />
        </div>
      </header>

      <main className="flex-1 flex flex-col min-h-0">
        {hasCalendlyLink ? (
          <iframe
            src={CALENDLY_EMBED_URL}
            className="w-full flex-1 min-h-[600px] border-0"
            title="Book a call with Calendly"
          />
        ) : (
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="max-w-md text-center">
              <p className="text-gray-400 mb-4">
                Calendly isn’t set up yet. You don’t need an API key, just your
                booking link from Calendly.
              </p>
              <p className="text-gray-500 text-sm mb-2">
                Add to <code className="bg-gray-800 px-2 py-1 rounded text-gray-300">.env.local</code>:
              </p>
              <pre className="text-left text-sm text-gray-400 bg-gray-800 p-4 rounded-lg overflow-x-auto">
                NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/your-event
              </pre>
              <p className="text-gray-500 text-sm mt-4">
                Get your link from Calendly → Share → Copy link.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
