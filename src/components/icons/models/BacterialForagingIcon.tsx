// src/components/icons/models/BacterialForagingIcon.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface IconProps {
  className?: string;
}

const BacterialForagingIcon: React.FC<IconProps> = ({ className }) => {
  const bacteria = [
    { id: 1, initialPos: { x: 10, y: 10 }, path: "M0 0 Q10 5 12 12" }, // Relative path to center
    { id: 2, initialPos: { x: 40, y: 15 }, path: "M0 0 Q-10 5 -12 7" },
    { id: 3, initialPos: { x: 15, y: 40 }, path: "M0 0 Q5 -10 7 -12" },
    { id: 4, initialPos: { x: 35, y: 35 }, path: "M0 0 Q-5 -5 -7 -7" },
  ];
  const foodSource = { x: 25, y: 25 };

  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor"
    >
      {/* Food Source */}
      <motion.circle
        cx={foodSource.x}
        cy={foodSource.y}
        r="4"
        opacity="0.8"
        initial={{ scale: 0.8}}
        animate={{ scale: [0.8, 1.1, 0.8]}}
        transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
      />
      <circle cx={foodSource.x} cy={foodSource.y} r="7" fill="currentColor" opacity="0.3"/>


      {bacteria.map((b, i) => (
        <motion.g key={b.id} initial={{ x: b.initialPos.x, y: b.initialPos.y }}>
          {/* Dotted path (optional visualization) */}
          <path
            d={b.path}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="1 2"
            fill="none"
            opacity="0.4"
          />
          <motion.circle
            r="2.5"
            animate={{
                x: [0, ...b.path.match(/[-.\d]+/g)?.slice(-2).map(Number) ?? [0,0]], // Extract end of path for x
                y: [0, ...b.path.match(/[-.\d]+/g)?.slice(-2).map(Number) ?? [0,0]], // This is crude, needs proper path parsing or simpler animation
                // For simplicity, let's just animate opacity or a small jitter
            }}
            // Simpler animation: Jittering or small movement
            // For a proper path following, would need a more complex setup or SVG <animateMotion>
          >
            <animateMotion
              dur={`${3 + Math.random()*2}s`}
              repeatCount="indefinite"
              path={b.path}
              begin={`${i*0.3}s`}
            />
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="1.5s"
              repeatCount="indefinite"
              begin={`${i*0.2}s`}
            />
          </motion.circle>
        </motion.g>
      ))}
    </svg>
  );
};

export default BacterialForagingIcon;
