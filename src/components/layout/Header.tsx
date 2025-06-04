"use client";
import Link from 'next/link';
// import { SymbioWaveLogo } from '@/components/icons/SymbioWaveLogo'; // Create this
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Placeholder Logo
const PlaceholderLogoSmall = () => (
  <div className="text-2xl font-bold font-heading">
    Symbio<span className="text-accent-gold">Wave</span>
  </div>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary-deep/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" aria-label="SymbioWave Home">
            {/* <SymbioWaveLogo className="h-8" /> */}
            <PlaceholderLogoSmall />
          </Link>
          <nav className="flex space-x-4">
            <Link href="/platform/aci-technology" className="text-neutral-light hover:text-accent-gold">ACI Tech</Link>
            <Link href="/company/about" className="text-neutral-light hover:text-accent-gold">About</Link>
            <Link href="/contact" className="text-neutral-light hover:text-accent-gold">Contact</Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
