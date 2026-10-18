'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.remotetalent.ph';
import {
  MapPinIcon,
  BriefcaseIcon,
  CurrencyDollarIcon,
  ClockIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
  ShareIcon,
  HeartIcon,
  CalendarIcon,
  UserGroupIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Sample job data - replace with API data later
const jobsData: Record<string, {
  id: number;
  title: string;
  company: string;
  companyDescription: string;
  companySize: string;
  companyIndustry: string;
  companyWebsite: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  tags: string[];
  logo: string;
  featured: boolean;
  category: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}> = {
  '1': {
    id: 1,
    title: 'Senior React Developer',
    company: 'TechCorp Global',
    companyDescription: 'TechCorp Global is a leading technology company specializing in building innovative web applications for enterprise clients worldwide.',
    companySize: '50-200 employees',
    companyIndustry: 'Technology',
    companyWebsite: 'techcorpglobal.com',
    location: 'Remote - US Hours',
    type: 'Full-time',
    salary: '$3,000 - $5,000/mo',
    posted: '2 days ago',
    tags: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS'],
    logo: 'T',
    featured: true,
    category: 'Software Development',
    description: `We are looking for a Senior React Developer to join our growing engineering team. You will be responsible for building and maintaining high-quality web applications using React and modern JavaScript technologies.

As a senior member of the team, you will mentor junior developers, participate in code reviews, and help shape the technical direction of our products. You'll work closely with our product and design teams to deliver exceptional user experiences.

This is a fully remote position with flexible hours, though we prefer candidates who can overlap with US Eastern time for team meetings and collaboration.`,
    responsibilities: [
      'Build and maintain responsive web applications using React and TypeScript',
      'Write clean, maintainable, and well-tested code',
      'Collaborate with designers to implement pixel-perfect UI components',
      'Participate in code reviews and provide constructive feedback',
      'Mentor junior developers and share knowledge with the team',
      'Contribute to architectural decisions and technical planning',
      'Optimize applications for maximum performance',
    ],
    requirements: [
      '5+ years of professional experience with React',
      'Strong proficiency in TypeScript and modern JavaScript (ES6+)',
      'Experience with state management libraries (Redux, Zustand, or similar)',
      'Familiarity with RESTful APIs and GraphQL',
      'Understanding of web performance optimization techniques',
      'Excellent communication skills in English',
      'Self-motivated with ability to work independently',
    ],
    niceToHave: [
      'Experience with Next.js or other React frameworks',
      'Knowledge of AWS or other cloud platforms',
      'Experience with CI/CD pipelines',
      'Contributions to open-source projects',
    ],
    benefits: [
      'Competitive salary paid in USD',
      'Fully remote work environment',
      'Flexible working hours',
      'Health insurance allowance',
      'Annual learning budget for courses and conferences',
      'Paid time off and holidays',
      'Home office equipment allowance',
    ],
  },
  '2': {
    id: 2,
    title: 'Virtual Assistant',
    company: 'StartupXYZ',
    companyDescription: 'StartupXYZ is a fast-growing startup helping businesses automate their operations through innovative software solutions.',
    companySize: '10-50 employees',
    companyIndustry: 'SaaS',
    companyWebsite: 'startupxyz.com',
    location: 'Remote - Flexible',
    type: 'Full-time',
    salary: '$800 - $1,200/mo',
    posted: '1 day ago',
    tags: ['Admin', 'Communication', 'Google Suite', 'Scheduling', 'Research'],
    logo: 'S',
    featured: true,
    category: 'Virtual Assistant',
    description: `We're seeking a highly organized and proactive Virtual Assistant to support our executive team. You'll handle a variety of administrative tasks, from managing calendars to conducting research and coordinating projects.

The ideal candidate is detail-oriented, an excellent communicator, and comfortable working in a fast-paced startup environment. This role offers great opportunities for growth as the company expands.`,
    responsibilities: [
      'Manage executive calendars and schedule meetings',
      'Handle email correspondence and prioritize communications',
      'Conduct research and compile reports',
      'Coordinate travel arrangements and logistics',
      'Prepare presentations and documents',
      'Assist with project coordination and follow-ups',
      'Maintain organized digital filing systems',
    ],
    requirements: [
      '2+ years of experience as a Virtual Assistant or in administrative roles',
      'Excellent written and verbal English communication',
      'Proficiency in Google Suite (Docs, Sheets, Calendar, Meet)',
      'Strong organizational and time management skills',
      'Ability to handle multiple tasks and prioritize effectively',
      'Professional and proactive attitude',
      'Reliable internet connection and home office setup',
    ],
    niceToHave: [
      'Experience with project management tools (Asana, Trello, Monday)',
      'Basic bookkeeping or invoicing experience',
      'Social media management skills',
      'Experience working with international teams',
    ],
    benefits: [
      'Competitive monthly salary',
      'Flexible working hours',
      'Work from home',
      'Performance bonuses',
      'Opportunity for growth',
      'Friendly and supportive team',
    ],
  },
  '3': {
    id: 3,
    title: 'Customer Support Specialist',
    company: 'CloudServices Inc',
    companyDescription: 'CloudServices Inc provides cloud infrastructure solutions to businesses of all sizes, with a focus on reliability and customer satisfaction.',
    companySize: '200-500 employees',
    companyIndustry: 'Cloud Computing',
    companyWebsite: 'cloudservices.com',
    location: 'Remote - EU Hours',
    type: 'Contract',
    salary: '$1,000 - $1,500/mo',
    posted: '3 days ago',
    tags: ['Customer Service', 'Zendesk', 'English', 'Technical Support'],
    logo: 'C',
    featured: false,
    category: 'Customer Support',
    description: `Join our customer support team and help businesses succeed with our cloud platform. You'll be the first point of contact for customers, providing technical assistance and ensuring they have a great experience with our services.

This contract position requires working during EU business hours and offers potential for conversion to full-time based on performance.`,
    responsibilities: [
      'Respond to customer inquiries via email, chat, and phone',
      'Troubleshoot technical issues and provide solutions',
      'Document customer interactions and maintain records',
      'Escalate complex issues to appropriate teams',
      'Create and update knowledge base articles',
      'Gather customer feedback and share insights with the team',
    ],
    requirements: [
      '1+ years of customer support experience',
      'Excellent English communication skills',
      'Experience with ticketing systems (Zendesk preferred)',
      'Basic technical knowledge of cloud services',
      'Patient and empathetic approach to customer service',
      'Ability to work EU hours (9 AM - 6 PM CET)',
    ],
    niceToHave: [
      'Experience with SaaS or cloud platforms',
      'Knowledge of additional languages',
      'Previous remote work experience',
    ],
    benefits: [
      'Competitive contract rate',
      'Remote work',
      'Training and development',
      'Potential for full-time conversion',
      'Collaborative team environment',
    ],
  },
};

// Related jobs for suggestions
const relatedJobs = [
  { id: 4, title: 'UI/UX Designer', company: 'DesignStudio', salary: '$2,500 - $4,000/mo', type: 'Freelance' },
  { id: 5, title: 'Content Writer', company: 'MediaGroup', salary: '$500 - $800/mo', type: 'Part-time' },
  { id: 6, title: 'Full Stack Developer', company: 'InnovateTech', salary: '$4,000 - $6,000/mo', type: 'Full-time' },
];

export default function JobDetailPage() {
  const params = useParams();
  const jobId = params.id as string;
  const job = jobsData[jobId];
  const [isSaved, setIsSaved] = useState(false);

  if (!job) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Header />
        <div className="pt-32 pb-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <BriefcaseIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
            <p className="text-gray-600 mb-8">
              The job you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 rounded-full bg-[#0B2652] px-6 py-3 text-white font-medium hover:bg-[#1a3a6e] transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Back to Jobs
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      {/* Breadcrumb */}
      <div className="pt-24 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/jobs" className="text-gray-500 hover:text-[#0B2652] transition-colors">
              Jobs
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium truncate">{job.title}</span>
          </nav>
        </div>
      </div>

      {/* Job Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                    {job.logo}
                  </div>
                </div>

                {/* Job Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {job.title}
                    </h1>
                    {job.featured && (
                      <span className="px-3 py-1 text-xs font-medium bg-[#ED9F08]/10 text-[#ED9F08] rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{job.company}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <TagIcon className="h-4 w-4" />
                      {job.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPinIcon className="h-4 w-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BriefcaseIcon className="h-4 w-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CurrencyDollarIcon className="h-4 w-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ClockIcon className="h-4 w-4" />
                      Posted {job.posted}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-xl border transition-colors ${
                    isSaved
                      ? 'bg-red-50 border-red-200 text-red-500'
                      : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  {isSaved ? (
                    <HeartSolidIcon className="h-5 w-5" />
                  ) : (
                    <HeartIcon className="h-5 w-5" />
                  )}
                </button>
                <button className="p-3 rounded-xl bg-white border border-gray-200 text-gray-500 hover:border-gray-300 transition-colors">
                  <ShareIcon className="h-5 w-5" />
                </button>
                <a
                  href={`${APP_URL}/register?type=jobseeker`}
                  className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] text-white font-semibold shadow-lg shadow-[#0B2652]/25 hover:shadow-xl transition-all"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Job Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap gap-2"
              >
                {job.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 text-sm font-medium bg-white border border-gray-200 text-gray-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Role</h2>
                <div className="prose prose-gray max-w-none">
                  {job.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-600 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-[#0B2652] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>

                {job.niceToHave.length > 0 && (
                  <>
                    <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Nice to Have</h3>
                    <ul className="space-y-3">
                      {job.niceToHave.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircleIcon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-[#ED9F08] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Company Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-28"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">About the Company</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center text-white font-bold text-lg">
                    {job.logo}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{job.company}</p>
                    <p className="text-sm text-gray-500">{job.companyIndustry}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6">{job.companyDescription}</p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-gray-600">
                    <UserGroupIcon className="h-5 w-5 text-gray-400" />
                    <span>{job.companySize}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
                    <span>{job.companyIndustry}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <GlobeAltIcon className="h-5 w-5 text-gray-400" />
                    <a href={`https://${job.companyWebsite}`} target="_blank" rel="noopener noreferrer" className="text-[#0B2652] hover:underline">
                      {job.companyWebsite}
                    </a>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a
                    href={`${APP_URL}/register?type=jobseeker`}
                    className="block w-full py-3 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] text-white font-semibold text-center shadow-lg shadow-[#0B2652]/25 hover:shadow-xl transition-all"
                  >
                    Apply Now
                  </a>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Applications close in 14 days
                  </p>
                </div>
              </motion.div>

              {/* Related Jobs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Jobs</h3>
                <div className="space-y-4">
                  {relatedJobs.map((relatedJob) => (
                    <Link
                      key={relatedJob.id}
                      href={`/jobs/${relatedJob.id}`}
                      className="block p-4 rounded-xl border border-gray-100 hover:border-[#0B2652]/20 hover:shadow-md transition-all"
                    >
                      <h4 className="font-semibold text-gray-900 mb-1">{relatedJob.title}</h4>
                      <p className="text-sm text-gray-500 mb-2">{relatedJob.company}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{relatedJob.salary}</span>
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-xs">
                          {relatedJob.type}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Apply?
          </h2>
          <p className="text-gray-600 mb-8">
            Take the next step in your career. Apply now and join {job.company}.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`${APP_URL}/register?type=jobseeker`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#0B2652]/25 hover:shadow-2xl transition-all"
            >
              Apply for This Position
            </a>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-[#0B2652] font-medium hover:text-[#1a3a6e] transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              Browse More Jobs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
