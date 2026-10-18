'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://azphire.com';

import {
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const values = [
  {
    icon: HeartIcon,
    title: 'People First',
    description: 'We believe in empowering Filipino professionals to reach their full potential through meaningful remote work opportunities.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Trust & Transparency',
    description: 'We build trust through honest communication, verified profiles, and transparent processes for both job seekers and employers.',
  },
  {
    icon: LightBulbIcon,
    title: 'Innovation',
    description: 'We continuously improve our platform to make remote hiring and job searching easier, faster, and more effective.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Global Impact',
    description: 'We connect Filipino talent with opportunities worldwide, contributing to the growth of the global remote workforce.',
  },
];

const milestones = [
  {
    year: '2026',
    title: 'The Beginning',
    description: 'Azphire was founded with a mission to connect skilled Filipino professionals with global remote opportunities.',
  },
  {
    year: 'Now',
    title: 'Building Together',
    description: 'We\'re launching our platform and building a community of talented professionals and forward-thinking employers.',
  },
  {
    year: 'Future',
    title: 'Our Vision',
    description: 'To become the leading platform for Filipino remote talent, helping thousands find fulfilling careers with global companies.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ED9F08] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Connecting Filipino Talent with{' '}
              <span className="text-[#ED9F08]">Global Opportunities</span>
            </h1>
            <p className="text-xl text-white/70">
              We&apos;re on a mission to empower Filipino professionals to build successful
              remote careers while helping global companies find exceptional talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#ED9F08] font-semibold text-sm uppercase tracking-wider">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Bridging the Gap Between Talent and Opportunity
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                The Philippines is home to millions of skilled, English-proficient professionals
                eager to contribute to global companies. Yet, many struggle to find quality remote
                opportunities that match their skills and aspirations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                At the same time, companies worldwide are looking for reliable, talented remote
                workers but often don&apos;t know where to find them.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Azphire bridges this gap by creating a trusted platform where Filipino
                professionals can showcase their skills and connect with employers who value
                their expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] rounded-3xl p-8 lg:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <UserGroupIcon className="h-10 w-10 text-[#ED9F08] mx-auto mb-3" />
                    <p className="text-white font-semibold">Job Seekers</p>
                    <p className="text-white/60 text-sm mt-1">Find remote work</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <GlobeAltIcon className="h-10 w-10 text-[#ED9F08] mx-auto mb-3" />
                    <p className="text-white font-semibold">Global Reach</p>
                    <p className="text-white/60 text-sm mt-1">Work anywhere</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <ShieldCheckIcon className="h-10 w-10 text-[#ED9F08] mx-auto mb-3" />
                    <p className="text-white font-semibold">Verified</p>
                    <p className="text-white/60 text-sm mt-1">Trusted profiles</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <RocketLaunchIcon className="h-10 w-10 text-[#ED9F08] mx-auto mb-3" />
                    <p className="text-white font-semibold">Career Growth</p>
                    <p className="text-white/60 text-sm mt-1">Level up skills</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#ED9F08] font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#ED9F08] font-semibold text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Where We&apos;ve Been & Where We&apos;re Going
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Whether you&apos;re looking for your next remote opportunity or searching for
              talented professionals, we&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`${APP_URL}/register`}
                className="inline-flex items-center gap-2 rounded-full bg-white border-2 border-white px-8 py-4 text-lg font-semibold text-[#0B2652] shadow-xl hover:shadow-2xl transition-all"
              >
                Get Started Free
              </a>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 transition-all"
              >
                Browse Jobs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
