'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import styles from './Analytics.module.scss';

const performanceData = [
  { match: 'M1', runs: 45, strikeRate: 150 },
  { match: 'M2', runs: 67, strikeRate: 165 },
  { match: 'M3', runs: 32, strikeRate: 128 },
  { match: 'M4', runs: 89, strikeRate: 178 },
  { match: 'M5', runs: 54, strikeRate: 142 },
  { match: 'M6', runs: 78, strikeRate: 168 },
];

const playerComparisonData = [
  { category: 'Batting Avg', playerA: 85, playerB: 72 },
  { category: 'Strike Rate', playerA: 145, playerB: 132 },
  { category: 'Consistency', playerA: 78, playerB: 88 },
  { category: 'Boundaries', playerA: 92, playerB: 85 },
  { category: 'Pressure', playerA: 68, playerB: 75 },
];

const statsData = [
  { name: 'Rohit', avg: 54.2 },
  { name: 'Virat', avg: 61.8 },
  { name: 'Kane', avg: 58.3 },
  { name: 'Babar', avg: 56.7 },
  { name: 'Root', avg: 52.1 },
];

function ChartContainer({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = wrapperRef.current;

    if (!element) {
      return;
    }

    const updateDimensions = () => {
      const { width, height } = element.getBoundingClientRect();
      setDimensions({
        width: Math.max(0, Math.floor(width)),
        height: Math.max(0, Math.floor(height)),
      });
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.chartWrapper} ref={wrapperRef}>
      {dimensions.width > 0 && dimensions.height > 0 ? (
        <ResponsiveContainer
          width={dimensions.width}
          height={dimensions.height}
          minWidth={0}
          minHeight={300}
        >
          {children}
        </ResponsiveContainer>
      ) : null}
    </div>
  );
}

export function Analytics() {
  return (
    <section className={styles.analytics}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Analytics that reveal
            <br />
            <span className={styles.titleGradient}>hidden patterns</span>
          </h2>
          <p className={styles.subtitle}>
            Deep insights into player performance, team statistics, and match trends—all visualized
            beautifully.
          </p>
        </motion.div>

        <div className={styles.chartsGrid}>
          {/* Performance Trend Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.chartCard}
          >
            <h3>Performance Trend</h3>
            <p>Player performance across last 6 matches</p>
            <ChartContainer>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="match" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="runs"
                  stroke="#a855f7"
                  strokeWidth={3}
                  dot={{ fill: '#a855f7', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line
                  type="monotone"
                  dataKey="strikeRate"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <div className={`${styles.legendDot} ${styles.purple}`} />
                <span className={styles.legendLabel}>Runs</span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendDot} ${styles.blue}`} />
                <span className={styles.legendLabel}>Strike Rate</span>
              </div>
            </div>
          </motion.div>

          {/* Player Comparison Radar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={styles.chartCard}
          >
            <h3>Player Comparison</h3>
            <p>Multi-dimensional performance analysis</p>
            <ChartContainer>
              <RadarChart data={playerComparisonData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="category" stroke="#9ca3af" />
                <PolarRadiusAxis stroke="#9ca3af" />
                <Radar
                  name="Player A"
                  dataKey="playerA"
                  stroke="#a855f7"
                  fill="#a855f7"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Player B"
                  dataKey="playerB"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
              </RadarChart>
            </ChartContainer>
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <div className={`${styles.legendDot} ${styles.purple}`} />
                <span className={styles.legendLabel}>Player A</span>
              </div>
              <div className={styles.legendItem}>
                <div className={`${styles.legendDot} ${styles.blue}`} />
                <span className={styles.legendLabel}>Player B</span>
              </div>
            </div>
          </motion.div>

          {/* Batting Average Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={styles.chartCard}
          >
            <h3>Top Batsmen</h3>
            <p>Batting average comparison</p>
            <ChartContainer>
              <BarChart data={statsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <Bar dataKey="avg" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
