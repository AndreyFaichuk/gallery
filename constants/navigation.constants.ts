import { MenuOptions } from '@/types';

export const NAVIGATION_MENU_OPTIONS = {
  ALL_PAINTINGS: { title: 'All paintings', link: '/collections/all-paintings' },
  AVAILABLE_PAINTINGS: { title: 'Available paintings', link: '/collections/available-paintings' },
  ABOUT_ME: { title: 'About me', link: '/about' },
} as const;

export const DESKTOP_MENU_OPTIONS: MenuOptions = [
  {
    title: 'Original oil paintings',
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
