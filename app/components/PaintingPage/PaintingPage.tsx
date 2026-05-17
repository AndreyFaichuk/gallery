'use client';

import { FC } from 'react';
import { PaintingPageDesktopProps } from './desktop/PaintingPageDesktop';
import { PaintingPageMobile } from './mobile/PaintingPageMobile';
import PaintingPageDesktop from './desktop/PaintingPageDesktop';

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
