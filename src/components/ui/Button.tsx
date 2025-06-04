"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

// Basic cn utility
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  // onClick is already part of ButtonHTMLAttributes
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, children, className, onClick, ...props }, ref) => {
    const Tag = href ? motion(Link) : motion.button;
    const [ripples, setRipples] = React.useState<React.CSSProperties[]>([]);

    const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      const rect = button.getBoundingClientRect();
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;

      const newRipple: React.CSSProperties = {
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${event.clientX - rect.left - radius}px`,
        top: `${event.clientY - rect.top - radius}px`,
      };

      setRipples(prevRipples => [...prevRipples, newRipple]);
    };

    // Debounce or manage removal more carefully if performance becomes an issue
    const onRippleAnimationEnd = (index: number) => {
      setRipples(prevRipples => prevRipples.filter((_, i) => i !== index));
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      createRipple(event);
      if (onClick) {
        onClick(event);
      }
    };

    const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-deep focus-visible:ring-accent-gold relative overflow-hidden"; // Added relative and overflow-hidden for ripple
    const variantStyles = {
      primary: `bg-primary-light text-neutral-darkest hover:bg-primary-medium shadow-md ${variant === 'primary' ? 'shadow-glow-blue hover:shadow-glow-blue' : ''}`, // Added shadow-glow-blue for primary
      outline: "border border-current text-primary-light hover:bg-primary-light/10",
    };
    const sizeStyles = {
      sm: "px-3 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    const motionProps = {
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 },
    };

    // @ts-ignore
    return <Tag href={href} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...motionProps} {...props} ref={ref} onClick={!href ? handleClick : undefined} >
      {children}
      {!href && ripples.map((style, index) => (
        <span
          key={index}
          className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none" // Ensure animate-ripple is defined in tailwind.config.ts
          style={style}
          onAnimationEnd={() => onRippleAnimationEnd(index)}
        />
      ))}
    </Tag>;
  }
);
Button.displayName = "Button";
export default Button;
