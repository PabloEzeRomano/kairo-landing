'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import PhoneInfiniteScroll from './PhoneInfiniteScroll';

export default function Hero() {
  const { t } = useLanguage();
  const { accentGradient, titleColor, descriptionColor, getBoxShadowRGBA } =
    useTheme();

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className={`text-6xl md:text-8xl font-bold mb-6 font-oswald tracking-tight ${titleColor}`}
          >
            {t('landing.hero.title')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p
            className={`text-xl md:text-2xl ${descriptionColor} mb-12 font-sans font-light`}
          >
            {t('landing.hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className={`bg-gradient-to-r ${accentGradient} text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                `0 10px 25px ${getBoxShadowRGBA(0.3)}`,
                `0 15px 35px ${getBoxShadowRGBA(0.4)}`,
                `0 10px 25px ${getBoxShadowRGBA(0.3)}`,
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {t('landing.hero.cta')}
          </motion.button>
        </motion.div>
        <PhoneInfiniteScroll />
      </div>
    </section>
  );
}
