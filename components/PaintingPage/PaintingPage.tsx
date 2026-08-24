'use client';

import type { FC } from 'react';
import type { PaintingPageDesktopProps } from './Desktop';
import { PaintingPageMobile } from './Mobile';
import PaintingPageDesktop from './Desktop';

type PaintingPageProps = PaintingPageDesktopProps;

export const PaintingPage: FC<PaintingPageProps> = ({ ...props }) => {
  return (
    <>
      <div className="xs:hidden">
        <PaintingPageMobile {...props} />
      </div>
      <div className="hidden xs:block">
        <PaintingPageDesktop {...props} />
      </div>
    </>
  );
};
