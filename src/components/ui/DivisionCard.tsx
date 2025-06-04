// src/components/ui/DivisionCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface DivisionCardProps {
  id: string;
  name: string;
  tagline: string;
  details: string;
  className?: string;
}

const DivisionCard: React.FC<DivisionCardProps> = ({ id, name, tagline, details, className }) => {
  return (
    <motion.div
      id={id}
      className={cn(
        "bg-neutral-medium/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-secondary-medium/30 transition-shadow duration-300 flex flex-col",
        className
      )}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="font-heading text-xl text-secondary-light mb-2">{name}</h3>
      <p className="text-neutral-light/90 text-md mb-3 font-semibold">{tagline}</p> {/* Added font-semibold for tagline */}
      <p className="text-neutral-light/70 text-sm flex-grow">{details}</p> {/* Added flex-grow */}
    </motion.div>
  );
};

export default DivisionCard;
