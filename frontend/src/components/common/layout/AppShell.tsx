import type { ReactNode } from 'react';
import styles from './AppShell.module.scss';

type AppShellProps = {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
};

export function AppShell({ sidebar, topbar, children }: AppShellProps) {
  return (
    <main className={styles.dashboardPage}>
      <div className={styles.glowOrb} aria-hidden="true" />
      <div className={styles.glowOrbSecondary} aria-hidden="true" />

      <section className={styles.shell}>
        {sidebar}

        <div className={styles.contentArea}>
          {topbar}
          <div className={styles.contentInner}>{children}</div>
        </div>
      </section>
    </main>
  );
}
