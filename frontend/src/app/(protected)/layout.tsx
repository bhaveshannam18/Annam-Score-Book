'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { AppShell, AppSidebar, AppTopbar } from '@/components/common/layout';
import { APP_SIDEBAR_NAV_ITEMS } from '@/components/common/layout/appNavigation';

const TITLE_BY_PATH: Record<string, string> = {
  '/dashboard': 'Welcome back, Bhavesh 👋',
  '/matches': 'Matches',
  '/players': 'Players',
  '/analytics': 'Analytics',
  '/profile': 'Profile',
  '/settings': 'Settings',
};

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const title = TITLE_BY_PATH[pathname] ?? 'Dashboard';
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setIsMobileSidebarOpen(false);
  }, [pathname]);

  return (
    <AppShell
      sidebar={
        <AppSidebar
          navItems={APP_SIDEBAR_NAV_ITEMS}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />
      }
      topbar={
        <AppTopbar
          title={title}
          initials="BA"
          profileHref="/profile"
          onMenuClick={() => setIsMobileSidebarOpen(true)}
        />
      }
    >
      {children}
    </AppShell>
  );
}
