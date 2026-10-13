"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import styles from './FinalCTA.module.scss';

export function FinalCTA() {
  return (
    <section className={styles.finalCta}>
      {/* Background effects */}
      <div className={styles.backgroundEffect1} />
      <div className={styles.backgroundEffect2} />
      
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.card}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.badge}
          >
            <Sparkles />
            <span>Join the future of cricket scoring</span>
          </motion.div>
          
          <h2 className={styles.title}>
            Ready to elevate your
            <br />
            <span className={styles.titleGradient}>
              cricket experience?
            </span>
          </h2>
          
          <p className={styles.subtitle}>
            Start scoring professionally in minutes. No credit card required.
          </p>
          
          <div className={styles.ctaButtons}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.primaryBtn}
            >
              Create Your First Match
              <ArrowRight />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.secondaryBtn}
            >
              <MessageCircle />
              Talk to Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
