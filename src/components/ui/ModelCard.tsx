// src/components/ui/ModelCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming you have this utility

interface ModelCardProps {
  id: string;
  name: string;
  description: string;
  icon?: React.ReactNode; // Changed from iconPlaceholder to icon
  className?: string;
}

const ModelCard: React.FC<ModelCardProps> = ({ id, name, description, icon, className }) => {
  return (
    <motion.div
      id={id}
      className={cn(
        "bg-neutral-medium/30 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-primary-light/30 transition-shadow duration-300 flex flex-col", // Added flex flex-col
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {icon && (
        <div className="mb-4 h-16 w-16 text-secondary-light group-hover:text-accent-gold transition-colors duration-300 self-center flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="font-heading text-xl text-primary-light mb-2">{name}</h3>
      <p className="text-neutral-light/80 text-sm flex-grow">{description}</p> {/* Added flex-grow */}
    </motion.div>
  );
};

export default ModelCard;
