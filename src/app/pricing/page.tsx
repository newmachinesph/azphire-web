'use client';

import { motion } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';
import {
  CheckIcon,
  SparklesIcon,
  BellAlertIcon,
  CommandLineIcon,
  ComputerDesktopIcon,
  BoltIcon,
  CubeTransparentIcon,
} from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const features = [
  'Unlimited job postings',
  'Full candidate database access',
  'Advanced search & filters',
  'Direct messaging',
  'Employer profile & branding',
  'Application management',
  'Save & bookmark jobs',
  'Job seeker profiles',
  'Company pages',
  'Mobile responsive',
];

const proToolsFeatures = [
  {
    icon: CommandLineIcon,
    name: 'MCP Server',
    description: 'Integrate RemoteTalent directly with Claude Code, Cursor, and other AI tools',
  },
  {
    icon: ComputerDesktopIcon,
    name: 'Desktop App',
    description: 'Native macOS, Windows, and Linux app with offline access and system tray',
  },
  {
    icon: BoltIcon,
    name: 'API Access',
    description: 'Full REST API access for custom integrations and automations',
  },
  {
    icon: CubeTransparentIcon,
    name: 'Claude Integration',
    description: 'Connect your Claude Pro or Max subscription to analyze candidates with AI',
  },
  {
    icon: BellAlertIcon,
    name: 'Real-time Notifications',
    description: 'Desktop push notifications for new applicants and messages',
  },
  {
    icon: SparklesIcon,
    name: 'Bulk Operations',
    description: 'Export candidate data, bulk messaging, and batch actions',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <SparklesIcon className="h-5 w-5 text-[#ED9F08]" />
              <span className="text-white/90 text-sm font-medium">100% Free Platform</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Free Platform.<br />Pro Tools for Power Users.
            </h1>
            <p className="text-xl text-white/70">
              Job postings, applications, and hiring — completely free for everyone.
              We make money from Pro Tools, not from taking a cut of your salary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Plan Card */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden -mt-24"
          >
            <div className="bg-gradient-to-r from-[#ED9F08] to-[#d4890a] p-6 text-center">
              <h2 className="text-2xl font-bold text-white">Everything Included</h2>
              <p className="text-white/80">For Job Seekers & Employers</p>
            </div>

            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <span className="text-6xl font-bold text-gray-900">$0</span>
                <span className="text-gray-500 text-xl">/forever</span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`${APP_URL}/register?type=jobseeker`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] border-2 border-[#0B2652] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Join as Job Seeker
                </a>
                <a
                  href={`${APP_URL}/register?type=employer`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border-2 border-[#0B2652] px-8 py-4 text-lg font-semibold text-[#0B2652] hover:bg-gray-50 transition-all"
                >
                  Join as Employer
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pro Tools Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ED9F08]/10 to-[#d4890a]/10 rounded-full px-4 py-2 mb-6">
              <BoltIcon className="h-5 w-5 text-[#ED9F08]" />
              <span className="text-[#ED9F08] text-sm font-medium">For Power Users</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pro Tools Bundle
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take your hiring workflow to the next level with our developer tools.
              MCP Server + Desktop App in one simple package.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Everything in Pro</h3>
                  <p className="text-gray-400">MCP Server + Desktop App + API Access</p>
                </div>
                <div className="text-center lg:text-right">
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-white">$29</span>
                    <span className="text-gray-400 text-xl">/month</span>
                  </div>
                  <p className="text-[#ED9F08] text-sm font-medium mt-1">Cancel anytime</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {proToolsFeatures.map((feature) => (
                  <div key={feature.name} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ED9F08]/20 to-[#d4890a]/20 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 text-[#ED9F08]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{feature.name}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`${APP_URL}/pro`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ED9F08] to-[#d4890a] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Pro Tools
                </a>
                <a
                  href="https://docs.remotetalent.ph/mcp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all"
                >
                  View MCP Docs
                </a>
              </div>
            </div>
          </motion.div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Need a custom solution for your team?{' '}
              <a href="mailto:enterprise@remotetalent.ph" className="text-[#0B2652] font-medium hover:underline">
                Contact us for enterprise pricing
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Why is it free?</h4>
              <p className="text-gray-600 text-sm">
                We make money from Pro Tools, not from job seekers or basic employer accounts. The platform works better with more users, so we keep it free.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Will the platform stay free?</h4>
              <p className="text-gray-600 text-sm">
                Yes. Job postings, applications, and messaging will always be free. Pro Tools is an optional upgrade for teams who want developer integrations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">What&apos;s included in Pro Tools?</h4>
              <p className="text-gray-600 text-sm">
                MCP Server for AI tool integrations, Desktop App for all platforms, full API access, real-time notifications, and bulk operations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Do I need Pro Tools to hire?</h4>
              <p className="text-gray-600 text-sm">
                No. The free platform has everything you need. Pro Tools is for power users who want to integrate with their existing developer workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Join thousands of Filipinos already using RemoteTalent to find their next opportunity.
            </p>
            <a
              href={`${APP_URL}/register`}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] border-2 border-[#0B2652] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            >
              Create Your Free Account
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
