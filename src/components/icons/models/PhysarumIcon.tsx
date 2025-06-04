// src/components/icons/models/PhysarumIcon.tsx
import React from 'react';

interface IconProps {
  className?: string;
}

const PhysarumIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none" // Important for stroke-only SVGs by default
      stroke="currentColor" // Sets the default stroke color
    >
      <path
        d="M10 10 Q20 5 25 15 T40 10 M10 10 Q5 20 15 25 T10 40 M25 15 Q30 25 40 30 M15 25 Q25 35 30 40 M40 10 Q45 20 40 30"
        strokeWidth="1.5"
      />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="40" cy="10" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="10" cy="40" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="40" cy="30" r="2.5" fill="currentColor" stroke="none"/>
      <circle cx="25" cy="15" r="2.5" fill="currentColor" stroke="none"/>
    </svg>
  );
};

export default PhysarumIcon;
