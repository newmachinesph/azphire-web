'use client';

import Link from 'next/link';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const variants = {
  primary:
    'bg-gradient-to-r from-[#0B2652] to-[#1a3a6e] border-2 border-[#0B2652] text-white shadow-lg shadow-[#0B2652]/25 hover:shadow-xl hover:shadow-[#0B2652]/30',
  secondary:
    'bg-white border-2 border-[#0B2652] text-[#0B2652] hover:bg-gray-50',
  outline:
    'bg-transparent border-2 border-white/30 text-white hover:bg-white/10',
  ghost:
    'bg-transparent text-gray-700 hover:bg-gray-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300',
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      // Use anchor tag for external URLs, Link for internal
      const isExternal = href.startsWith('http') || href.startsWith('//');
      if (isExternal) {
        return (
          <a href={href} className={classes}>
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
