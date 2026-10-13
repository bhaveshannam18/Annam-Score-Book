"use client";

import { motion } from 'framer-motion';
import { LayoutDashboard, Users, BarChart2, Settings } from 'lucide-react';
import styles from './ProductShowcase.module.scss';

export function ProductShowcase() {
  return (
    <section className={styles.productShowcase}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            A dashboard that does
            <br />
            <span className={styles.titleGradient}>
              all the heavy lifting
            </span>
          </h2>
          <p className={styles.subtitle}>
            Intuitive interface designed for speed and efficiency. Score matches, analyze data, 
            and share results—all from one powerful dashboard.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={styles.mockupWrapper}
        >
          <div className={styles.mockup}>
            {/* Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.logo}>
                ScoreBook
              </div>
              
              <nav className={styles.nav}>
                <button className={`${styles.navItem} ${styles.active}`}>
                  <LayoutDashboard />
                  <span>Dashboard</span>
                </button>
                <button className={styles.navItem}>
                  <Users />
                  <span>Players</span>
                </button>
                <button className={styles.navItem}>
                  <BarChart2 />
                  <span>Analytics</span>
                </button>
                <button className={styles.navItem}>
                  <Settings />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
            
            {/* Main Content */}
            <div className={styles.mainContent}>
              <div className={styles.contentHeader}>
                <h3>Recent Matches</h3>
                <p>View and manage all your cricket matches</p>
              </div>
              
              <div className={styles.matchesGrid}>
                {[
                  { team1: 'Mumbai Warriors', score1: '187/4', team2: 'Chennai Challengers', status: 'live' },
                  { team1: 'Delhi Capitals', score1: '165/8', team2: 'Bangalore Stars', score2: '168/7', status: 'completed', result: 'Bangalore Stars won by 3 runs' },
                  { team1: 'Kolkata Knights', score1: '201/3', team2: 'Punjab Lions', status: 'live' },
                  { team1: 'Hyderabad Titans', score1: '145/10', team2: 'Gujarat Giants', score2: '149/6', status: 'completed', result: 'Gujarat Giants won by 4 wickets' },
                ].map((match, i) => (
                  <div key={i} className={styles.matchCard}>
                    <div className={styles.matchCardHeader}>
                      <div className={styles.matchType}>T20 Match</div>
                      <div className={`${styles.statusBadge} ${styles[match.status]}`}>
                        {match.status === 'live' ? 'LIVE' : 'COMPLETED'}
                      </div>
                    </div>
                    
                    <div className={styles.matchTeams}>
                      <div className={styles.teamRow}>
                        <div className={styles.teamName}>{match.team1}</div>
                        <div className={styles.teamScore}>{match.score1}</div>
                      </div>
                      
                      <div className={styles.teamRow}>
                        <div className={styles.teamName}>{match.team2}</div>
                        <div className={styles.teamScore}>{match.score2 || 'Yet to bat'}</div>
                      </div>
                    </div>
                    
                    {match.result && (
                      <div className={styles.matchResult}>{match.result}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
