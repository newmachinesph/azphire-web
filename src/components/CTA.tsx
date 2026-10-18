'use client';

import { motion } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';

import {
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#0B2652]/5 to-[#ED9F08]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0B2652] via-[#0B2652] to-[#1a3a6e] p-12 lg:p-20 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ED9F08]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B81D23]/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Text */}
            <div className="max-w-2xl text-center lg:text-left">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Stop Competing.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED9F08] to-[#f5b52e]">
                  Start Connecting.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-xl text-white/80"
              >
                Create your profile in 5 minutes. Get matched with employers who are actually hiring.
                No endless applications. No ghosting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6"
              >
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  <span>Zero platform fees</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  <span>Direct employer contact</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircleIcon className="h-5 w-5 text-green-400" />
                  <span>Apply in one click</span>
                </div>
              </motion.div>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 w-full sm:w-auto"
            >
              <a
                href={`${APP_URL}/register?type=jobseeker`}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-[#0B2652] shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Find Your Dream Job
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`${APP_URL}/register?type=employer`}
                className="group flex items-center justify-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white ring-1 ring-white/30 hover:bg-white/20 hover:ring-white/50 transition-all duration-300"
              >
                Hire Filipino Talent
                <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
