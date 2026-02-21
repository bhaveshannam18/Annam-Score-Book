'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from './Navigation.module.scss';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.inner}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.logo}
          >
            ScoreBook
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>
              Features
            </a>
            <a href="#analytics" onClick={(e) => handleNavClick(e, 'analytics')}>
              Analytics
            </a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>
              Pricing
            </a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>
              Testimonials
            </a>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <Link href="/login" className={styles.signInBtn}>
              Sign In
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.getStartedBtn}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className={styles.mobileMenuBtn}>
            {isOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.mobileMenu}
          >
            <a href="#features" onClick={(e) => handleNavClick(e, 'features')}>
              Features
            </a>
            <a href="#analytics" onClick={(e) => handleNavClick(e, 'analytics')}>
              Analytics
            </a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>
              Pricing
            </a>
            <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>
              Testimonials
            </a>
            <div className={styles.mobileCtaButtons}>
              <Link href="/login" className={styles.mobileSignInBtn}>
                Sign In
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={styles.mobileGetStartedBtn}
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
