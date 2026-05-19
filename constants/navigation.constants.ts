import { MenuOptions } from '@/types';

export const NAVIGATION_MENU_OPTIONS = {
  ALL_PAINTINGS: { title: 'all paintings', link: '/collections/all-paintings' },
  AVAILABLE_PAINTINGS: { title: 'available paintings', link: '/collections/available-paintings' },
  ABOUT_ME: { title: 'about me', link: '/about' },
} as const;

export const DESKTOP_MENU_OPTIONS: MenuOptions = [
  {
    title: 'original oil paintings',
    subMenu: [
      {
        title: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.title,
        link: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.link,
      },
      {
        title: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.title,
        link: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.link,
      },
    ],
  },
  {
    title: NAVIGATION_MENU_OPTIONS.ABOUT_ME.title,
    link: NAVIGATION_MENU_OPTIONS.ABOUT_ME.link,
  },
] as const;

export const MOBILE_MENU_OPTIONS: MenuOptions = [
  {
    title: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.title,
    link: NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.link,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.title,
    link: NAVIGATION_MENU_OPTIONS.AVAILABLE_PAINTINGS.link,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.ABOUT_ME.title,
    link: NAVIGATION_MENU_OPTIONS.ABOUT_ME.link,
  },
] as const;
