'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeroProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: 'pt-28 pb-12',
  md: 'pt-32 pb-16',
  lg: 'pt-36 pb-20',
};

export function PageHero({
  title,
  description,
  children,
  className,
  size = 'md',
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'bg-gradient-to-br from-[#0B2652] to-[#1a3a6e]',
        sizes[size],
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-white/70 mb-8">{description}</p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
