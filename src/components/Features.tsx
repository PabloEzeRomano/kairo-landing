'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';


const featureItems = [
  {
    icon: '📝',
    key: 'taskCreation',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: '📅',
    key: 'dailyPlan',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: '⏰',
    key: 'timeBlocks',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: '🎯',
    key: 'focusMode',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: '🔔',
    key: 'notifications',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: '🤖',
    key: 'iaSuggestion',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function Features() {
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
            {t('landing.features.title')}
          </h2>
          <p className={`text-xl ${descriptionColor} max-w-3xl mx-auto font-sans`}>
            {t('landing.features.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map(({ key, icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <div className="bg-white/30 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${accentGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                >
                  <span className="text-3xl">{icon}</span>
                </div>

                <h3 className={`text-xl font-semibold ${titleColor} mb-4 font-sans flex-shrink-0`}>
                  {t(`landing.features.${key}`)}
                </h3>

                <div className="mt-auto">
                  <div className="h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${accentGradient}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional features showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/80 rounded-3xl p-12 shadow-xl border border-gray-100">
            <div className="max-w-4xl mx-auto">
              <h3 className={`text-3xl font-bold ${descriptionColor} underline mb-8 font-oswald`}>
                {t('landing.features.comingSoon')}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: '🚀', key: 'sync' },
                  { icon: '📊', key: 'analytics' },
                  { icon: '🔒', key: 'security' },
                  { icon: '🌐', key: 'multiplatform' },
                ].map(({ icon, key }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">{icon}</span>
                    </div>
                    <p className={`text-sm font-medium ${titleColor} font-sans`}>
                      {t(`landing.features.${key}`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
