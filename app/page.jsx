'use client'

import Link from 'next/link'
import {
  Filter,
  MessageSquare,
  Brain,
  Smartphone,
  Bell,
  Globe,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-4 py-20 md:py-32 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Stop driving to quotes that go nowhere.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Automated Software that filters serious jobs only. Stop missing
              enquires and reduce time spent on admin work.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center">
              <Link
                href="/book"
                className="bg-safety-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2 w-fit"
              >
                Stop Quoting Time Wasters
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById('see-it-in-action')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-transparent border-2 border-gray-600 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors w-fit"
              >
                See our work 
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-6xl mx-auto" />

      {/* Core Features Section */}
      <section className="px-4 py-20 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            The System That Protects Your Time
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Stop quoting at 9pm instead of switching off
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-safety-orange transition-colors">
              <div className="bg-safety-orange/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-safety-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Smart Categorisation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Sorts &quot;Immediate Buy&quot; from &quot;Tire Kicker&quot; before
                you pick up the phone.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-safety-orange transition-colors">
              <div className="bg-safety-orange/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-safety-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Human Like Auto Reply
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Responds in 5 to 10 minutes. Sounds like you, not a robot.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-safety-orange transition-colors">
              <div className="bg-safety-orange/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-safety-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                The Knowledge Base
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Answers questions. If stumped, you get notified immediately.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-safety-orange transition-colors">
              <div className="bg-safety-orange/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-safety-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Remote Control
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our system drafts a full reply.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-safety-orange transition-colors">
              <div className="bg-safety-orange/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-safety-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Pre and Post Job Updates
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Automatic milestone notifications. No admin headache.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-safety-orange transition-colors">
              <div className="bg-safety-orange/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-safety-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Website
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Full stack website included. No extra cost.
              </p>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-gray-800 max-w-6xl mx-auto" />

      {/* Value Proposition Table */}
      <section className="px-4 py-20 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Us vs. The Old Way
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-700">
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold" />
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold">
                    The Old Way
                  </th>
                  <th className="text-left py-4 px-6 text-safety-orange font-semibold">
                    Our Way
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    Conversion Rate
                  </td>
                  <td className="py-4 px-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span>
                        7 out of 10 calls go nowhere, but still eat your time
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>Only serious jobs reach your phone</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    Admin Time
                  </td>
                  <td className="py-4 px-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span>Quoting at 9pm instead of switching off</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>
                        AI handles the tyre kickers. You handle the work.
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    Response Time
                  </td>
                  <td className="py-4 px-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span>Missed emails, delayed replies</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>5 minute response times</span>
                    </div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="py-4 px-6 text-white font-medium">
                    Lead Quality
                  </td>
                  <td className="py-4 px-6 text-gray-400">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-500" />
                      <span>Wasting time on small stuff</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>Sorted before you pick up the phone</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-6xl mx-auto" />

      {/* Time Cost Section */}
      <section className="px-4 py-20 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            The Math That Hurts
          </h2>

          <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                If you quote{' '}
                <span className="text-white font-semibold">5 jobs a day</span>
              </p>
              <p>
                and{' '}
                <span className="text-white font-semibold">3 go nowhere</span>
              </p>
              <p>
                that&apos;s{' '}
                <span className="text-safety-orange font-semibold">
                  about 1 to 2 hours a day lost
                </span>
              </p>
              <p className="pt-4 border-t border-gray-700">
                ={' '}
                <span className="text-safety-orange font-semibold">
                  6 to 10 hours a week
                </span>
              </p>
              <p className="text-xl text-white font-semibold pt-2">
                ={' '}
                <span className="text-red-400">1 full working day burned</span>{' '}
                on nothing
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-6xl mx-auto" />

      {/* Example Library Section */}
      <section id="examples" className="px-4 py-20 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            What You Don&apos;t Have to Do Anymore
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Incoming message:</p>
                <p className="text-white italic">
                  &quot;Can you quote for a small repair next week?&quot;
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">System tags:</p>
                <div className="flex gap-2">
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded text-sm font-semibold">
                    Low value
                  </span>
                  <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded text-sm font-semibold">
                    Quote shopper
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-green-400 font-semibold">
                  ✓ Auto reply sent. You never picked up the phone.
                </p>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">Incoming message:</p>
                <p className="text-white italic">
                  &quot;Hi, looking for quotes on a full kitchen refit. Budget
                  around £15k. When can you come round?&quot;
                </p>
              </div>
              <div className="mb-4">
                <p className="text-gray-400 text-sm mb-2">System tags:</p>
                <div className="flex gap-2">
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm font-semibold">
                    High value
                  </span>
                  <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm font-semibold">
                    Ready to buy
                  </span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <p className="text-green-400 font-semibold">
                  ✓ You get notified immediately. This one&apos;s worth your
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-6xl mx-auto" />

      {/* Video Examples Section */}
      <section id="see-it-in-action" className="px-4 py-20 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Work
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-contain"
                  src="/screen-recording.mov"
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <div className="text-gray-500 text-center p-8">
                  <p className="text-sm mb-2">Video Example 2</p>
                  <p className="text-xs">Insert your video embed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800 max-w-6xl mx-auto" />

      {/* Final CTA Section */}
      <section className="px-4 py-20 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stop quoting at 9pm. Start protecting your time.
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 lg:px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>
            &copy; 2026 Gledli. Built for UK tradespeople who value their time.
          </p>
        </div>
      </footer>
    </div>
  )
}
