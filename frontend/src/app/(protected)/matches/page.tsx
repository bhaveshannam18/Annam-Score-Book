import { ContentSection } from '@/components/common/layout';
import styles from '@/components/common/layout/AppShell.module.scss';

export default function MatchesPage() {
  return (
    <ContentSection>
      <section className={styles.matchesCard}>
        <div className={styles.cardHeader}>
          <h2>All Matches</h2>
        </div>
        <p>Matches module route is ready. We can plug live and completed match data here.</p>
      </section>
    </ContentSection>
  );
}
