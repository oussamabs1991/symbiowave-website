// src/components/icons/SymbioWaveLogo.tsx
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming utils.ts contains a cn function

interface SymbioWaveLogoProps {
  className?: string;
  animated?: boolean;
}

const SymbioWaveLogo: React.FC<SymbioWaveLogoProps> = ({ className, animated = true }) => {
  const text = "SymbioWave";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };
  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className={cn("font-heading text-4xl font-bold", className)}
      variants={animated ? containerVariants : undefined}
      initial="hidden"
      animate="visible"
    >
      <span className="sr-only">{text}</span> {/* For accessibility */}
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={animated ? childVariants : undefined}
          className={char === 'W' || char === 'a' || char === 'v' || char === 'e' ? 'text-accent-gold' : 'text-neutral-lightest'}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export { SymbioWaveLogo };