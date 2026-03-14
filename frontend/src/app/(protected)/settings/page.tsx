import { ContentSection } from '@/components/common/layout';
import styles from '@/components/common/layout/AppShell.module.scss';

export default function SettingsPage() {
  return (
    <ContentSection>
      <section className={styles.matchesCard}>
        <div className={styles.cardHeader}>
          <h2>Account Settings</h2>
        </div>
        <p>Settings route is ready. Preferences, notifications and security options can go here.</p>
      </section>
    </ContentSection>
  );
}
