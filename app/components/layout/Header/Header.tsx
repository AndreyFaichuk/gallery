'use client';

import { breakpointOptions, useBreakpoint } from '@/hooks/use-breakpoint';
import { DesktopHeader } from './desktop/DesktopHeader';
import { MobileHeader } from './mobile/MobileHeader';
import { tailwindBreakpoints } from '@/types/tailwind-types';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isHydrated, setHydrated] = useState(false);

  const isBelowMobile = useBreakpoint(tailwindBreakpoints.XS, breakpointOptions.BELOW);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return isBelowMobile ? <MobileHeader /> : <DesktopHeader />;
};
