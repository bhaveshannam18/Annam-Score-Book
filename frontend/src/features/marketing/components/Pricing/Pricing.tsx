'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import styles from './Pricing.module.scss';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individual scorers',
    price: '0',
    period: '/month',
    features: [
      'Up to 10 matches/month',
      'Basic live scoring',
      'Match scorecards',
      'Public score sharing',
      'Email support',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For academies and clubs',
    price: '29',
    period: '/month',
    features: [
      'Unlimited matches',
      'Advanced analytics',
      'Player statistics',
      'Tournament management',
      'Priority support',
      'Custom branding',
      'API access',
    ],
    cta: 'Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'For large organizations',
    price: 'Custom',
    period: '',
    features: [
      'Everything in Pro',
      'Dedicated support',
      'Custom integrations',
      'White-label solution',
      'SLA guarantee',
      'Training sessions',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export function Pricing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.15 + index * 0.05, duration: 0.3 },
    }),
  };

  return (
    <section className={styles.pricing}>
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <span className={styles.eyebrow}>Flexible Plans</span>
          <h2 className={styles.title}>
            Simple, transparent
            <br />
            <span className={styles.titleGradient}>pricing for everyone</span>
          </h2>
          <p className={styles.subtitle}>
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className={styles.plansGrid}>
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`${styles.planCard} ${plan.popular ? styles.popular : styles.standard}`}
            >
              {plan.popular && (
                <motion.div
                  className={styles.popularBadge}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles />
                  <span>MOST POPULAR</span>
                </motion.div>
              )}

              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <div className={styles.planPrice}>
                <div className={styles.price}>
                  {plan.price !== 'Custom' && <span className={styles.currency}>$</span>}
                  <span>{plan.price}</span>
                </div>
                {plan.period && <span className={styles.period}>{plan.period}</span>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${styles.planCta} ${plan.popular ? styles.popular : styles.standard}`}
              >
                {plan.cta}
              </motion.button>

              <ul className={styles.featuresList}>
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={feature}
                    variants={featureVariants}
                    initial="hidden"
                    whileInView="visible"
                    custom={featureIndex}
                    viewport={{ once: true }}
                  >
                    <Check />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
