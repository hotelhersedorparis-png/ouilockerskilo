'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Newspaper, Mail, Phone, Download, ExternalLink } from 'lucide-react';

export default function PressPage() {
  const { t } = useLanguage();

  const pressReleases = [
    {
      date: t.press.releases.expansion.date,
      title: t.press.releases.expansion.title,
      excerpt: t.press.releases.expansion.excerpt,
      link: '#',
    },
    {
      date: t.press.releases.partnership.date,
      title: t.press.releases.partnership.title,
      excerpt: t.press.releases.partnership.excerpt,
      link: '#',
    },
    {
      date: t.press.releases.award.date,
      title: t.press.releases.award.title,
      excerpt: t.press.releases.award.excerpt,
      link: '#',
    },
  ];

  const mediaCoverage = [
    {
      outlet: 'Le Figaro',
      date: t.press.coverage.figaro.date,
      title: t.press.coverage.figaro.title,
      link: '#',
    },
    {
      outlet: 'Les Échos',
      date: t.press.coverage.echos.date,
      title: t.press.coverage.echos.title,
      link: '#',
    },
    {
      outlet: 'Paris Match',
      date: t.press.coverage.match.date,
      title: t.press.coverage.match.title,
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 to-pink-700 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.press.title}
            </h1>
            <p className="text-xl text-rose-100 max-w-2xl mx-auto">
              {t.press.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Kit */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              {t.press.pressKit}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t.press.pressKitDescription}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-6 text-center"
            >
              <Download className="w-8 h-8 text-rose-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">{t.press.brandAssets}</h3>
              <p className="text-sm text-slate-600 mb-4">{t.press.brandAssetsDesc}</p>
              <button className="text-rose-600 font-medium hover:text-rose-700">
                {t.press.download}
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-xl p-6 text-center"
            >
              <Newspaper className="w-8 h-8 text-rose-600 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">{t.press.factSheet}</h3>
              <p className="text-sm text-slate-600 mb-4">{t.press.factSheetDesc}</p>
              <button className="text-rose-600 font-medium hover:text-rose-700">
                {t.press.download}
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-50 rounded-xl p-6 text-center"
            >
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=200&q=80"
                alt="Oui Lockers"
                className="w-full h-24 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-slate-900 mb-2">{t.press.highResPhotos}</h3>
              <button className="text-rose-600 font-medium hover:text-rose-700">
                {t.press.download}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              {t.press.releasesTitle}
            </h2>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {pressReleases.map((release, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-sm text-rose-600 font-medium mb-2">{release.date}</p>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">
                  {release.title}
                </h3>
                <p className="text-slate-600 mb-4">{release.excerpt}</p>
                <a
                  href={release.link}
                  className="inline-flex items-center gap-2 text-rose-600 font-medium hover:text-rose-700"
                >
                  {t.press.readMore}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
              {t.press.coverageTitle}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {mediaCoverage.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <p className="text-sm text-slate-500 mb-2">{item.outlet} • {item.date}</p>
                <h3 className="font-heading font-semibold text-slate-900">
                  {item.title}
                </h3>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-rose-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t.press.contactTitle}
            </h2>
            <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
              {t.press.contactDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:press@ouilockers.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-rose-600 font-semibold rounded-xl hover:bg-rose-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                press@ouilockers.com
              </a>
              <a
                href="tel:+33185737247"
                className="inline-flex items-center gap-2 px-6 py-3 bg-rose-700 text-white font-semibold rounded-xl hover:bg-rose-800 transition-colors"
              >
                <Phone className="w-5 h-5" />
                +33 1 85 73 72 47
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
