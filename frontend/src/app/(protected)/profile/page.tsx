import { ContentSection } from '@/components/common/layout';
import styles from '@/components/common/layout/AppShell.module.scss';

export default function ProfilePage() {
  return (
    <ContentSection>
      <section className={styles.matchesCard}>
        <div className={styles.cardHeader}>
          <h2>Your Profile</h2>
        </div>
        <p>
          Profile route is ready. Personal details, plan and account controls can be managed here.
        </p>
      </section>
    </ContentSection>
  );
}
