'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  ClockIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const contactOptions = [
  {
    icon: EnvelopeIcon,
    title: 'Email Us',
    description: 'Send us an email and we\'ll get back to you within 24 hours.',
    action: 'hello@remotetalent.ph',
    actionType: 'email',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Facebook Messenger',
    description: 'Message us on Facebook for quick support.',
    action: 'Message Us',
    actionType: 'facebook',
  },
  {
    icon: QuestionMarkCircleIcon,
    title: 'Help Center',
    description: 'Browse our FAQ and help articles for quick answers.',
    action: 'Visit Help Center',
    actionType: 'link',
  },
];

const faqs = [
  {
    question: 'How do I create an account?',
    answer: 'Click the "Get Started" button on our homepage, choose whether you\'re a job seeker or employer, and fill out the registration form. It only takes a few minutes!',
  },
  {
    question: 'Is RemoteTalent free for job seekers?',
    answer: 'Yes! Creating an account, building your profile, and applying to jobs is completely free for job seekers. We never charge candidates any fees.',
  },
  {
    question: 'How do employers post jobs?',
    answer: 'Employers can sign up for an account, complete their profile, and start posting jobs. We offer various pricing plans to suit different hiring needs.',
  },
  {
    question: 'What types of jobs are available?',
    answer: 'We focus on remote jobs across various categories including software development, virtual assistance, customer support, design, marketing, and more.',
  },
  {
    question: 'How do I get my profile verified?',
    answer: 'After completing your profile, you can request verification. Our team will review your information and credentials to add a verified badge to your profile.',
  },
  {
    question: 'Can I work for international companies?',
    answer: 'Most of the jobs on our platform are with international companies looking for Filipino talent. You can work remotely from anywhere in the Philippines.',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/70">
              Have questions or need help? We&apos;re here for you. Reach out and
              we&apos;ll respond as soon as we can.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-20">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center mx-auto mb-4">
                  <option.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                {option.actionType === 'email' ? (
                  <a
                    href={`mailto:${option.action}`}
                    className="text-[#0B2652] font-medium hover:underline"
                  >
                    {option.action}
                  </a>
                ) : option.actionType === 'facebook' ? (
                  <a
                    href="https://m.me/remotetalentph"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0B2652] font-medium hover:underline"
                  >
                    {option.action}
                  </a>
                ) : (
                  <Link href="/help" className="text-[#0B2652] font-medium hover:underline">
                    {option.action}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent"
                      placeholder="Juan Dela Cruz"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent"
                      placeholder="juan@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0B2652] focus:border-transparent resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] text-white font-semibold shadow-lg shadow-[#0B2652]/25 hover:shadow-xl transition-all"
                  >
                    Send Message
                  </button>

                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <ClockIcon className="h-4 w-4" />
                    We typically respond within 24 hours
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ve received your message and will
                    get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-[#0B2652] font-medium hover:underline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-4 text-left"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      <svg
                        className={`h-5 w-5 text-gray-500 transition-transform ${
                          expandedFaq === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 pb-4"
                      >
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gray-100 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
                </p>
                <a
                  href="mailto:hello@remotetalent.ph"
                  className="text-[#0B2652] font-medium hover:underline"
                >
                  hello@remotetalent.ph
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
