'use client';

import { motion } from 'framer-motion';
import {
  BoltIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  DocumentCheckIcon,
  GlobeAltIcon,
  BellAlertIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: BoltIcon,
    title: 'Quick Apply',
    description: 'Apply to multiple jobs with a single click. Your profile does the talking.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Employer Profiles',
    description: 'View detailed company profiles, team info, and open positions before applying.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Direct Messaging',
    description: 'Connect directly with hiring managers. No middlemen, no delays.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: DocumentCheckIcon,
    title: 'Advanced Filters',
    description: 'Filter jobs by salary, timezone, experience level, and job type.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: BellAlertIcon,
    title: 'Save & Track',
    description: 'Bookmark jobs you like and track your application status in one place.',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Network',
    description: 'Access opportunities from companies across the Americas, Europe, and Asia.',
    gradient: 'from-cyan-500 to-blue-500',
  },
];

export function Features() {
  return (
    <section className="py-24 lg:py-32 bg-[#0B2652] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ED9F08]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B81D23]/10 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[#ED9F08]">
            Platform Features
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-white">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ED9F08] to-[#f5b52e]">
              Succeed
            </span>
          </h2>
          <p className="mt-4 text-xl text-white/70 max-w-2xl mx-auto">
            Powerful tools and features designed to make your job search or hiring process seamless.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
