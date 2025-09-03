'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';


const featureAccess = {
  taskCreation: { free: true, premium: true },
  dailyPlan: { free: true, premium: true },
  timeBlocks: { free: true, premium: true },
  focusMode: { free: true, premium: true },
  notifications: { free: true, premium: true },
  iaSuggestion: { free: true, premium: true },
  fullIaPlanning: { free: false, premium: true },
  rescheduleAi: { free: false, premium: true },
  weeklyView: { free: false, premium: true },
  cloudSync: { free: false, premium: true },
  insights: { free: false, premium: true },
  moreTasks: { free: false, premium: true },
  advancedReminders: { free: false, premium: true },
};

export default function PricingPlans() {
  const { t } = useLanguage();
  const { accentGradient, titleColor, descriptionColor } = useTheme();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${titleColor} mb-6 font-oswald`}>
            {t('landing.plans.title')}
          </h2>
          <p className={`text-xl ${descriptionColor} max-w-3xl mx-auto font-sans`}>
            {t('landing.plans.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-gray-200"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
                {t('landing.plans.free')}
              </h3>
              <div className="text-6xl font-bold text-gray-700 mb-2">
                {t('landing.plans.freePrice')}
              </div>
              <p className="text-gray-600 font-sans">{t('landing.plans.freePeriod')}</p>
            </div>

            <div className="space-y-4">
              {Object.keys(featureAccess).map((featureKey, index) => (
                <motion.div
                  key={featureKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-gray-200"
                >
                  <span className="text-sm text-gray-700 font-sans">
                    {t(`landing.features.${featureKey}`)}
                  </span>
                  <span className="text-2xl">
                    {featureAccess[featureKey as keyof typeof featureAccess]
                      ?.free
                      ? '✔️'
                      : '✖️'}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl p-8 border-2 border-blue-300 relative overflow-hidden"
            style={{
              '--tw-gradient-from': '#eff6ff',
              '--tw-gradient-to': '#f3e8ff',
            } as React.CSSProperties}
          >
            {/* Premium badge */}
            <div className={`absolute top-0 right-0 bg-gradient-to-r ${accentGradient} text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm`}>
              {t('landing.plans.recommended')}
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 font-sans">
                {t('landing.plans.premium')}
              </h3>
              <div className="text-6xl font-bold text-blue-600 mb-2">
                {t('landing.plans.premiumPrice')}
              </div>
              <p className="text-gray-600 font-sans">
                {t('landing.plans.premiumPeriod')}
              </p>
            </div>

            <div className="space-y-4">
              {Object.keys(featureAccess).map((featureKey, index) => (
                <motion.div
                  key={featureKey}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border border-blue-100"
                >
                  <span className="text-sm text-gray-700 font-sans">
                    {t(`landing.features.${featureKey}`)}
                  </span>
                  <span className="text-2xl">
                    {featureAccess[featureKey as keyof typeof featureAccess]
                      ?.premium
                      ? '✔️'
                      : '✖️'}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className={`bg-gradient-to-r ${accentGradient} rounded-3xl p-12 text-white`}>
            <h3 className="text-3xl font-bold mb-6 font-oswald">
              {t('landing.plans.ctaTitle')}
            </h3>
            <p className="text-xl mb-8 opacity-90 font-sans">
              {t('landing.plans.ctaDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-sans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('landing.plans.startFree')}
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 font-sans"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('landing.plans.tryPremium')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
