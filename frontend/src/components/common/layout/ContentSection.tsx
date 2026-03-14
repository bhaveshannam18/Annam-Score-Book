import type { ReactNode } from 'react';
import styles from './AppShell.module.scss';

type ContentSectionProps = {
  children: ReactNode;
};

export function ContentSection({ children }: ContentSectionProps) {
  return <div className={styles.contentGrid}>{children}</div>;
}
