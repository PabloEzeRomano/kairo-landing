'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SharedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function SharedBackground({ children, className = '' }: SharedBackgroundProps) {
  const { timeOfDay, backgroundGradient } = useTheme();
  console.log('timeOfDay in SharedBackground', {timeOfDay, backgroundGradient});
  const [shapes, setShapes] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    color: string;
    duration: number;
    delay: number;
    scale: number[];
    rotate: number[];
    opacity: string;
  }>>([]);

  useEffect(() => {
    // Generate random background shapes only on client side
    const shapeCount = Math.floor(Math.random() * 8) + 6; // 6-13 shapes
    const currentTimeOfDay = timeOfDay;

    // Different colors based on time of day
    const colors = currentTimeOfDay === 'night'
      ? [
          'bg-blue-300',
          'bg-purple-300',
          'bg-indigo-300',
          'bg-cyan-300',
          'bg-slate-300',
          'bg-gray-300',
          'bg-blue-400',
          'bg-purple-400',
        ]
      : [
          'bg-blue-200',
          'bg-purple-200',
          'bg-pink-200',
          'bg-indigo-200',
          'bg-cyan-200',
          'bg-emerald-200',
          'bg-amber-200',
          'bg-rose-200',
        ];

    const randomShapes = [...Array(shapeCount)].map((_, i) => ({
      id: i,
      size: Math.random() * 200 + 100, // 100-300px
      x: Math.random() * 100, // 0-100%
      y: Math.random() * 100, // 0-100%
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 20 + 15, // 15-35 seconds
      delay: Math.random() * 5, // 0-5 seconds
      scale: [1, Math.random() * 0.5 + 1.1, 1], // 1 to 1.1-1.6
      rotate: [0, Math.random() * 360, 0], // 0 to random degrees
      opacity: currentTimeOfDay === 'night' ? 'opacity-80' : 'opacity-70',
    }));

    setShapes(randomShapes);
  }, [timeOfDay]);

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${backgroundGradient} ${className}`}>
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {shapes.map((shape) => (
          <motion.div
            key={shape.id}
            className={`absolute ${shape.color} rounded-full mix-blend-multiply filter blur-xl ${shape.opacity}`}
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
            }}
            animate={{
              scale: shape.scale,
              rotate: shape.rotate,
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: shape.delay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
