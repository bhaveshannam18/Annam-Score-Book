'use client';

import { motion } from 'framer-motion';
import { Radio, Trophy, BarChart3, Globe, FileText, TrendingUp } from 'lucide-react';
import styles from './Features.module.scss';

const features = [
  {
    icon: Radio,
    title: 'Live Scoring',
    description:
      'Ball-by-ball scoring with real-time updates and commentary for seamless match tracking.',
    gradientClass: 'gradientPurpleViolet',
  },
  {
    icon: Trophy,
    title: 'Series Management',
    description: 'Create and manage tournaments, leagues, and multi-match series with ease.',
    gradientClass: 'gradientBlueCyan',
  },
  {
    icon: BarChart3,
    title: 'Player Analytics',
    description: 'Comprehensive statistics for batting, bowling, and fielding performance.',
    gradientClass: 'gradientVioletFuchsia',
  },
  {
    icon: Globe,
    title: 'Public Live Scores',
    description: 'Share match scores in real-time with unlimited viewers across the globe.',
    gradientClass: 'gradientIndigoPurple',
  },
  {
    icon: FileText,
    title: 'Match Reports',
    description: 'Automated scorecards and detailed match summaries with downloadable PDFs.',
    gradientClass: 'gradientBlueIndigo',
  },
  {
    icon: TrendingUp,
    title: 'Historical Insights',
    description: 'Track trends, compare performances, and analyze player progression over time.',
    gradientClass: 'gradientPurpleBlue',
  },
];

export function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Everything you need to
            <br />
            <span className={styles.titleGradient}>score like a pro</span>
          </h2>
          <p className={styles.subtitle}>
            A complete platform built for modern cricket scoring with professional-grade features.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.featureCard}>
                <div className={`${styles.iconWrapper} ${styles[feature.gradientClass]}`}>
                  <feature.icon />
                </div>

                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
