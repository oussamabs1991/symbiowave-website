// src/components/ui/DivisionNode.tsx
import React from 'react';
import { motion } from 'framer-motion'; // Import motion

// Assuming colors from tailwind.config.ts (hardcoded for now)
// primary.light: '#3B82F6' (example blue)
// secondary.medium: '#10B981' (example teal)
// accent.gold: '#F59E0B' (example gold)
// neutral.lightest: '#FFFFFF' (example white)

interface DivisionNodeProps {
  division: {
    id: string;
    name: string;
    tagline: string;
    details: string;
  };
  x: number;
  y: number;
  radius: number;
  isSelected: boolean;
  onClick: (id: string) => void;
}

const DivisionNode: React.FC<DivisionNodeProps> = ({
  division,
  x,
  y,
  radius,
  isSelected,
  onClick,
}) => {
  const primaryLight = '#3B82F6'; // Example blue
  const secondaryMedium = '#10B981'; // Example teal
  const accentGold = '#F59E0B'; // Example gold
  const neutralLightest = '#E0E0E0'; // Using a light gray for better visibility on potentially light backgrounds

  return (
    <motion.g
      onClick={() => onClick(division.id)}
      className="cursor-pointer group"
      animate={{ scale: isSelected ? 1.15 : 1 }} // Enhanced scale factor
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      <motion.circle
        cx={x}
        cy={y}
        r={radius}
        fill={isSelected ? primaryLight : secondaryMedium}
        stroke={isSelected ? accentGold : accentGold} // Keep stroke color consistent or change if desired
        strokeWidth={isSelected ? 3 : 2} // Thicker stroke when selected
        className="transition-colors duration-300 group-hover:opacity-80" // transition-colors for fill
      />
      <motion.text
        x={x}
        y={y + radius + (isSelected ? 18 : 15)} // Adjust text position slightly more when selected due to scale
        textAnchor="middle"
        fill={neutralLightest}
        fontSize="10px" // Explicit font size for SVG text
        fontFamily="var(--font-poppins), sans-serif" // Using CSS variable for font
        className="font-heading transition-all duration-300 group-hover:fill-white" // Removed fill from here, will be handled by animate
        animate={{ fill: isSelected ? accentGold : neutralLightest }} // Animate text color
        transition={{ duration: 0.3 }}
      >
        {division.name}
      </motion.text>
    </motion.g>
  );
};

export default DivisionNode;
