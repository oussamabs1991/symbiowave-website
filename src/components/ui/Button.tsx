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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, children, className, ...props }, ref) => {
    const Tag = href ? motion(Link) : motion.button;

    const baseStyles = "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-deep focus-visible:ring-accent-gold";
    const variantStyles = {
      primary: "bg-primary-light text-neutral-darkest hover:bg-primary-medium shadow-md",
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
    return <Tag href={href} className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...motionProps} {...props} ref={ref}>{children}</Tag>;
  }
);
Button.displayName = "Button";
export default Button;
