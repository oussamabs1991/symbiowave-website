// src/components/feature/EcosystemDiagram.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import DivisionNode from '@/components/ui/DivisionNode';

// Assuming colors from tailwind.config.ts (hardcoded for now)
// neutral.medium: '#1A1A1A' (example medium gray for lines)
// primary.light: '#3B82F6'
// secondary.medium: '#10B981'

interface DivisionType {
  id: string;
  name: string;
  tagline: string;
  details: string;
}

interface EcosystemDiagramProps {
  divisions: DivisionType[];
  // onDivisionSelect is now a new prop that passes the whole division object or null
  onDivisionSelect: (division: DivisionType | null) => void;
}

const EcosystemDiagram: React.FC<EcosystemDiagramProps> = ({
  divisions,
  onDivisionSelect,
}) => {
  const [currentSelectedId, setCurrentSelectedId] = useState<string | null>(null); // Manages internal selection state

  const viewBoxWidth = 500;
  const viewBoxHeight = 500;
  const centerX = viewBoxWidth / 2;
  const centerY = viewBoxHeight / 2;
  const diagramRadius = viewBoxWidth / 2 - 60; // Main radius of the circle of nodes, with padding
  const nodeRadius = 35; // Visual radius of individual nodes

  const numNodes = divisions.length;
  const angleStep = (2 * Math.PI) / numNodes;

  const nodes = divisions.map((division, i) => {
    // Offset angle to start the first node at the top (optional, adjust as needed)
    const angle = i * angleStep - Math.PI / 2;
    return {
      ...division,
      x: centerX + diagramRadius * Math.cos(angle),
      y: centerY + diagramRadius * Math.sin(angle),
      radius: nodeRadius,
    };
  });

  const neutralMedium = '#6b7280'; // Example: gray-500 for lines

  // Define gradients (optional, can be enhanced later)
  const primaryLight = '#3B82F6';
  const secondaryMedium = '#10B981';
  const accentGold = '#F59E0B';

  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
        staggerChildren: 0.15, // Stagger lines first, then nodes
      },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.5,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  // Node variants will be handled by DivisionNode itself or a simple fade-in here
   const nodeContainerVariants = { // For wrapping DivisionNode if needed for stagger
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut"}
    },
  };


  return (
    <motion.svg
      width="100%"
      height="auto"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      className="max-w-lg mx-auto"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <defs>
        <linearGradient id="default-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: secondaryMedium, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: primaryLight, stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="selected-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: primaryLight, stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: accentGold, stopOpacity: 1 }} />
        </linearGradient>
        {/* Filter for a subtle glow effect (optional) */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Central Hub Element (Optional) */}
      <circle cx={centerX} cy={centerY} r={diagramRadius / 3.5} fill="url(#default-gradient)" opacity="0.3" />
      <circle cx={centerX} cy={centerY} r={diagramRadius / 4} fill="rgba(13, 13, 13, 0.3)" stroke={neutralMedium} strokeWidth="1"/>
      <text x={centerX} y={centerY} textAnchor="middle" dy=".3em" fill="#E0E0E0" fontSize="12px" className="font-heading">
        Core
      </text>

      {/* Animated Lines from center to nodes */}
      {nodes.map(node => (
        <motion.line
          key={`line-c-${node.id}`}
          x1={centerX}
          y1={centerY}
          x2={node.x}
          y2={node.y}
          stroke={neutralMedium}
          strokeWidth="0.5"
          variants={lineVariants}
          // No need for individual initial/animate here if parent svg handles stagger
        />
      ))}

      {/* Lines connecting nodes in a circle (optional) - can also be animated if desired */}
      {/* {nodes.map((node, i) => (
        <line
          key={`line-n-${node.id}`}
          x1={node.x}
          y1={node.y}
          x2={nodes[(i + 1) % numNodes].x}
          y2={nodes[(i + 1) % numNodes].y}
          stroke={neutralMedium}
          strokeWidth="0.5"
          opacity="0.3"
        />
      ))} */}

      {/* Render Division Nodes - wrapped for stagger if DivisionNode doesn't handle its own entry well with parent stagger */}
      {nodes.map(node => (
        <motion.g key={`nodewrap-${node.id}`} variants={nodeContainerVariants}>
          <DivisionNode
            key={node.id}
            division={node}
            x={node.x}
            y={node.y}
            radius={node.radius}
            isSelected={currentSelectedId === node.id}
            onClick={(id: string) => {
              const newSelectedId = currentSelectedId === id ? null : id;
              setCurrentSelectedId(newSelectedId);
              if (newSelectedId) {
                const selectedDivData = divisions.find(d => d.id === newSelectedId);
                onDivisionSelect(selectedDivData || null);
              } else {
                onDivisionSelect(null);
              }
            }}
          />
        </motion.g>
      ))}
    </motion.svg>
  );
};

export default EcosystemDiagram;
