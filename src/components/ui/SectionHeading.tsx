'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  description?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
  animate?: boolean;
}

export function SectionHeading({
  title,
  description,
  badge,
  align = 'center',
  className,
  animate = true,
}: SectionHeadingProps) {
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className
      )}
    >
      {badge && (
        <span className="inline-block rounded-full bg-[#ED9F08]/10 px-4 py-1.5 text-sm font-medium text-[#ED9F08] mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-lg text-gray-600',
            align === 'center' && 'max-w-2xl mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </Wrapper>
  );
}
