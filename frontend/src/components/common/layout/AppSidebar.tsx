'use client';

import { Crown, Lock } from 'lucide-react';
import type { ComponentType } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './AppSidebar.module.scss';

export type AppSidebarNavItem = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  locked?: boolean;
};

type AppSidebarProps = {
  navItems: AppSidebarNavItem[];
  brand?: string;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
};

export function AppSidebar({
  navItems,
  brand = 'ScoreBook',
  isMobileOpen = false,
  onCloseMobile,
}: AppSidebarProps) {
  const pathname = usePathname();

  const renderSidebarContent = (isMobile = false) => (
    <>
      <div className={styles.logo}>{brand}</div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`${styles.navItem} ${pathname === item.href || pathname.startsWith(`${item.href}/`) ? styles.active : ''}`}
            onClick={isMobile ? onCloseMobile : undefined}
          >
            <item.icon />
            <span>{item.label}</span>
            {item.locked && <Lock className={styles.lockIcon} />}
          </Link>
        ))}
      </nav>

      <div className={styles.upgradeCard}>
        <div className={styles.upgradeTitleRow}>
          <Crown size={16} />
          <span>Upgrade to Pro</span>
        </div>
        <p>Unlock advanced analytics, AI insights and premium exports.</p>
        <button type="button">View Plans</button>
      </div>
    </>
  );

  return (
    <>
      <aside className={`${styles.sidebar} ${styles.sidebarDesktop}`}>
        {renderSidebarContent()}
      </aside>

      {isMobileOpen && (
        <button
          type="button"
          className={styles.backdrop}
          onClick={onCloseMobile}
          aria-label="Close sidebar menu"
        />
      )}

      <div className={`${styles.sidebarMobile} ${isMobileOpen ? styles.open : ''}`}>
        <aside className={styles.sidebar}>{renderSidebarContent(true)}</aside>
      </div>
    </>
  );
}
