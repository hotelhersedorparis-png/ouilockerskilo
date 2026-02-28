'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, Star, Users, Lock } from 'lucide-react';

export default function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    { icon: Lock, value: '50,000+', label: t.about.lockersStored },
    { icon: Users, value: '25,000+', label: t.about.happyCustomers },
    { icon: Star, value: '4.9/5', label: t.about.rating },
    { icon: MapPin, value: '5', label: t.about.locations },
  ];

  const values = [
    {
      icon: Shield,
      title: t.about.values.security.title,
      description: t.about.values.security.description,
    },
    {
      icon: Clock,
      title: t.about.values.convenience.title,
      description: t.about.values.convenience.description,
    },
    {
      icon: MapPin,
      title: t.about.values.location.title,
      description: t.about.values.location.description,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-teal-700 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.about.title}
            </h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
                {t.about.story.title}
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>{t.about.story.paragraph1}</p>
                <p>{t.about.story.paragraph2}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                  alt="Oui Lockers Paris"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <p className="text-4xl font-bold text-emerald-600">2020</p>
                <p className="text-slate-600">{t.about.founded}</p>
              </div>
            </motion.div>
          </div>
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
              {t.about.ourValues}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.about.valuesSubtitle}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t.about.cta.title}
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              {t.about.cta.subtitle}
            </p>
            <a
              href="/#locations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
            >
              {t.about.cta.button}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
