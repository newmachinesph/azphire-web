'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600">Last updated: January 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="prose prose-gray max-w-none"
          >
            <div className="bg-white rounded-2xl p-8 lg:p-12 border border-gray-100 shadow-sm space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  RemoteTalent.ph uses cookies to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Keep you signed in to your account</li>
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our platform</li>
                  <li>Improve our services based on usage patterns</li>
                  <li>Provide personalized content and recommendations</li>
                  <li>Ensure platform security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Essential Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      These cookies are necessary for the platform to function properly. They enable basic features like page navigation, secure areas access, and remembering your login status. You cannot opt out of these cookies.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Functional Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      These cookies allow us to remember your preferences, such as language settings and display options. They enhance your experience but are not essential for the platform to work.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use analytics cookies to understand how visitors interact with our platform. This helps us improve our services and identify areas that need enhancement. These cookies collect aggregated, anonymous data.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Marketing Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      These cookies may be used to show you relevant advertisements on other websites. We currently limit our use of marketing cookies but may use them in the future with your consent.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Some cookies on our platform are placed by third-party services we use, such as analytics providers. These third parties have their own privacy policies governing the use of their cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Managing Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You can control and manage cookies in several ways:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                  <li>Our cookie preferences: Use our cookie consent banner to manage your preferences</li>
                  <li>Third-party opt-outs: Visit third-party websites to opt out of their cookies</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Note: Disabling certain cookies may affect the functionality of our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie Duration</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cookies can be either:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                  <li><strong>Persistent cookies:</strong> Remain on your device until they expire or you delete them</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about our use of cookies, please contact us at{' '}
                  <a href="mailto:hello@remotetalent.ph" className="text-[#0B2652] hover:underline">
                    hello@remotetalent.ph
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                See also:{' '}
                <Link href="/terms" className="text-[#0B2652] hover:underline">
                  Terms of Service
                </Link>
                {' '}&bull;{' '}
                <Link href="/privacy" className="text-[#0B2652] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
