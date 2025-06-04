// src/components/icons/SymbioWaveLogo.tsx
import Image from 'next/image';
import React from 'react';

interface SymbioWaveLogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export const SymbioWaveLogo: React.FC<SymbioWaveLogoProps> = ({
  width = 250, // Adjust default width for symbiowave_full_logo.png
  height = 80, // Adjust default height to maintain aspect ratio
  className,
  priority = false,
}) => {
  return (
    <Image
      // Assuming your image is at public/images/symbiowave_full_logo.png
      src="/images/symbiowave_full_logo.png"
      alt="SymbioWave Full Logo"
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
};