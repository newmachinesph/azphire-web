'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://azphire.com';

const navigation = [
  { name: 'Find Jobs', href: '/jobs' },
  { name: 'For Jobseekers', href: '/#how-it-works' },
  { name: 'For Employers', href: '/employers' },
];

interface HeaderProps {
  variant?: 'default' | 'dark';
}

export function Header({ variant = 'default' }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When variant is 'dark', use white text when not scrolled
  const isDark = variant === 'dark' && !isScrolled;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-[#0B2652]/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B2652] to-[#1a3a6e] flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-[#ED9F08] to-[#B81D23] border-2 border-white" />
              </div>
              <span className={`hidden sm:block text-xl font-bold transition-colors ${isDark ? 'text-white' : 'text-[#0B2652]'}`}>
                Azphire
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-8">
            {navigation.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`text-sm font-medium transition-colors relative group ${
                  isDark ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-[#0B2652]'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ED9F08] to-[#B81D23] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex md:items-center md:gap-x-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={`${APP_URL}/login`}
                className={`text-sm font-medium transition-colors px-4 py-2 ${
                  isDark ? 'text-white/90 hover:text-white' : 'text-[#0B2652] hover:text-[#1a3a6e]'
                }`}
              >
                Sign In
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <a
                href={`${APP_URL}/register`}
                className="rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0B2652]/25 hover:shadow-xl hover:shadow-[#0B2652]/30 transition-all duration-300"
              >
                Get Started Free
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-base font-medium text-gray-700 hover:text-[#0B2652] transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <a
                  href={`${APP_URL}/login`}
                  className="block text-center text-base font-medium text-[#0B2652] hover:text-[#1a3a6e] transition-colors py-2"
                >
                  Sign In
                </a>
                <a
                  href={`${APP_URL}/register`}
                  className="block text-center rounded-full bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] px-6 py-3 text-base font-semibold text-white shadow-lg"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
