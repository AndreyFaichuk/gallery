import { MenuOptions } from '@/types';

export const NAVIGATION_MENU_OPTIONS = {
  ALL_PAINTINGS: { title: 'all paintings', link: '/collections/all-paintings' },
  AVAILABLE_PAINTINGS: { title: 'available paintings', link: '/collections/available-paintings' },
  ABOUT_ME: { title: 'about me', link: '/about' },
} as const;
