// src/components/icons/models/ImmuneIcon.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

interface IconProps {
  className?: string;
}

const ImmuneIcon: React.FC<IconProps> = ({ className }) => {
  // Assuming theme's dark color is close to black for the anomaly
  // currentColor will be used for the shield.
  const anomalyColor = '#1F2937'; // Example: Tailwind gray-800

  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield */}
      <path
        d="M25 5 L6 12 L6 28 C6 36 25 45 25 45 C25 45 44 36 44 28 L44 12 Z"
        fill="currentColor"
        stroke="currentColor" // Make stroke same as fill for a solid look, or slightly darker
        strokeWidth="1"
      />

      {/* Anomaly particle being deflected/identified */}
      <motion.g initial={{ x: -10, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{delay: 0.2, duration: 0.5}}>
        <path
          d="M15 18 L12 15 L15 12 L18 15 Z" // Diamond shape for anomaly
          fill={anomalyColor}
        />
        <circle cx="15" cy="15" r="1.5" fill="white" opacity="0.7"/>
      </motion.g>

       {/* Stylized "recognition" lines on shield */}
      <g stroke="white" strokeWidth="0.7" opacity="0.3">
        <path d="M25 15 V 30" />
        <path d="M18 20 L32 25" />
        <path d="M18 25 L32 20" />
      </g>
    </svg>
  );
};

export default ImmuneIcon;
