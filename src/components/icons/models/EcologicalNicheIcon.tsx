// src/components/icons/models/EcologicalNicheIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

const EcologicalNicheIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      {/* Overlapping environment shapes (niches) */}
      <motion.ellipse
        cx="20"
        cy="22"
        rx="15"
        ry="10"
        strokeWidth="1.5"
        opacity="0.6"
        initial={{ scale: 0.9, opacity:0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      />
      <motion.ellipse
        cx="30"
        cy="28"
        rx="15"
        ry="10"
        strokeWidth="1.5"
        opacity="0.6"
        initial={{ scale: 0.9, opacity:0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      />

      {/* Highlighted intersection (the niche) */}
      {/* This is hard to define perfectly with simple shapes for dynamic intersection.
          Using a pre-calculated path or a simpler representation.
          For this example, a central shape that implies the overlap.
      */}
      <motion.path
        d="M22 23 C20 26, 23 29, 25 29 C27 29, 30 26, 28 23 C27 21, 23 21, 22 23 Z" // Organic shape
        fill="currentColor"
        strokeWidth="1"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </motion.path>

      {/* Optional: A plant/organism symbol within the niche */}
      <motion.g
        transform="translate(25 26) scale(0.25)" // Position and scale the symbol
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <path d="M0 -10 L5 0 L0 0 L-5 0 Z M0 0 V 10 M-5 5 L5 5" stroke="white" strokeWidth="3"/>
      </motion.g>
    </svg>
  );
};

export default EcologicalNicheIcon;
