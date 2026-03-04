'use client';

import Link from 'next/link';
import {
  NavigationMenu as NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from '@/app/components/ui/navigation-menu';

type MenuOptionBase = {
  title: string;
  link?: string;
};

type MenuOptions = (MenuOptionBase & {
  subMenu?: MenuOptionBase[];
})[];

const MENU_OPTIONS: MenuOptions = [
  {
    title: 'original oil paintings',
    subMenu: [
      { title: 'all paintings', link: '/paintings' },
      { title: 'available paintings', link: '/paintings/available' },
    ],
  },
  {
    title: 'about me',
    link: '/about',
  },
] as const;

export const NavigationMenu = () => {
  return (
    <NavigationMenuRoot className="w-2/3 justify-evenly">
      <NavigationMenuList>
        {MENU_OPTIONS.map((option) => {
          if (option.link) {
            return (
              <NavigationMenuItem key={option.title}>
                <NavigationMenuLink asChild>
                  <Link href={option.link}>{option.title}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          if (option.subMenu) {
            return (
              <NavigationMenuItem key={option.title}>
                <NavigationMenuTrigger>{option.title}</NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="flex flex-col gap-1">
                    {option.subMenu.map((subOption) => (
                      <li key={subOption.title}>
                        <NavigationMenuLink asChild>
                          <Link href={subOption.link || '#'}>{subOption.title}</Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
