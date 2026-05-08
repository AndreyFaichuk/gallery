'use client';

import { FC } from 'react';
import { PaintingDetailProps, PaintingT } from '@/types';
import { PhotoCollageMobile } from '../../PaintingDetails/mobile/PhotoCollageMobile';

export type PaintingPageMobileProps = PaintingDetailProps & {
  youMayAlsoLikePaintings: PaintingT[];
};

export const PaintingPageMobile: FC<PaintingPageMobileProps> = ({
  exchange,
  painting,
  youMayAlsoLikePaintings,
}) => {
  return (
    <div>
      <PhotoCollageMobile {...painting} />
    </div>
  );
};
