// src/components/icons/models/QuorumIcon.tsx
import React from 'react';

interface IconProps {
  className?: string;
}

const QuorumIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="currentColor" // Default fill for circles
    >
      {/* Bacteria */}
      <circle cx="15" cy="25" r="5" />
      <circle cx="35" cy="25" r="5" />
      <circle cx="25" cy="15" r="4" />
      <circle cx="25" cy="35" r="4" />

      {/* Signals (radiating waves) - thinner stroke, lighter color via opacity or specific color */}
      <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7">
        <path d="M15 25 A7.5 7.5 0 0 1 7.5 17.5" />
        <path d="M15 25 A7.5 7.5 0 0 0 7.5 32.5" />
        <path d="M15 25 A12.5 12.5 0 0 1 2.5 12.5" />
        <path d="M15 25 A12.5 12.5 0 0 0 2.5 37.5" />

        <path d="M35 25 A7.5 7.5 0 0 0 42.5 17.5" />
        <path d="M35 25 A7.5 7.5 0 0 1 42.5 32.5" />
        <path d="M35 25 A12.5 12.5 0 0 0 47.5 12.5" />
        <path d="M35 25 A12.5 12.5 0 0 1 47.5 37.5" />
      </g>
    </svg>
  );
};

export default QuorumIcon;
