'use client';

import { Phone, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1,
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2,
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3,
    },
    {
      question: t.faq.q4,
      answer: t.faq.a4,
    },
    {
      question: t.faq.q5,
      answer: t.faq.a5,
    },
  ];

  // JSON-LD FAQ schema (always use English for SEO)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I receive my access code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You will receive a 6-digit PIN code via SMS and email immediately after your booking is confirmed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I extend my rental time?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can extend your rental through the link in your confirmation email or by visiting our booking engine again, as long as the locker is available.',
        },
      },
      {
        '@type': 'Question',
        name: 'What items are prohibited?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For safety reasons, flammable materials, illegal substances, and perishable food items are not allowed in the lockers.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I lose my code?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Contact our support team at help@ouilockers.com with your booking ID. We can verify your identity and resend your code.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a size limit for items?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Please check the dimensions on our Sizes page. If your item doesn't fit, the locker door will not close, and the system will alert you to choose a larger size.",
        },
      },
    ],
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-white">
      {/* JSON-LD FAQ Schema for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-3">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-600 font-semibold mb-2">
            Have questions?
          </p>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Here are the most frequently asked questions. For more information, visit our full help center.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-slate-200 rounded-xl px-6 hover:border-emerald-300 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Need Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-6 h-6 text-emerald-600" />
              <h3 className="text-xl font-heading font-semibold text-slate-900">
                Need help?
              </h3>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-600 mb-6">
              <Phone className="w-5 h-5 text-emerald-600" />
              <p className="text-lg font-semibold">+33 1 85 73 72 47</p>
            </div>
            <Button
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 font-semibold"
              onClick={() => window.open('/help', '_blank')}
            >
              View all questions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
