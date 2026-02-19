"use client";

import { motion } from 'framer-motion';
import { Plus, Radio, BarChart3 } from 'lucide-react';
import styles from './HowItWorks.module.scss';

const steps = [
  {
    number: '1',
    icon: Plus,
    title: 'Create Match',
    description: 'Set up your match details, teams, and players in seconds with our intuitive interface.',
  },
  {
    number: '2',
    icon: Radio,
    title: 'Live Scoring',
    description: 'Score ball-by-ball in real-time with our streamlined scoring interface designed for speed.',
  },
  {
    number: '3',
    icon: BarChart3,
    title: 'Analyze & Share',
    description: 'Access instant analytics and share live scores with your audience worldwide.',
  },
];

export function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Simple workflow,
            <br />
            <span className={styles.titleGradient}>
              powerful results
            </span>
          </h2>
          <p className={styles.subtitle}>
            From match creation to final analysis, our three-step process makes professional scoring accessible to everyone.
          </p>
        </motion.div>
        
        <div className={styles.stepsGrid}>
          {/* Connection lines for desktop */}
          <div className={styles.connectionLine} />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={styles.stepCard}
            >
              <div className={styles.iconContainer}>
                <div className={styles.iconCircle}>
                  <step.icon />
                </div>
                <div className={styles.stepNumber}>{step.number}</div>
              </div>
              
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
