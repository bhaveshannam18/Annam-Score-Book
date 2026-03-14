'use client';

import { motion } from 'framer-motion';
import { Lock, ChevronRight } from 'lucide-react';
import { ContentSection } from '@/components/common/layout';
import styles from '@/components/common/layout/AppShell.module.scss';

const stats = [
  { label: 'Matches Scored', value: '124' },
  { label: 'Win % Tracked', value: '68%' },
  { label: 'Teams Managed', value: '9' },
  { label: 'Live Matches', value: '2' },
];

const recentMatches = [
  { fixture: 'Mumbai Warriors vs Chennai Challengers', status: 'LIVE', badge: 'live' },
  { fixture: 'Delhi Capitals vs Bangalore Stars', status: 'COMPLETED', badge: 'completed' },
  { fixture: 'Punjab Lions vs Kolkata Knights', status: 'UPCOMING', badge: 'upcoming' },
];

export default function DashboardPage() {
  return (
    <ContentSection>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.45 }}
        className={styles.statsGrid}
      >
        {stats.map((stat) => (
          <article key={stat.label} className={styles.statCard}>
            <p>{stat.label}</p>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={styles.matchesCard}
      >
        <div className={styles.cardHeader}>
          <h2>Recent Matches</h2>
          <button type="button">
            View All
            <ChevronRight size={14} />
          </button>
        </div>

        <div className={styles.matchList}>
          {recentMatches.map((match) => (
            <div key={match.fixture} className={styles.matchItem}>
              <span>{match.fixture}</span>
              <span className={`${styles.badge} ${styles[match.badge]}`}>{match.status}</span>
            </div>
          ))}
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.26, duration: 0.5 }}
        className={styles.lockedCard}
      >
        <div className={styles.lockedTitle}>
          <Lock size={16} />
          <h4>Pro Features Locked</h4>
        </div>
        <ul>
          <li>Advanced batting analytics</li>
          <li>Auto report generation</li>
          <li>Unlimited highlights export</li>
        </ul>
        <button type="button">Upgrade Now</button>
      </motion.article>
    </ContentSection>
  );
}
