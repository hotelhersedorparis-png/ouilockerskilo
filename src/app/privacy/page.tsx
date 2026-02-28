'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPage() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t.privacy.section1.title,
      content: t.privacy.section1.content,
    },
    {
      title: t.privacy.section2.title,
      content: t.privacy.section2.content,
    },
    {
      title: t.privacy.section3.title,
      content: t.privacy.section3.content,
    },
    {
      title: t.privacy.section4.title,
      content: t.privacy.section4.content,
    },
    {
      title: t.privacy.section5.title,
      content: t.privacy.section5.content,
    },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'ouilockers@hotel-herse-dor.com' },
    { icon: Phone, label: t.privacy.phone, value: '+33 1 85 73 72 47' },
    { icon: MapPin, label: t.privacy.address, value: '20 Rue Saint-Antoine, 75004 Paris, France' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-indigo-800 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.privacy.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t.privacy.subtitle}
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
                <h2 className="text-2xl font-heading font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Eye className="w-6 h-6 text-blue-600" />
                  {section.title}
                </h2>
                <div className="text-slate-600 space-y-2 ml-9">
                  <p>{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-blue-50 rounded-2xl"
          >
            <h2 className="text-2xl font-heading font-bold text-slate-900 mb-6">
              {t.privacy.contactTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-slate-900">{item.label}</p>
                    <p className="text-slate-600 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
