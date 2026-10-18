'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  animate?: boolean;
}

export function Accordion({ items, className, animate = true }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item, index) => {
        const Wrapper = animate ? motion.div : 'div';
        const wrapperProps = animate
          ? {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: index * 0.05 },
            }
          : {};

        return (
          <Wrapper
            key={index}
            {...wrapperProps}
            className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
          >
            <button
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <ChevronDownIcon
                className={cn(
                  'h-5 w-5 text-gray-500 transition-transform',
                  expandedIndex === index && 'rotate-180'
                )}
              />
            </button>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-5"
                >
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Wrapper>
        );
      })}
    </div>
  );
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  items: AccordionItem[];
  className?: string;
}

export function FAQSection({
  title = 'Frequently Asked Questions',
  description,
  items,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn('py-16', className)}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {description && <p className="text-gray-600">{description}</p>}
        </motion.div>
        <Accordion items={items} />
      </div>
    </section>
  );
}
