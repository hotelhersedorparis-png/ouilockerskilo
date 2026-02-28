'use client';

import { Mail, Instagram, Linkedin, Facebook, Twitter, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    // TODO: Replace '#' with actual Instagram profile URL when available
    { icon: Instagram, href: '#', label: 'Instagram' },
    // TODO: Replace '#' with actual Facebook profile URL when available
    { icon: Facebook, href: '#', label: 'Facebook' },
    // TODO: Replace '#' with actual Twitter/X profile URL when available
    { icon: Twitter, href: '#', label: 'Twitter' },
    // TODO: Replace '#' with actual LinkedIn profile URL when available
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: t.footer.about, href: '/about' },
    { label: t.footer.careers, href: '/careers' },
    { label: t.footer.blog, href: '/blog' },
    { label: t.footer.press, href: '/press' },
  ];

  const supportLinks = [
    { label: t.footer.helpCenter, href: '/help' },
    { label: t.footer.terms, href: '/terms' },
    { label: t.footer.privacy, href: '/privacy' },
    { label: t.footer.cookies, href: '/cookies' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-4">
              {t.footer.brand}
            </h3>
            <p className="text-slate-600 mb-6">{t.footer.tagline}</p>

            {/* Contact */}
            <div className="space-y-3">
              <a
                href={`mailto:${t.footer.contact}`}
                className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">ouilockers@hotel-herse-dor.com</span>
              </a>
              <a
                href="tel:+33185737247"
                className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+33 1 85 73 72 47</span>
              </a>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span className="text-sm">20 Rue Saint-Antoine, 75004 Paris</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold text-slate-900 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.href === '#' ? (
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-emerald-600 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-600 hover:text-emerald-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold text-slate-900 mb-4">
              {t.footer.support}
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-heading font-semibold text-slate-900 mb-4">
              {t.footer.followUs}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Rating Badge */}
            <div className="mt-6 flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-50 border border-emerald-200">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="font-bold text-emerald-700">4.9/5</p>
                <p className="text-xs text-slate-500">{t.footer.basedOnReviews}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 border-t border-slate-200"
        >
          <p className="text-center text-sm text-slate-600">
            {t.footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
