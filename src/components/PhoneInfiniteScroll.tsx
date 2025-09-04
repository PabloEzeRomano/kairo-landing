'use client';

import { motion } from 'framer-motion';

export default function PhoneInfiniteScroll() {
  const scrollItems = [
    'bg-blue-200 w-3/4',
    'bg-purple-200 w-1/2',
    'bg-green-200 w-2/3',
    'bg-yellow-200 w-1/3',
    'bg-blue-200 w-4/5',
    'bg-purple-200 w-3/5',
    'bg-green-200 w-2/5',
    'bg-yellow-200 w-1/2',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
      className="mt-16"
    >
      <div className="relative mx-auto w-55 h-96">
        <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
            {/* Top notch */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-300 rounded-full z-100" />

            <div className="px-4 relative overflow-hidden h-full">
              {/* Task cards */}
              <div className="pt-8 bg-white p-4 rounded-lg space-y-2 relative z-10">
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

              {/* Infinite scroll list */}
              <motion.div
                className="space-y-3"
                animate={{ y: ['0%', '-50%'] }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              >
                {[...Array(2)].flatMap((_, idx) =>
                  scrollItems.map((style, i) => (
                    <div
                      key={idx + style + i}
                      className={`h-3 rounded-full ${style}`}
                    />
                  ))
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
