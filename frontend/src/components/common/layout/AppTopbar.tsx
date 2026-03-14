import { Bell, Menu, Search } from 'lucide-react';
import styles from './AppTopbar.module.scss';
import { ProfileAvatar } from '../ui/ProfileAvatar';

type AppTopbarProps = {
  title: string;
  subtitle?: string;
  initials: string;
  profileHref?: string;
  onMenuClick?: () => void;
};

export function AppTopbar({
  title,
  subtitle,
  initials,
  profileHref = '/profile',
  onMenuClick,
}: AppTopbarProps) {
  return (
    <header className={styles.topBar}>
      <div className={styles.topTitleGroup}>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={onMenuClick}
          aria-label="Open sidebar menu"
        >
          <Menu size={18} />
        </button>

        <div>
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </div>
      </div>

      <div className={styles.topActions}>
        <button type="button" className={styles.searchBtn}>
          <Search size={16} />
          <span>Search</span>
        </button>
        <button type="button" className={styles.iconBtn}>
          <Bell size={16} />
        </button>
        <ProfileAvatar initials={initials} href={profileHref} className={styles.profileMini} />
      </div>
    </header>
  );
}
