import { ContentSection } from '@/components/common/layout';
import styles from '@/components/common/layout/AppShell.module.scss';

export default function PlayersPage() {
  return (
    <ContentSection>
      <section className={styles.matchesCard}>
        <div className={styles.cardHeader}>
          <h2>Players Directory</h2>
        </div>
        <p>Players route is ready. We can add player profiles, stats and role assignments here.</p>
      </section>
    </ContentSection>
  );
}
