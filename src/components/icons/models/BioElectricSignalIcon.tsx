// src/components/icons/models/BioElectricSignalIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

const BioElectricSignalIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      {/* Central Neuron/Source */}
      <motion.circle
        cx="25"
        cy="25"
        r="6"
        fill="currentColor"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Radiating Signals (Sine Waves) */}
      {[0, 1, 2, 3].map((i) => (
        <motion.path
          key={i}
          d="M25 25 Q30 20 35 25 T45 25"
          strokeWidth="1.5"
          stroke="currentColor"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            duration: 0.8,
            delay: i * 0.2 + 0.5, // Staggered appearance after central pulse
            repeat: Infinity,
            repeatType: "loop", // Use "loop" to restart animation from initial
            repeatDelay: 2, // Time before the path redraws
            ease: "easeInOut"
          }}
          style={{ transformOrigin: "25px 25px", transform: `rotate(${i * 90}deg)` }}
        />
      ))}
    </svg>
  );
};

export default BioElectricSignalIcon;
