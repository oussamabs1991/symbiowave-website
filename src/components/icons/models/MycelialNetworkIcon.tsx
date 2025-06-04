// src/components/icons/models/MycelialNetworkIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

const MycelialNetworkIcon: React.FC<IconProps> = ({ className }) => {
  const paths = [
    "M5 25 Q15 10 25 25 T45 25",
    "M5 25 Q10 40 25 25 T40 5",
    "M25 5 Q35 15 25 25 T15 45",
    "M45 25 Q35 35 25 25 T5 5",
    "M15 10 Q25 15 35 10",
    "M15 40 Q25 35 35 40",
  ];

  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor"
    >
      {paths.map((path, i) => (
        <motion.path
          key={i}
          d={path}
          strokeWidth="0.75" // Thinner lines for mycelial look
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.7 }}
          transition={{
            duration: 1.2,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
      {/* Nodes/Spores */}
      {[
        {cx: 5, cy: 25}, {cx: 25, cy: 25}, {cx: 45, cy: 25},
        {cx: 25, cy: 5}, {cx: 15, cy: 10}, {cx: 35, cy:10},
        {cx: 15, cy: 40}, {cx: 35, cy:40}, {cx: 40, cy:5}, {cx: 5, cy:5}, {cx:15,cy:45}
      ].map((coord, i) => (
        <motion.circle
          key={i}
          cx={coord.cx}
          cy={coord.cy}
          r="1.5"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
        />
      ))}
    </svg>
  );
};

export default MycelialNetworkIcon;
