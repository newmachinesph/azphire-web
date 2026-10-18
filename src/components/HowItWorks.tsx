'use client';

import { motion } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';

import {
  UserPlusIcon,
  DocumentMagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    step: '01',
    icon: UserPlusIcon,
    title: 'Create Profile',
    description: 'Sign up free and showcase your skills, experience, and expertise to employers worldwide.',
    color: 'from-[#ED9F08] to-[#f5b52e]',
  },
  {
    step: '02',
    icon: DocumentMagnifyingGlassIcon,
    title: 'Discover Jobs',
    description: 'Browse curated remote opportunities from global companies. Filter by role, salary, and schedule.',
    color: 'from-[#B81D23] to-[#d63384]',
  },
  {
    step: '03',
    icon: ChatBubbleLeftRightIcon,
    title: 'Connect & Apply',
    description: 'Apply with a few clicks and connect directly with hiring managers through our platform.',
    color: 'from-[#0B2652] to-[#1a3a6e]',
  },
  {
    step: '04',
    icon: RocketLaunchIcon,
    title: 'Get Hired',
    description: 'Land your dream remote job and start earning international rates from home.',
    color: 'from-[#059669] to-[#10b981]',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-[#ED9F08]/10 px-4 py-1.5 text-sm font-medium text-[#ED9F08]">
            Simple Process
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes. Our streamlined process makes finding your next opportunity effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Step Card */}
              <div className="relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-gray-200/80 transition-all duration-300 h-full border border-gray-100 group-hover:border-gray-200">
                {/* Step Number */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-sm font-bold shadow-lg`}>
                    {index + 1}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href={`${APP_URL}/register`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#0B2652]/25 hover:shadow-2xl hover:shadow-[#0B2652]/30 transition-all duration-300 btn-shine"
          >
            Get Started Now — It&apos;s Free
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
