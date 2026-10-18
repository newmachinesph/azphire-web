'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'bordered' | 'elevated' | 'gradient';
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

const variants = {
  default: 'bg-white',
  bordered: 'bg-white border border-gray-100',
  elevated: 'bg-white shadow-lg',
  gradient: 'bg-gradient-to-br from-white to-gray-50 border border-gray-100',
};

export function Card({
  children,
  className,
  variant = 'bordered',
  hover = true,
  animate = true,
  delay = 0,
}: CardProps) {
  const classes = cn(
    'rounded-2xl p-6',
    variants[variant],
    hover && 'transition-shadow hover:shadow-lg',
    className
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={classes}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes}>
      {children}
    </div>
  );
}

Card.displayName = 'Card';

interface CardIconProps {
  icon: React.ElementType;
  className?: string;
}

export function CardIcon({ icon: Icon, className }: CardIconProps) {
  return (
    <div
      className={cn(
        'w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B2652]/10 to-[#1a3a6e]/10 flex items-center justify-center mb-4',
        className
      )}
    >
      <Icon className="h-6 w-6 text-[#0B2652]" />
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-lg font-bold text-gray-900 mb-2', className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-gray-600', className)}>
      {children}
    </p>
  );
}
