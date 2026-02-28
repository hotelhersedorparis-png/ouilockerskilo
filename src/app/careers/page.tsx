'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, DollarSign, Users, Heart } from 'lucide-react';

export default function CareersPage() {
  const { t } = useLanguage();

  const benefits = [
    { icon: Heart, title: t.careers.benefits.health.title, description: t.careers.benefits.health.description },
    { icon: Clock, title: t.careers.benefits.flexibility.title, description: t.careers.benefits.flexibility.description },
    { icon: Users, title: t.careers.benefits.growth.title, description: t.careers.benefits.growth.description },
  ];

  const openPositions = [
    {
      title: t.careers.positions.customerService.title,
      department: t.careers.positions.customerService.department,
      location: t.careers.positions.customerService.location,
      type: t.careers.positions.customerService.type,
    },
    {
      title: t.careers.positions.operationsManager.title,
      department: t.careers.positions.operationsManager.department,
      location: t.careers.positions.operationsManager.location,
      type: t.careers.positions.operationsManager.type,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-600 to-purple-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.careers.title}
            </h1>
            <p className="text-xl text-violet-100 max-w-2xl mx-auto">
              {t.careers.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              {t.careers.whyJoin}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.careers.whyJoinSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              {t.careers.openPositions}
            </h2>
            <p className="text-lg text-slate-600">
              {t.careers.positionsSubtitle}
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 py-2 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    {t.careers.apply}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {openPositions.length === 0 && (
            <p className="text-center text-slate-600">{t.careers.noPositions}</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t.careers.cta.title}
            </h2>
            <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
              {t.careers.cta.subtitle}
            </p>
            <a
              href="mailto:careers@ouilockers.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl hover:bg-violet-50 transition-colors"
            >
              {t.careers.cta.button}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
