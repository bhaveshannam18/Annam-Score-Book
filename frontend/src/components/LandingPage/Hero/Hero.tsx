'use client';

import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import styles from './Hero.module.scss';

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background gradient */}
      <div className={styles.backgroundGradient} />

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.content}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={styles.badge}
          >
            <span>Professional Cricket Scoring Platform</span>
          </motion.div>

          <h1 className={styles.title}>
            Live Cricket Scoring,
            <br />
            <span className={styles.titleGradient}>Powered by Analytics</span>
          </h1>

          <p className={styles.subtitle}>
            Professional ball-by-ball scoring with real-time insights. Built for academies,
            tournaments, and cricket enthusiasts who demand precision.
          </p>

          <div className={styles.ctaButtons}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.primaryBtn}
            >
              Start Scoring Free
              <ArrowRight className={styles.iconMd} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.secondaryBtn}
            >
              <Play className={styles.iconMd} />
              View Live Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={styles.dashboardPreview}
        >
          <div className={styles.dashboardOverlay} />
          <div className={styles.dashboardCard}>
            <div className={styles.dashboardShell}>
              {/* Browser chrome */}
              <div className={styles.browserChrome}>
                <div className={styles.browserDots}>
                  <div className={`${styles.dot} ${styles.dotRed}`} />
                  <div className={`${styles.dot} ${styles.dotYellow}`} />
                  <div className={`${styles.dot} ${styles.dotGreen}`} />
                </div>
                <div className={styles.browserAddressWrapper}>
                  <div className={styles.browserAddress}>app.scorebook.io/dashboard</div>
                </div>
              </div>

              {/* Dashboard content */}
              <DashboardPreview />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className={styles.dashboardContent}>
      <div className={styles.statsGrid}>
        {/* Stat cards */}
        <div className={`${styles.statCard} ${styles.purple}`}>
          <div className={`${styles.statLabel} ${styles.purple}`}>Total Matches</div>
          <div className={styles.statValue}>524</div>
          <div className={styles.statChange}>+12% from last month</div>
        </div>

        <div className={`${styles.statCard} ${styles.blue}`}>
          <div className={`${styles.statLabel} ${styles.blue}`}>Players Tracked</div>
          <div className={styles.statValue}>2,847</div>
          <div className={styles.statChange}>Across all matches</div>
        </div>

        <div className={`${styles.statCard} ${styles.violet}`}>
          <div className={`${styles.statLabel} ${styles.violet}`}>Live Viewers</div>
          <div className={styles.statValue}>1,234</div>
          <div className={styles.statChange}>Currently watching</div>
        </div>
      </div>

      {/* Match card preview */}
      <div className={styles.matchCard}>
        <div className={styles.matchHeader}>
          <div className={styles.matchLabel}>Recent Match</div>
          <div className={styles.liveBadge}>LIVE</div>
        </div>

        <div className={styles.matchTeams}>
          <div className={styles.teamRow}>
            <div>
              <div className={styles.teamName}>Mumbai Warriors</div>
              <div className={styles.teamScore}>
                187/4 <span className={styles.overs}>(18.3 overs)</span>
              </div>
            </div>
            <div className={styles.runRate}>Run Rate: 10.15</div>
          </div>

          <div className={styles.teamDivider} />

          <div className={`${styles.teamRow} ${styles.teamRowMuted}`}>
            <div>
              <div className={styles.teamName}>Chennai Challengers</div>
              <div className={styles.yetToBat}>Yet to bat</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
