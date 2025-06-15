// src/components/icons/models/SwarmIntelligenceIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

const SwarmIntelligenceIcon: React.FC<IconProps> = ({ className }) => {
  const numDots = 10;
  const center = { x: 25, y: 25 };
  const orbitRadius = 15;

  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      <defs>
        <filter id="swarmGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <motion.g filter="url(#swarmGlow)">
        {Array.from({ length: numDots }).map((_, i) => {
          const angle = (i / numDots) * 2 * Math.PI;
          const initialX = center.x + (orbitRadius - 5) * Math.cos(angle);
          const initialY = center.y + (orbitRadius - 5) * Math.sin(angle);

          return (
            <motion.circle
              key={i}
              cx={initialX}
              cy={initialY}
              r={i % 3 === 0 ? 2.5 : 2} // Vary sizes slightly
              opacity={0.8}
              animate={{
                cx: [initialX, center.x + orbitRadius * Math.cos(angle + Math.PI), initialX],
                cy: [initialY, center.y + orbitRadius * Math.sin(angle + Math.PI), initialY],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2, // Vary duration for more organic feel
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 1.5,
              }}
            />
          );
        })}
      </motion.g>
      {/* Optional central point or target */}
      <circle cx={center.x} cy={center.y} r="3" opacity="0.5" />
    </svg>
  );
};

export default SwarmIntelligenceIcon;
