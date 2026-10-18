'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UserIcon,
  GlobeAltIcon,
  SparklesIcon,
  EnvelopeIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';

const steps = [
  {
    id: 1,
    title: 'Basic Info',
    description: 'Name, email, and company name',
    icon: UserIcon,
    color: 'from-[#0B2652] to-[#1a3a6e]',
  },
  {
    id: 2,
    title: 'Add Links (Optional)',
    description: 'Website or LinkedIn for faster verification',
    icon: GlobeAltIcon,
    color: 'from-[#ED9F08] to-[#f5b52e]',
  },
  {
    id: 3,
    title: 'Verify Email',
    description: 'Enter the OTP sent to your email',
    icon: EnvelopeIcon,
    color: 'from-[#7c3aed] to-[#a855f7]',
  },
  {
    id: 4,
    title: 'Post Your First Job',
    description: 'Start finding talent immediately',
    icon: BriefcaseIcon,
    color: 'from-[#059669] to-[#10b981]',
  },
];

const mockCompany = {
  name: 'John Smith',
  email: 'john@example.com',
  company: 'Acme Inc.',
  website: 'acme.com',
  linkedin: '',
};

export function EmployerWizardDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    if (!isAnimating) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev >= 4 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full bg-[#0B2652]/5 px-4 py-1.5 text-sm font-medium text-[#0B2652]">
            <SparklesIcon className="mr-2 h-4 w-4 text-[#ED9F08]" />
            Quick Setup
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900">
            Start Hiring in <span className="text-gradient">Minutes</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Simple sign-up, post your first job, and start receiving applications from top Filipino talent.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Step Indicators */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.id}
                onClick={() => {
                  setCurrentStep(step.id);
                  setIsAnimating(false);
                }}
                className={`relative flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  currentStep === step.id
                    ? 'bg-white shadow-lg shadow-gray-200/50 scale-[1.02]'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {/* Step Number/Icon */}
                <div
                  className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transition-transform duration-300 ${
                    currentStep === step.id ? 'scale-110' : ''
                  }`}
                >
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className={`font-semibold transition-colors ${
                    currentStep === step.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm mt-0.5 transition-colors ${
                    currentStep === step.id ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.description}
                  </p>
                </div>

                {/* Active Indicator */}
                {currentStep === step.id && (
                  <motion.div
                    layoutId="activeEmployerStep"
                    className="absolute inset-0 rounded-2xl ring-2 ring-[#0B2652]/20"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Animated Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Browser Frame */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-gray-300/50 overflow-hidden border border-gray-100">
              {/* Browser Chrome */}
              <div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white rounded-lg px-3 py-1.5 text-xs text-gray-400 ml-2">
                  app.remotetalent.ph/register
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 min-h-[380px] relative">
                <AnimatePresence mode="wait">
                  {/* Step 1: Basic Info */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Create Your Account</h3>
                        <p className="text-sm text-gray-500">Just the basics to get started</p>
                      </div>

                      {/* Form Fields */}
                      <div className="space-y-3">
                        <div>
                          <label className="text-xs font-medium text-gray-500">Full Name</label>
                          <div className="mt-1 px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                            {mockCompany.name}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500">Work Email</label>
                          <div className="mt-1 px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                            {mockCompany.email}
                          </div>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500">Company Name</label>
                          <div className="mt-1 px-4 py-3 bg-gray-50 rounded-xl text-gray-900">
                            {mockCompany.company}
                          </div>
                        </div>
                      </div>

                      <motion.button
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full py-3 bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] text-white rounded-xl font-medium"
                      >
                        Continue
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Step 2: Optional Links */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-semibold text-gray-900">Add Your Links</h3>
                        <p className="text-sm text-gray-500">Optional, but helps verify faster</p>
                      </div>

                      {/* Website Input */}
                      <div>
                        <label className="text-xs font-medium text-gray-500">Company Website</label>
                        <div className="mt-1 flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl">
                          <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                          <span className="text-gray-900">{mockCompany.website}</span>
                          <CheckBadgeIcon className="h-5 w-5 text-green-500 ml-auto" />
                        </div>
                      </div>

                      {/* LinkedIn Input */}
                      <div>
                        <label className="text-xs font-medium text-gray-500">LinkedIn (Company or Personal)</label>
                        <div className="mt-1 flex items-center gap-2 px-4 py-3 border-2 border-dashed border-gray-200 rounded-xl text-gray-400">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                          <span>linkedin.com/in/... or /company/...</span>
                        </div>
                      </div>

                      {/* Verification Note */}
                      <div className="bg-[#ED9F08]/10 rounded-xl p-4 flex items-start gap-3">
                        <SparklesIcon className="h-5 w-5 text-[#ED9F08] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Get verified faster</p>
                          <p className="text-xs text-gray-600 mt-0.5">Adding your website or LinkedIn helps us verify your company quicker</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 py-3 border border-gray-200 text-gray-600 rounded-xl font-medium">
                          Skip
                        </button>
                        <button className="flex-1 py-3 bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] text-white rounded-xl font-medium">
                          Continue
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Email Verification */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center h-[340px]"
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center mb-6"
                      >
                        <EnvelopeIcon className="h-10 w-10 text-white" />
                      </motion.div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Verify Your Email</h3>
                      <p className="text-sm text-gray-500 mb-2">Enter the 6-digit code sent to</p>
                      <p className="text-sm font-medium text-[#0B2652] mb-6">{mockCompany.email}</p>

                      {/* OTP Input */}
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="w-10 h-12 rounded-lg border-2 border-gray-200 flex items-center justify-center text-lg font-bold text-gray-900"
                          >
                            {i <= 4 ? '•' : ''}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Post First Job */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-center mb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mx-auto mb-4"
                        >
                          <CheckBadgeIcon className="h-8 w-8 text-white" />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-gray-900">You&apos;re All Set!</h3>
                        <p className="text-sm text-gray-500">Post your first job to start receiving applications</p>
                      </div>

                      {/* Quick Job Form */}
                      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        <div>
                          <label className="text-xs font-medium text-gray-500">Job Title</label>
                          <div className="mt-1 px-3 py-2 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm">
                            Senior React Developer
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-medium text-gray-500">Salary Range</label>
                            <div className="mt-1 px-3 py-2 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm">
                              $2,000 - $3,500
                            </div>
                          </div>
                          <div>
                            <label className="text-xs font-medium text-gray-500">Type</label>
                            <div className="mt-1 px-3 py-2 bg-white rounded-lg border border-gray-200 text-gray-900 text-sm">
                              Full-time
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.button
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full py-3 bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] text-white rounded-xl font-medium flex items-center justify-center gap-2"
                      >
                        Post Job & Find Talent
                        <ArrowRightIcon className="h-4 w-4" />
                      </motion.button>

                      <button className="w-full py-2 text-sm text-gray-500 hover:text-gray-700">
                        Skip for now, browse candidates first
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] shadow-lg flex items-center justify-center"
            >
              <BriefcaseIcon className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-10 h-10 rounded-lg bg-gradient-to-br from-[#ED9F08] to-[#f5b52e] shadow-lg flex items-center justify-center"
            >
              <SparklesIcon className="h-5 w-5 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href={`${APP_URL}/register?type=employer`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#0B2652]/25 hover:shadow-2xl hover:shadow-[#0B2652]/30 transition-all duration-300"
          >
            Start Hiring Today
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Free to post jobs • No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
