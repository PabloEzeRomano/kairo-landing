'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function Footer() {
  const { t, currentLanguage, changeLanguage, error } = useLanguage();
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  const handleLanguageChange = async (lang: string) => {
    if (lang === currentLanguage || isChangingLanguage) return;

    setIsChangingLanguage(true);
    try {
      await changeLanguage(lang);
    } catch (err) {
      console.error('Language change failed:', err);
    } finally {
      setIsChangingLanguage(false);
    }
  };

  return (
    <footer className="bg-gray-900/70 text-white py-16 px-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-3xl font-bold mb-4 font-oswald">Kairo</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('landing.footer.brandDescription')}
            </p>
            {/* <div className="flex space-x-4">
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">📱</span>
              </motion.div>
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">💻</span>
              </motion.div>
              <motion.div
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="text-xl">⌚</span>
              </motion.div>
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">
              {t('landing.footer.links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('landing.footer.home')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('landing.footer.features')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('landing.footer.pricing')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('landing.footer.blog')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">
              {t('landing.footer.legal')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('landing.footer.terms')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('landing.footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('landing.footer.contact')}
                </a>
              </li>
            </ul>
          </motion.div> */}
        </div>

        {/* Language Selector and Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <span className="text-gray-400">
                {t('landing.footer.language')}:
              </span>
              <div className="relative">
                <select
                  value={currentLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                  disabled={isChangingLanguage}
                  className={`bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:outline-none focus:border-kairo-blue-500 transition-colors ${
                    isChangingLanguage
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:border-gray-600'
                  }`}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>

                {/* Loading indicator */}
                {isChangingLanguage && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg">
                    <motion.div
                      className="w-4 h-4 border-2 border-kairo-blue-500 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Error message */}
              {error && <span className="text-red-400 text-sm">{error}</span>}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center text-gray-400"
            >
              <p>
                © {new Date().getFullYear()} gemm-apps.{' '}
                {t('landing.footer.copyright')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
