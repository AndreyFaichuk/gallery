'use client';

import Link from 'next/link';
import {
  NavigationMenu as NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  Separator,
  Button,
} from '@/app/components/ui';
import { DESKTOP_MENU_OPTIONS } from '@/constants';
import { MenuOptionBase } from '@/types';
import { FC, Fragment } from 'react';
import { Image } from 'lucide-react';
import { useRouter } from 'next/navigation';

type NavigationSubMenuProps = {
  subMenu: MenuOptionBase[];
};

const NavigationSubMenu: FC<NavigationSubMenuProps> = ({ subMenu }) => {
  const router = useRouter();

  const handleNavigate = (link?: string) => {
    if (!link) return;

    router.push(link);
  };

  return (
    <div className="min-w-56 rounded-xl bg-background p-2 shadow-md">
      <div className="flex flex-col gap-2">
        {subMenu.map((subOption, index) => {
          const isLastElement = subMenu.length - 1 === index;

          return (
            <Fragment key={subOption.title}>
              <NavigationMenuLink>
                <Button
                  variant="ghost"
                  onClick={() => handleNavigate(subOption.link)}
                  className="flex justify-start gap-3"
                >
                  <Image className="size-5" />
                  <span className="text-md font-medium">{subOption.title}</span>
                </Button>
              </NavigationMenuLink>

              {!isLastElement && <Separator />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export const NavigationMenu = () => {
  return (
    <NavigationMenuRoot className="w-2/3 justify-evenly flex-wrap">
      <NavigationMenuList className="gap-6">
        {DESKTOP_MENU_OPTIONS.map((option) => {
          if (option.link) {
            return (
              <NavigationMenuItem key={option.title}>
                <NavigationMenuLink asChild>
                  <Link className="text-[16px]" href={option.link}>
                    {option.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          }

          if (option.subMenu) {
            return (
              <NavigationMenuItem key={option.title}>
                <NavigationMenuTrigger className="text-[16px]">
                  {option.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <NavigationSubMenu subMenu={option.subMenu} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
        })}
      </NavigationMenuList>
    </NavigationMenuRoot>
  );
};
