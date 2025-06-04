// src/components/icons/models/NeuralCrestIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

const NeuralCrestIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      <defs>
        <marker
          id="neuralArrowhead"
          viewBox="0 0 10 10"
          refX="8" // Adjusted refX so arrowhead sits nicely on the line end
          refY="5"
          markerWidth="4" // Smaller arrowhead
          markerHeight="4"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
        </marker>
      </defs>

      {/* Cellular environment - subtle background circles */}
      <circle cx="10" cy="10" r="3" opacity="0.2" fill="currentColor"/>
      <circle cx="40" cy="40" r="4" opacity="0.2" fill="currentColor"/>
      <circle cx="15" cy="35" r="3" opacity="0.2" fill="currentColor"/>
      <circle cx="35" cy="15" r="2" opacity="0.2" fill="currentColor"/>

      {/* Main migrating path */}
      <motion.path
        d="M5 40 Q15 30 25 25 T45 10"
        strokeWidth="2.5"
        markerEnd="url(#neuralArrowhead)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
      />

      {/* Secondary "cell" or path element */}
      <motion.circle
        cx="5" // Start position for the circle to animate along the path
        cy="40"
        r="3.5"
        fill="currentColor"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        <animateMotion dur="5s" repeatCount="indefinite" path="M0 0 Q10 -10 20 -15 T40 -30" />
      </motion.circle>
    </svg>
  );
};

export default NeuralCrestIcon;
