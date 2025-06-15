// src/components/icons/models/GeneticAlgorithmIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

const GeneticAlgorithmIcon: React.FC<IconProps> = ({ className }) => {
  const strandPath1 = "M15 5 C 5 15, 5 35, 15 45";
  const strandPath2 = "M35 5 C 45 15, 45 35, 35 45";

  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      {/* DNA Strands */}
      <motion.path
        d={strandPath1}
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.path
        d={strandPath2}
        strokeWidth="2.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Connecting Rungs (representing genes/mutation points) */}
      {[10, 20, 30, 40].map((y, i) => (
        <motion.line
          key={i}
          x1={15 + Math.sin(y / 5) * 2} // Slight curve to connect to helix
          y1={y}
          x2={35 - Math.sin(y / 5) * 2}
          y2={y}
          strokeWidth="1.5"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: "easeOut" }}
        >
          {/* Subtle animation for "mutation" or activity */}
          <animate
            attributeName="stroke"
            values="currentColor;transparent;currentColor"
            dur={`${2 + i*0.5}s`}
            repeatCount="indefinite"
            begin={`${i*0.3}s`}
          />
        </motion.line>
      ))}
    </svg>
  );
};

export default GeneticAlgorithmIcon;
