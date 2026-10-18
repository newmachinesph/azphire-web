'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DocumentArrowUpIcon,
  SparklesIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  CheckBadgeIcon,
  PhotoIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';

const steps = [
  {
    id: 1,
    title: 'Upload Resume & Photo',
    description: 'Drop your resume (PDF, DOC) and a professional photo',
    icon: DocumentArrowUpIcon,
    color: 'from-[#ED9F08] to-[#f5b52e]',
  },
  {
    id: 2,
    title: 'AI Extracts Your Profile',
    description: 'Our AI reads your resume and builds your profile instantly',
    icon: SparklesIcon,
    color: 'from-[#0B2652] to-[#1a3a6e]',
  },
  {
    id: 3,
    title: 'Review & Edit',
    description: 'Check the extracted data and make any adjustments',
    icon: PencilSquareIcon,
    color: 'from-[#059669] to-[#10b981]',
  },
  {
    id: 4,
    title: 'Verify Email',
    description: 'Enter the OTP sent to your email to confirm',
    icon: EnvelopeIcon,
    color: 'from-[#7c3aed] to-[#a855f7]',
  },
  {
    id: 5,
    title: 'Profile Under Review',
    description: 'We verify your profile, then you can start applying!',
    icon: CheckBadgeIcon,
    color: 'from-[#B81D23] to-[#ef4444]',
  },
];

// Simulated extracted profile data
const mockProfile = {
  name: 'Maria Santos',
  title: 'Senior React Developer',
  email: 'maria.santos@example.com',
  location: 'Manila, Philippines',
  experience: '5+ years',
  skills: ['React', 'TypeScript', 'Node.js', 'AWS'],
};

export function RegistrationWizardDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);

  // Auto-advance through steps
  useEffect(() => {
    if (!isAnimating) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
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
            AI-Powered Registration
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900">
            Create Your Profile in <span className="text-gradient">Minutes</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Just upload your resume — our AI does the heavy lifting. Review, verify, and you&apos;re ready to find your dream remote job.
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
            {steps.map((step, index) => (
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
                    layoutId="activeStep"
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
            {/* Phone/Browser Frame */}
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
              <div className="p-6 min-h-[400px] relative">
                <AnimatePresence mode="wait">
                  {/* Step 1: Upload */}
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
                        <h3 className="text-lg font-semibold text-gray-900">Upload Your Resume</h3>
                        <p className="text-sm text-gray-500">PDF, DOC, or DOCX</p>
                      </div>

                      {/* Upload Zone */}
                      <motion.div
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="border-2 border-dashed border-[#0B2652]/30 rounded-2xl p-8 text-center bg-[#0B2652]/5"
                      >
                        <DocumentArrowUpIcon className="h-12 w-12 text-[#0B2652] mx-auto mb-3" />
                        <p className="text-sm text-gray-600">Drop your resume here</p>
                        <p className="text-xs text-gray-400 mt-1">or click to browse</p>
                      </motion.div>

                      {/* Photo Upload */}
                      <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                          <PhotoIcon className="h-8 w-8 text-gray-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Profile Photo</p>
                          <p className="text-xs text-gray-500">Square image, min 200x200px</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: AI Processing */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center h-[350px]"
                    >
                      {/* AI Animation */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        className="w-24 h-24 rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] flex items-center justify-center mb-6"
                      >
                        <SparklesIcon className="h-12 w-12 text-white" />
                      </motion.div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">AI is Reading Your Resume</h3>

                      {/* Progress dots */}
                      <div className="flex gap-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                            className="w-2 h-2 rounded-full bg-[#0B2652]"
                          />
                        ))}
                      </div>

                      {/* Extracting items */}
                      <div className="mt-6 space-y-2 w-full max-w-xs">
                        {['Extracting name...', 'Finding skills...', 'Analyzing experience...'].map((text, i) => (
                          <motion.div
                            key={text}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.5 }}
                            className="flex items-center gap-2 text-sm text-gray-500"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.2 }}
                              className="w-1.5 h-1.5 rounded-full bg-[#ED9F08]"
                            />
                            {text}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Review Profile */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">Review Your Profile</h3>
                        <p className="text-sm text-gray-500">Edit any information if needed</p>
                      </div>

                      {/* Profile Card */}
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center text-white font-bold text-xl">
                            MS
                          </div>
                          <div className="flex-1">
                            <input
                              type="text"
                              defaultValue={mockProfile.name}
                              className="font-semibold text-gray-900 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-[#0B2652] focus:outline-none w-full"
                            />
                            <input
                              type="text"
                              defaultValue={mockProfile.title}
                              className="text-sm text-gray-600 bg-transparent border-b border-transparent hover:border-gray-300 focus:border-[#0B2652] focus:outline-none w-full mt-1"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-xs font-medium text-gray-500 mb-2">SKILLS</p>
                        <div className="flex flex-wrap gap-2">
                          {mockProfile.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="px-3 py-1 bg-[#0B2652]/10 text-[#0B2652] text-sm rounded-full"
                            >
                              {skill}
                            </motion.span>
                          ))}
                          <button className="px-3 py-1 border border-dashed border-gray-300 text-gray-400 text-sm rounded-full hover:border-[#0B2652] hover:text-[#0B2652]">
                            + Add
                          </button>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <p className="text-xs text-gray-400">Location</p>
                          <p className="text-sm font-medium text-gray-900">{mockProfile.location}</p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-gray-100">
                          <p className="text-xs text-gray-400">Experience</p>
                          <p className="text-sm font-medium text-gray-900">{mockProfile.experience}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Email Verification */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center h-[350px]"
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a855f7] flex items-center justify-center mb-6"
                      >
                        <EnvelopeIcon className="h-10 w-10 text-white" />
                      </motion.div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Verify Your Email</h3>
                      <p className="text-sm text-gray-500 mb-6">Enter the 6-digit code sent to</p>
                      <p className="text-sm font-medium text-[#0B2652] mb-6">{mockProfile.email}</p>

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

                  {/* Step 5: Under Review */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-center h-[350px]"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-6"
                      >
                        <CheckBadgeIcon className="h-14 w-14 text-white" />
                      </motion.div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Submitted!</h3>
                      <p className="text-sm text-gray-500 text-center max-w-xs mb-6">
                        We&apos;re reviewing your profile. You&apos;ll be notified once approved!
                      </p>

                      {/* Status */}
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                        <span className="text-sm text-yellow-700">Under Review</span>
                      </div>

                      {/* What you can do */}
                      <div className="mt-6 text-center">
                        <p className="text-xs text-gray-400 mb-2">While waiting, you can:</p>
                        <p className="text-sm text-[#0B2652] font-medium">Browse available jobs</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-[#ED9F08] to-[#f5b52e] shadow-lg flex items-center justify-center"
            >
              <SparklesIcon className="h-6 w-6 text-white" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-10 h-10 rounded-lg bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] shadow-lg flex items-center justify-center"
            >
              <DocumentArrowUpIcon className="h-5 w-5 text-white" />
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
            href={`${APP_URL}/register?type=jobseeker`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#0B2652]/25 hover:shadow-2xl hover:shadow-[#0B2652]/30 transition-all duration-300"
          >
            Start Your Registration
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Free to join • Takes less than 5 minutes
          </p>
        </motion.div>
      </div>
    </section>
  );
}
