'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Trash2 } from 'lucide-react';

export default function CookiesPage() {
  const { t } = useLanguage();

  const cookieTypes = [
    {
      icon: Shield,
      title: t.cookies.essential.title,
      description: t.cookies.essential.description,
      examples: t.cookies.essential.examples,
    },
    {
      icon: Settings,
      title: t.cookies.functional.title,
      description: t.cookies.functional.description,
      examples: t.cookies.functional.examples,
    },
    {
      icon: Cookie,
      title: t.cookies.analytics.title,
      description: t.cookies.analytics.description,
      examples: t.cookies.analytics.examples,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-500 to-orange-600 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.cookies.title}
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              {t.cookies.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg text-slate-600">
              {t.cookies.intro}
            </p>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-slate-50 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <type.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                      {type.title}
                    </h2>
                    <p className="text-slate-600 mb-3">{type.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {type.examples.map((example, eIndex) => (
                        <span
                          key={eIndex}
                          className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-600"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-amber-50 rounded-2xl border border-amber-200"
          >
            <h2 className="text-xl font-heading font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-amber-600" />
              {t.cookies.manageTitle}
            </h2>
            <p className="text-slate-600 mb-4">{t.cookies.manageDescription}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {t.cookies.browserSettings}
              </a>
              <button
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-medium hover:bg-amber-700"
              >
                <Settings className="w-4 h-4" />
                {t.cookies.cookieSettings}
              </button>
            </div>
          </motion.div>

          {/* Third Party */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h2 className="text-xl font-heading font-semibold text-slate-900 mb-4">
              {t.cookies.thirdPartyTitle}
            </h2>
            <p className="text-slate-600">
              {t.cookies.thirdPartyDescription}
            </p>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h2 className="text-xl font-heading font-semibold text-slate-900 mb-4">
              {t.cookies.updatesTitle}
            </h2>
            <p className="text-slate-600">
              {t.cookies.updatesDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
