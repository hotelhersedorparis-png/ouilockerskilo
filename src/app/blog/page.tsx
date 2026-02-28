'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Tag } from 'lucide-react';

export default function BlogPage() {
  const { t } = useLanguage();

  const blogPosts = [
    {
      slug: 'luggage-storage-paris-guide',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
      category: t.blog.categories.tips,
      title: t.blog.posts.guide.title,
      excerpt: t.blog.posts.guide.excerpt,
      date: t.blog.posts.guide.date,
      readTime: t.blog.posts.guide.readTime,
    },
    {
      slug: 'best-luggage-storage-marais',
      image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&q=80',
      category: t.blog.categories.locations,
      title: t.blog.posts.marais.title,
      excerpt: t.blog.posts.marais.excerpt,
      date: t.blog.posts.marais.date,
      readTime: t.blog.posts.marais.readTime,
    },
    {
      slug: 'luggage-storage-tips-travel',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
      category: t.blog.categories.travel,
      title: t.blog.posts.tips.title,
      excerpt: t.blog.posts.tips.excerpt,
      date: t.blog.posts.tips.date,
      readTime: t.blog.posts.tips.readTime,
    },
  ];

  const categories = [
    t.blog.categories.all,
    t.blog.categories.tips,
    t.blog.categories.locations,
    t.blog.categories.travel,
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-cyan-700 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.blog.title}
            </h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto">
              {t.blog.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-teal-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-teal-600">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700"
                  >
                    {t.blog.readMore}
                    <span className="text-lg">→</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 lg:py-24 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t.blog.newsletter.title}
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              {t.blog.newsletter.subtitle}
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder={t.blog.newsletter.placeholder}
                className="flex-1 px-5 py-3 rounded-xl text-slate-900"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-teal-600 font-semibold rounded-xl hover:bg-teal-50 transition-colors"
              >
                {t.blog.newsletter.button}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
