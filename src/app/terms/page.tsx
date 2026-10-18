'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function TermsPage() {
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using RemoteTalent.ph (&quot;the Platform&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  RemoteTalent.ph is a job marketplace platform that connects Filipino professionals with remote work opportunities from employers worldwide. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Job listing and search functionality</li>
                  <li>Profile creation for job seekers</li>
                  <li>Employer accounts for posting job opportunities</li>
                  <li>Application management tools</li>
                  <li>Communication features between employers and candidates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To use certain features of the Platform, you must create an account. You agree to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized access</li>
                  <li>Accept responsibility for all activities under your account</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Conduct</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Post false, misleading, or fraudulent information</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Use the Platform for any illegal purpose</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Scrape or collect user data without permission</li>
                  <li>Post spam or unsolicited advertisements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Job Listings</h2>
                <p className="text-gray-600 leading-relaxed">
                  Employers are responsible for ensuring their job listings are accurate, legal, and do not discriminate against any protected class. RemoteTalent.ph reserves the right to remove any listing that violates these terms or our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All content on the Platform, including logos, text, graphics, and software, is the property of RemoteTalent.ph or its licensors. You may not copy, modify, or distribute this content without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  RemoteTalent.ph is not responsible for the conduct of users or the accuracy of information posted on the Platform. We do not guarantee employment outcomes and are not liable for any disputes between employers and job seekers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to suspend or terminate your account at any time for violations of these terms or for any other reason at our discretion. You may also delete your account at any time through your account settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update these Terms of Service from time to time. We will notify users of significant changes via email or through the Platform. Continued use of the Platform after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:hello@remotetalent.ph" className="text-[#0B2652] hover:underline">
                    hello@remotetalent.ph
                  </a>
                </p>
              </section>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm">
                See also:{' '}
                <Link href="/privacy" className="text-[#0B2652] hover:underline">
                  Privacy Policy
                </Link>
                {' '}&bull;{' '}
                <Link href="/cookies" className="text-[#0B2652] hover:underline">
                  Cookie Policy
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
