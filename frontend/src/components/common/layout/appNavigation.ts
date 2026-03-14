import { LayoutDashboard, Trophy, Users, BarChart3, Settings } from 'lucide-react';
import type { AppSidebarNavItem } from './AppSidebar';

export const APP_SIDEBAR_NAV_ITEMS: AppSidebarNavItem[] = [
  { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Matches', href: '/matches', icon: Trophy },
  { label: 'Players', href: '/players', icon: Users },
  { label: 'Analytics', href: '/analytics', icon: BarChart3, locked: true },
  { label: 'Settings', href: '/settings', icon: Settings },
];
