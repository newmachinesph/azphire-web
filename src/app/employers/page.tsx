'use client';

import { motion } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';

import {
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  ClockIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui';
import { EmployerWizardDemo } from '@/components/EmployerWizardDemo';

const benefits = [
  {
    icon: UserGroupIcon,
    title: 'Top Filipino Talent',
    description: 'Access a pool of skilled, English-proficient professionals ready to work remotely.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Quality Candidates',
    description: 'Browse detailed profiles with skills, experience, and portfolio samples.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Cost-Effective Hiring',
    description: 'Build world-class teams at competitive rates without sacrificing quality.',
  },
  {
    icon: SparklesIcon,
    title: 'Quick Hiring Process',
    description: 'Find and hire the right talent in days, not months. No recruitment fees.',
  },
  {
    icon: ClockIcon,
    title: 'Flexible Time Zones',
    description: 'Filipino professionals are experienced with US, AU, and EU time zones.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Cultural Compatibility',
    description: 'Strong Western cultural affinity makes collaboration seamless.',
  },
];

const howItWorks = [
  {
    step: '01',
    title: 'Create Your Employer Profile',
    description: 'Sign up for free and set up your profile to attract top talent.',
  },
  {
    step: '02',
    title: 'Post Your Jobs',
    description: 'Create detailed job listings with requirements, salary range, and benefits.',
  },
  {
    step: '03',
    title: 'Review Applications',
    description: 'Browse candidate profiles and review applications in one place.',
  },
  {
    step: '04',
    title: 'Hire Your Team',
    description: 'Connect with candidates directly and build your remote team.',
  },
];

const features = [
  {
    icon: DocumentCheckIcon,
    title: 'Unlimited Job Posts',
    description: 'Post as many positions as you need without any limits.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Direct Messaging',
    description: 'Communicate with candidates directly through our platform.',
  },
  {
    icon: ChartBarIcon,
    title: 'Application Tracking',
    description: 'Manage all your applications in one organized dashboard.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Detailed Profiles',
    description: 'View candidate skills, experience, portfolio, and availability.',
  },
];


export default function EmployersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
                For Employers
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Build Your
                <br />
                <span className="text-gradient">Global Team</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 max-w-lg">
                Access top Filipino talent ready to work remotely. Hire skilled professionals at competitive rates with no recruitment fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={`${APP_URL}/register?type=employer`} size="lg">
                  Start Hiring Free
                </Button>
                <Button href="#how-it-works" variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
            </motion.div>

            {/* Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-400">
                    remotetalent.ph/employer/dashboard
                  </div>
                </div>
                {/* Dashboard Content */}
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-4 w-32 bg-gray-200 rounded" />
                    <div className="h-8 w-24 bg-[#0B2652] rounded-lg" />
                  </div>
                  {/* Job Cards */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]" />
                          <div className="flex-1">
                            <div className="h-3 w-32 bg-gray-200 rounded mb-2" />
                            <div className="h-2 w-24 bg-gray-100 rounded mb-3" />
                            <div className="flex gap-2">
                              <div className="h-5 w-16 bg-green-100 rounded-full" />
                              <div className="h-5 w-20 bg-blue-100 rounded-full" />
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="h-6 w-6 bg-[#ED9F08] rounded-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Hire Filipino Talent?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The Philippines has become a top destination for remote hiring. Here&apos;s why.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Start hiring in minutes. No complicated processes, no hidden fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-gray-100 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Registration Wizard Demo */}
      <EmployerWizardDemo />

      {/* AI-Powered Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center rounded-full bg-[#ED9F08]/20 px-4 py-1.5 text-sm font-medium text-[#ED9F08] mb-6">
                Pro Tools
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                AI-Powered Hiring with Desktop App
              </h2>
              <p className="text-lg text-white/70 mb-6">
                Download our desktop app and connect to Claude Pro or Max. Get AI-powered candidate research, profile analysis, and hiring insights—everything you need to hire Filipino talent, all in one place.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Desktop app for Windows, Mac, and Linux',
                  'Connect your Claude Pro/Max subscription',
                  'Research candidates with AI-powered insights',
                  'Auto-generate professional profiles from public data',
                  'Score and qualify candidates automatically',
                  'MCP integration for custom AI workflows',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/90">
                    <SparklesIcon className="h-5 w-5 text-[#ED9F08] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/pricing"
                className="inline-flex items-center gap-2 text-[#ED9F08] font-medium hover:text-[#f5b52e] transition-colors text-sm"
              >
                Included in Pro Tools — $29/month
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
            >
              {/* Desktop App Mockup */}
              <div className="bg-[#1a1d21] rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                {/* App Header */}
                <div className="bg-[#252830] px-4 py-2 flex items-center gap-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-[#0B2652] flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">R</span>
                    </div>
                    <span className="text-white/80 text-sm font-medium">RemoteTalent Desktop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-0.5 rounded bg-green-500/20 text-green-400 text-xs">Claude Connected</div>
                  </div>
                </div>
                {/* App Content */}
                <div className="flex">
                  {/* Sidebar */}
                  <div className="w-16 bg-[#1a1d21] border-r border-white/5 p-3">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-lg bg-[#0B2652] flex items-center justify-center">
                        <UserGroupIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <DocumentCheckIcon className="w-5 h-5 text-gray-500" />
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                        <ChartBarIcon className="w-5 h-5 text-gray-500" />
                      </div>
                    </div>
                  </div>
                  {/* Main Content */}
                  <div className="flex-1 p-4">
                    <div className="mb-4">
                      <div className="text-white font-semibold mb-1">Candidate Research</div>
                      <div className="text-gray-500 text-xs">AI-powered profile analysis</div>
                    </div>
                    {/* Profile Card */}
                    <div className="bg-[#252830] rounded-xl p-4 border border-white/5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]" />
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm">Maria Santos</div>
                          <div className="text-gray-500 text-xs">Senior React Developer</div>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 text-xs">95% Match</div>
                      </div>
                      <div className="text-gray-400 text-xs mb-3">5+ years experience in React, TypeScript, and Node.js. Strong portfolio with enterprise applications.</div>
                      <div className="flex gap-2">
                        <div className="px-2 py-1 rounded bg-[#0B2652]/30 text-[#4d8fff] text-xs">React</div>
                        <div className="px-2 py-1 rounded bg-[#0B2652]/30 text-[#4d8fff] text-xs">TypeScript</div>
                        <div className="px-2 py-1 rounded bg-[#0B2652]/30 text-[#4d8fff] text-xs">Node.js</div>
                      </div>
                    </div>
                    {/* AI Status */}
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      <SparklesIcon className="w-4 h-4 text-[#ED9F08]" />
                      <span className="text-gray-400">Research completed via Claude Pro</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Hire
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform gives you all the tools to find, evaluate, and hire the best candidates for your team.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0B2652]/10 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-[#0B2652]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] rounded-3xl p-8 lg:p-12"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                100% Free for Employers
              </h3>
              <p className="text-white/70 mb-6">
                No subscription fees. No per-hire costs. No hidden charges. Just connect with talent and grow your team.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited job postings',
                  'Full candidate database access',
                  'Direct messaging',
                  'Application tracking',
                  'Employer profile page',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white">
                    <CheckCircleIcon className="h-5 w-5 text-[#ED9F08]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href={`${APP_URL}/register?type=employer`}
                variant="secondary"
                className="bg-white border-white text-[#0B2652] w-full justify-center"
              >
                Create Free Account
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Build Your Remote Team?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already hiring top Filipino talent through RemoteTalent.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={`${APP_URL}/register?type=employer`} size="lg">
                Start Hiring Free
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Sales
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
