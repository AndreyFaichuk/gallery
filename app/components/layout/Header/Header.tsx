'use client';

import { breakpointOptions, useBreakpoint, useHydrated } from '@/hooks';
import { MobileHeader } from './mobile/MobileHeader';
import { tailwindBreakpoints } from '@/types';
import dynamic from 'next/dynamic';

const DesktopHeaderAsync = dynamic(() => import('./desktop/DesktopHeader'), {
  ssr: false,
  // TODO: add skeleton / loader
  // loading: () => <p>Loading...</p>,
});

export const Header = () => {
  const isHydrated = useHydrated();

  const isBelowMobile = useBreakpoint(tailwindBreakpoints.XS, breakpointOptions.BELOW);

  if (!isHydrated) return null;

  return isBelowMobile ? <MobileHeader /> : <DesktopHeaderAsync />;
};
