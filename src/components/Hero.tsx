'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

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

        {/* Enhanced Mockup with Natural Scroll Simulation */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="mt-16"
        >
          <div className="relative mx-auto w-80 h-96">
            {/* Phone frame */}
            <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Mockup content */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full z-10"></div>

                {/* App mockup with natural scroll simulation */}
                <div className="pt-12 px-4 relative overflow-hidden">
                  {/* Subtle shimmer effect - toned down */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{
                      x: [-100, 100],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />

                  {/* Task list with natural bounce animation */}
                  <motion.div
                    className="space-y-3"
                    animate={{
                      y: [0, -15, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="h-3 bg-blue-200 rounded-full w-3/4"></div>
                    <div className="h-3 bg-purple-200 rounded-full w-1/2"></div>
                    <div className="h-3 bg-green-200 rounded-full w-2/3"></div>
                    <div className="h-3 bg-yellow-200 rounded-full w-1/3"></div>
                    <div className="h-3 bg-blue-200 rounded-full w-4/5"></div>
                    <div className="h-3 bg-purple-200 rounded-full w-3/5"></div>
                    <div className="h-3 bg-green-200 rounded-full w-2/5"></div>
                    <div className="h-3 bg-yellow-200 rounded-full w-1/2"></div>
                  </motion.div>

                  {/* Task cards with subtle hover effects */}
                  <div className="mt-6 space-y-2">
                    <motion.div
                      className="h-8 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg border border-blue-200/50"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="h-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border border-green-200/50"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 0.5,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg border border-purple-200/50"
                      animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: 1,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>

                  {/* Subtle scroll indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-2 h-8 bg-gray-300 rounded-full opacity-60"
                    animate={{
                      scaleY: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
