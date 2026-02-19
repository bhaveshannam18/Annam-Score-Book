'use client';

import { motion } from 'framer-motion';
import { Users, Trophy, Star, Globe } from 'lucide-react';
import styles from './SocialProof.module.scss';

const metrics = [
  { icon: Users, value: '50K+', label: 'Active Users' },
  { icon: Trophy, value: '100K+', label: 'Matches Scored' },
  { icon: Star, value: '4.9/5', label: 'User Rating' },
  { icon: Globe, value: '120+', label: 'Countries' },
];

const testimonials = [
  {
    text: 'ScoreBook has completely transformed how we manage our academy tournaments. The live scoring feature is a game-changer!',
    author: 'Raj Kumar',
    role: 'Academy Director, Mumbai Cricket Academy',
    avatar: 'RK',
    rating: 5,
  },
  {
    text: 'The analytics dashboard provides insights we never had before. Player performance tracking has become so much easier.',
    author: 'Sarah Mitchell',
    role: 'Tournament Organizer, Sydney Cricket League',
    avatar: 'SM',
    rating: 5,
  },
  {
    text: 'Finally, a professional scoring platform that actually works. The interface is intuitive and the real-time updates are flawless.',
    author: 'Amit Patel',
    role: 'Club Secretary, Delhi Sports Club',
    avatar: 'AP',
    rating: 5,
  },
];

export function SocialProof() {
  return (
    <section className={styles.socialProof}>
      <div className={styles.container}>
        {/* Metrics */}
        <div className={styles.metricsGrid}>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={styles.metricCard}
            >
              <div className={styles.metricIcon}>
                <metric.icon />
              </div>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>
            Trusted by cricket
            <br />
            <span className={styles.titleGradient}>professionals worldwide</span>
          </h2>
          <p className={styles.subtitle}>
            Join hundreds of academies, organizers, and enthusiasts who score with ScoreBook.
          </p>
        </motion.div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={styles.testimonialCard}
            >
              <div className={styles.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} />
                ))}
              </div>

              <p className={styles.testimonialText}>&ldquo;{testimonial.text}&rdquo;</p>

              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.avatar}</div>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
