'use client';

import { FC } from 'react';
import { PaintingPageDesktopProps } from './desktop/PaintingPageDesktop';
import { breakpointOptions, useBreakpoint, useHydrated } from '@/hooks';
import { tailwindBreakpoints } from '@/types';
import { PaintingPageMobile } from './mobile/PaintingPageMobile';
import dynamic from 'next/dynamic';

type PaintingPageProps = PaintingPageDesktopProps;

const PaintingPageDesktopAsync = dynamic(() => import('./desktop/PaintingPageDesktop'), {
  ssr: false,
  // TODO: add skeleton / loader
  // loading: () => <p>Loading...</p>,
});

export const PaintingPage: FC<PaintingPageProps> = ({ ...props }) => {
  const isHydrated = useHydrated();
  const isBelowMobile = useBreakpoint(tailwindBreakpoints.XS, breakpointOptions.BELOW);

  if (!isHydrated) return null;

  return isBelowMobile ? (
    <PaintingPageMobile {...props} />
  ) : (
    <PaintingPageDesktopAsync {...props} />
  );
};
