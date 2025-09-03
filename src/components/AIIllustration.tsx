'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect } from 'react';


export default function AIIllustration() {
  const { t } = useLanguage();
  const { accentGradient, titleColor, descriptionColor } = useTheme();
  const [particles, setParticles] = useState<
    Array<{ left: number; top: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    // Generate random number of particles (15-30) and random positions only on client side
    const particleCount = Math.floor(Math.random() * 16) + 15; // 15-30 particles
    const randomParticles = [...Array(particleCount)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(randomParticles);
  }, []);

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
          <h2 className={`text-4xl md:text-5xl font-bold ${titleColor} mb-6 font-['Oswald']`}>
            {t('landing.aiIllustration.title')}
          </h2>
          <p className={`text-xl ${descriptionColor} max-w-3xl mx-auto`}>
            {t('landing.aiIllustration.description')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Main AI illustration container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mx-auto w-96 h-96 z-50"
          >
            {/* Central AI brain/network */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className={`w-48 h-48 bg-gradient-to-br ${accentGradient} rounded-full flex items-center justify-center shadow-2xl`}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="text-white text-6xl">🧠</div>
              </motion.div>
            </div>

            {/* Floating task elements */}
            <motion.div
              className="absolute top-8 left-8 w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            >
              <span className="text-2xl">📝</span>
            </motion.div>

            <motion.div
              className="absolute top-8 right-8 w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <span className="text-2xl">⏰</span>
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1.5,
              }}
            >
              <span className="text-2xl">🎯</span>
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center shadow-lg"
              animate={{
                y: [0, -8, 0],
                rotate: [0, -3, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            >
              <span className="text-2xl">📊</span>
            </motion.div>

            {/* Connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 384 384"
            >
              <motion.path
                d="M 96 96 Q 192 192 288 96"
                stroke="url(#gradient1)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M 96 288 Q 192 192 288 288"
                stroke="url(#gradient2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M 96 96 Q 192 192 96 288"
                stroke="url(#gradient3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                viewport={{ once: true }}
              />
              <motion.path
                d="M 288 96 Q 192 192 288 288"
                stroke="url(#gradient4)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 2 }}
                viewport={{ once: true }}
              />

              <defs>
                <linearGradient
                  id="gradient1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
                <linearGradient
                  id="gradient2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <linearGradient
                  id="gradient3"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
                <linearGradient
                  id="gradient4"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#F59E0B" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
