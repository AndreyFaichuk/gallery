import { MenuOptions } from '@/types';
import { Images, Palette, ShoppingBag } from 'lucide-react';

export const NAVIGATION_MENU_OPTIONS = {
  SHOP: { title: 'shop', link: '/collections/shop' },
  GALLERY: { title: 'gallery', link: '/collections/gallery' },
  ABOUT_ME: { title: 'about me', link: '/about' },
} as const;

export const DESKTOP_MENU_OPTIONS: MenuOptions = [
  {
    title: NAVIGATION_MENU_OPTIONS.SHOP.title,
    link: NAVIGATION_MENU_OPTIONS.SHOP.link,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.GALLERY.title,
    link: NAVIGATION_MENU_OPTIONS.GALLERY.link,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.ABOUT_ME.title,
    link: NAVIGATION_MENU_OPTIONS.ABOUT_ME.link,
  },
] as const;

export const MOBILE_MENU_OPTIONS: MenuOptions = [
  {
    title: NAVIGATION_MENU_OPTIONS.SHOP.title,
    link: NAVIGATION_MENU_OPTIONS.SHOP.link,
    icon: <ShoppingBag className="size-5 ml-2" />,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.GALLERY.title,
    link: NAVIGATION_MENU_OPTIONS.GALLERY.link,
    icon: <Images className="size-5 ml-2" />,
  },
  {
    title: NAVIGATION_MENU_OPTIONS.ABOUT_ME.title,
    link: NAVIGATION_MENU_OPTIONS.ABOUT_ME.link,
    icon: <Palette className="size-5 ml-2" />,
  },
] as const;
