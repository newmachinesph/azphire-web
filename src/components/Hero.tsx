'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';

import {
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const floatingElements = [
  { icon: '💼', x: '10%', y: '20%', delay: 0 },
  { icon: '🌏', x: '85%', y: '15%', delay: 0.5 },
  { icon: '💻', x: '5%', y: '70%', delay: 1 },
  { icon: '🚀', x: '90%', y: '65%', delay: 1.5 },
  { icon: '⭐', x: '15%', y: '45%', delay: 2 },
  { icon: '🎯', x: '80%', y: '40%', delay: 2.5 },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-[#ED9F08]/30 to-[#B81D23]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-[#0B2652]/20 to-[#1a3a6e]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-r from-[#ED9F08]/20 to-transparent rounded-full blur-2xl"
        />

        {/* Floating Emoji Elements */}
        {floatingElements.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: el.delay,
              ease: 'easeInOut',
            }}
            className="absolute text-4xl hidden lg:block"
            style={{ left: el.x, top: el.y }}
          >
            {el.icon}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-dots opacity-50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-32 pb-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-lg shadow-[#0B2652]/10 ring-1 ring-[#0B2652]/10"
          >
            <GlobeAltIcon className="h-5 w-5 text-[#ED9F08]" />
            <span className="text-sm font-medium text-gray-700">
              Built for Filipino Remote Professionals
            </span>
            <span className="flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-[#ED9F08] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ED9F08]"></span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
          >
            Where Top Filipino Talent Meets{' '}
            <span className="text-gradient">Global Remote Jobs</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Skip the bidding wars and endless applications. Get matched with verified employers
            seeking skilled Filipino developers, virtual assistants, and remote professionals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/jobs"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] border-2 border-[#0B2652] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#0B2652]/25 hover:shadow-2xl hover:shadow-[#0B2652]/30 transition-all duration-300 btn-shine"
              >
                Find Remote Jobs
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={`${APP_URL}/register?type=employer`}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white border-2 border-[#0B2652]/10 px-8 py-4 text-lg font-semibold text-[#0B2652] shadow-xl hover:border-[#0B2652]/20 hover:shadow-2xl transition-all duration-300"
              >
                Hire Filipino Talent
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2 text-gray-600">
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">No Commission Fees</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <ShieldCheckIcon className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Direct Employer Access</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <GlobeAltIcon className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">US, UK, AU & SG Employers</span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Indicator - positioned relative to section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-gray-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
