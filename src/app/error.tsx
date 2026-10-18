'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon, ArrowPathIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="mx-auto max-w-2xl px-6 lg:px-8 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Error Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
              <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] border-2 border-[#0B2652] px-6 py-3 text-base font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowPathIcon className="h-5 w-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white border-2 border-gray-200 px-6 py-3 text-base font-semibold text-gray-700 hover:border-gray-300 hover:shadow-lg transition-all"
            >
              <HomeIcon className="h-5 w-5" />
              Back to Home
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-12 p-6 bg-gray-100 rounded-2xl">
            <p className="text-gray-600 text-sm mb-2">
              If the problem persists, please contact our support team.
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
    </main>
  );
}
