'use client';
import {
  Button,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  Separator,
} from '@/app/components/ui';
import { ToggleGroup, ToggleGroupItem } from '@/app/components/ui/toggle-group';
import { cn } from '@/app/lib/utils';
import { CURRENCY_OPTIONS, MOBILE_MENU_OPTIONS } from '@/constants';
import { ExchangeRatesCurrency } from '@/utils/route-handlers/get-currency-exchange';
import { Image, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import Link from 'next/link';

type NavigationMenuProps = { isOpen: boolean; onClose: VoidFunction };

export const NavigationMenu: FC<NavigationMenuProps> = ({ onClose, isOpen }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [currency, setCurrency] = useLocalStorage<ExchangeRatesCurrency>(
    'currency',
    CURRENCY_OPTIONS[0].value,
  );

  const handleSetCurrency = (currency?: ExchangeRatesCurrency) => {
    if (!currency) return;
    setCurrency(currency);
  };

  const handleNavigate = (link?: string) => {
    if (!link) return;
    router.push(link);
    requestAnimationFrame(() => onClose());
  };

  return (
    <Drawer direction="left" snapPoints={[1]} open={isOpen} onClose={onClose}>
      <DrawerContent className="bg-white gap-2 w-full max-w-none rounded-none h-full">
        <DrawerHeader className="justify-end">
          <DrawerTitle>
            <X className="size-8 mt-8 ml-2" onClick={onClose} />
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex flex-col gap-6">
          <Separator />

          <div className="flex flex-col gap-4 px-2">
            {MOBILE_MENU_OPTIONS.map((option) => {
              return (
                <Button
                  key={option.title}
                  variant="ghost"
                  onClick={() => handleNavigate(option.link)}
                  className={cn('flex h-12 justify-start gap-4 rounded-md font-medium', {
                    'bg-muted': option.link === pathname,
                  })}
                >
                  {option.icon}
                  <span className="text-base font-medium">{option.title}</span>
                </Button>
              );
            })}
          </div>

          <Separator />
        </div>
        <ToggleGroup
          variant="outline"
          type="single"
          className="w-full mt-2 px-2"
          onValueChange={(value) => handleSetCurrency(value as ExchangeRatesCurrency)}
          value={currency}
        >
          {CURRENCY_OPTIONS.map((currency) => (
            <ToggleGroupItem
              key={currency.value}
              value={currency.value}
              aria-label={currency.value}
              className="flex-1 h-9"
            >
              {currency.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <Link href="/home" onClick={onClose} className="mt-auto mb-10 flex justify-center">
          <div className="flex flex-col items-center leading-none text-center">
            <div className="flex items-center gap-1 relative">
              <span className="font-body text-[50px] absolute left-[-40px] top-[-75px]">JB</span>
              <span className="font-artist absolute left-[-15px] text-[40px] top-[-40px]">
                Atelier
              </span>
            </div>
            <span className="text-[14px] whitespace-nowrap tracking-wide">— fine artist —</span>
          </div>
        </Link>
      </DrawerContent>
    </Drawer>
  );
};
