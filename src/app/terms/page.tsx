'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t.terms.section1.title,
      content: t.terms.section1.content,
    },
    {
      title: t.terms.section2.title,
      content: t.terms.section2.content,
    },
    {
      title: t.terms.section3.title,
      content: t.terms.section3.content,
    },
    {
      title: t.terms.section4.title,
      content: t.terms.section4.content,
    },
    {
      title: t.terms.section5.title,
      content: t.terms.section5.content,
    },
    {
      title: t.terms.section6.title,
      content: t.terms.section6.content,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-700 to-slate-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.terms.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              {t.terms.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4">
                  {section.title}
                </h2>
                <div className="text-slate-600 space-y-2">
                  <p>{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
