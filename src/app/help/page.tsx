'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  UserIcon,
  BriefcaseIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  PageHero,
  SectionHeading,
  Card,
  CardIcon,
  CardTitle,
  CardDescription,
  Accordion,
  Button,
} from '@/components/ui';

const categories = [
  {
    id: 'getting-started',
    name: 'Getting Started',
    icon: UserIcon,
    description: 'New to RemoteTalent? Start here.',
    articles: [
      { title: 'How to create an account', slug: 'create-account' },
      { title: 'Setting up your profile', slug: 'setup-profile' },
      { title: 'How to apply for jobs', slug: 'apply-jobs' },
      { title: 'Understanding job listings', slug: 'job-listings' },
    ],
  },
  {
    id: 'job-seekers',
    name: 'For Job Seekers',
    icon: BriefcaseIcon,
    description: 'Find answers about job searching and applications.',
    articles: [
      { title: 'How to get your profile verified', slug: 'profile-verification' },
      { title: 'Tips for standing out to employers', slug: 'stand-out' },
      { title: 'Managing your job applications', slug: 'manage-applications' },
      { title: 'Communication with employers', slug: 'employer-communication' },
    ],
  },
  {
    id: 'employers',
    name: 'For Employers',
    icon: BriefcaseIcon,
    description: 'Learn how to post jobs and find talent.',
    articles: [
      { title: 'How to post a job', slug: 'post-job' },
      { title: 'Managing job listings', slug: 'manage-listings' },
      { title: 'Reviewing candidate applications', slug: 'review-applications' },
      { title: 'Communicating with candidates', slug: 'candidate-communication' },
    ],
  },
  {
    id: 'billing',
    name: 'Billing & Payments',
    icon: CreditCardIcon,
    description: 'Questions about pricing, plans, and payments.',
    articles: [
      { title: 'Understanding our pricing plans', slug: 'pricing-plans' },
      { title: 'How to upgrade your plan', slug: 'upgrade-plan' },
      { title: 'Payment methods accepted', slug: 'payment-methods' },
      { title: 'Refund policy', slug: 'refund-policy' },
    ],
  },
  {
    id: 'account',
    name: 'Account & Security',
    icon: ShieldCheckIcon,
    description: 'Manage your account settings and security.',
    articles: [
      { title: 'Changing your password', slug: 'change-password' },
      { title: 'Updating account information', slug: 'update-account' },
      { title: 'Deleting your account', slug: 'delete-account' },
      { title: 'Two-factor authentication', slug: 'two-factor-auth' },
    ],
  },
];

const popularQuestions = [
  {
    question: 'How do I create an account?',
    answer: 'Click the "Get Started" button on our homepage, choose whether you\'re a job seeker or employer, and fill out the registration form. It only takes a few minutes!',
  },
  {
    question: 'Is RemoteTalent free for job seekers?',
    answer: 'Yes! Creating an account, building your profile, and applying to jobs is completely free for job seekers. We never charge candidates any fees.',
  },
  {
    question: 'How do I get my profile verified?',
    answer: 'After completing your profile, you can request verification from your profile settings. Our team will review your information and credentials to add a verified badge.',
  },
  {
    question: 'How do employers post jobs?',
    answer: 'Employers can sign up for an account, complete their profile, and start posting jobs. We offer various pricing plans to suit different hiring needs.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.',
  },
  {
    question: 'How do I contact support?',
    answer: 'You can reach our support team at hello@remotetalent.ph or through Facebook Messenger. We typically respond within 24 hours.',
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="dark" />

      {/* Hero Section */}
      <PageHero
        title="How Can We Help?"
        description="Search our help center or browse categories below."
      >
        <div className="relative max-w-xl mx-auto">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ED9F08] focus:border-transparent"
          />
        </div>
      </PageHero>

      {/* Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={category.id} delay={index * 0.1}>
                <CardIcon icon={category.icon} />
                <CardTitle>{category.name}</CardTitle>
                <CardDescription className="mb-4">{category.description}</CardDescription>
                <ul className="space-y-2">
                  {category.articles.map((article) => (
                    <li key={article.slug} className="text-gray-600 text-sm">
                      {article.title}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeading
            title="Popular Questions"
            description="Quick answers to common questions."
          />
          <Accordion items={popularQuestions} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] rounded-3xl p-8 lg:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
              <QuestionMarkCircleIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Still Need Help?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="mailto:hello@remotetalent.ph"
                variant="secondary"
                className="bg-white border-white text-[#0B2652]"
              >
                Email Support
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
