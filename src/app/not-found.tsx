'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, MagnifyingGlassIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <section className="flex-1 flex items-center justify-center py-20">
        <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Illustration */}
            <div className="mb-8">
              <span className="text-[150px] sm:text-[200px] font-bold text-gradient leading-none">
                404
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] border-2 border-[#0B2652] px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                <HomeIcon className="h-5 w-5" />
                Back to Home
              </Link>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-gray-200 px-6 py-3 text-base font-semibold text-gray-700 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                Browse Jobs
              </Link>
            </div>

            {/* Go Back Link */}
            <div className="mt-8">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-[#0B2652] font-medium hover:underline"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                Go back to previous page
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
