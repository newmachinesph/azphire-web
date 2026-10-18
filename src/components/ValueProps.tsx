'use client';

import { motion } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';

import {
  BriefcaseIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const jobSeekerBenefits = [
  {
    icon: GlobeAltIcon,
    title: 'Direct Employer Access',
    description: 'No middlemen. Apply directly to verified US, UK, and Australian companies hiring remote Filipino professionals.',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'USD Salaries, Zero Fees',
    description: 'Keep 100% of your earnings. Unlike freelance platforms, we never take a cut of your salary.',
  },
  {
    icon: RocketLaunchIcon,
    title: 'Full-Time Remote Careers',
    description: 'Not gig work. Find stable, long-term positions with benefits, paid leave, and growth opportunities.',
  },
  {
    icon: ClockIcon,
    title: 'Timezone-Friendly Roles',
    description: 'Filter by US hours, EU hours, or flexible schedules. Find jobs that fit your lifestyle.',
  },
];

const employerBenefits = [
  {
    icon: UserGroupIcon,
    title: 'Quality Filipino Talent',
    description: 'Access a pool of skilled Filipino developers, virtual assistants, and remote professionals.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Skip the Bidding Wars',
    description: 'No auction-style hiring. Post once, receive applications from serious candidates.',
  },
  {
    icon: CurrencyDollarIcon,
    title: '70% Cost Savings',
    description: 'Hire senior developers at $2-4K/mo, VAs at $600-1K/mo. Same quality, fraction of US rates.',
  },
  {
    icon: SparklesIcon,
    title: 'Fast Hiring Process',
    description: 'Browse candidates, message directly, and hire in days instead of weeks.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ValueProps() {
  return (
    <section id="jobs" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-[#0B2652]/5 px-4 py-1.5 text-sm font-medium text-[#0B2652]">
            <BriefcaseIcon className="mr-2 h-4 w-4" />
            Not Another Job Board
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-gray-900">
            The <span className="text-gradient">Smarter Way</span> to Hire & Get Hired
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Tired of platforms that take 20% of your earnings? Frustrated by unqualified applicants? We built something better.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* For Job Seekers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#ED9F08] uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-[#ED9F08]" />
                For Filipino Professionals
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
                Land High-Paying Remote Jobs
              </h3>
            </div>

            <div className="space-y-6">
              {jobSeekerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-transparent hover:from-[#0B2652]/5 hover:to-transparent transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ED9F08] to-[#B81D23] flex items-center justify-center shadow-lg shadow-[#ED9F08]/25 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href={`${APP_URL}/register?type=jobseeker`}
                className="inline-flex items-center gap-2 text-[#0B2652] font-semibold hover:text-[#1a3a6e] transition-colors group"
              >
                Start Your Journey
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* For Employers */}
          <motion.div
            id="employers"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B2652] uppercase tracking-wider">
                <span className="w-8 h-0.5 bg-[#0B2652]" />
                For Global Employers
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">
                Hire Elite Filipino Remote Teams
              </h3>
            </div>

            <div className="space-y-6">
              {employerBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-gray-50 to-transparent hover:from-[#0B2652]/5 hover:to-transparent transition-all duration-300 cursor-default"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center shadow-lg shadow-[#0B2652]/25 group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{benefit.title}</h4>
                    <p className="mt-1 text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href={`${APP_URL}/register?type=employer`}
                className="inline-flex items-center gap-2 text-[#0B2652] font-semibold hover:text-[#1a3a6e] transition-colors group"
              >
                Start Hiring Today
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
