import { ContentSection } from '@/components/common/layout';
import styles from '@/components/common/layout/AppShell.module.scss';

export default function AnalyticsPage() {
  return (
    <ContentSection>
      <section className={styles.lockedCard}>
        <div className={styles.lockedTitle}>
          <h4>Advanced Analytics (Pro)</h4>
        </div>
        <ul>
          <li>Run-rate comparison charts</li>
          <li>Player impact projections</li>
          <li>AI insights and recommendations</li>
        </ul>
        <button type="button">Upgrade Now</button>
      </section>
    </ContentSection>
  );
}
