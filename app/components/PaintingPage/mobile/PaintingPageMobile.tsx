'use client';

import { FC } from 'react';
import { PaintingDetailProps, PaintingT } from '@/types';
import { PhotoCollageMobile, YouMayAlsoLikeMobile } from '../../PaintingDetails/mobile';
import { PaintingInfoMobile } from '../../PaintingDetails/mobile';

export type PaintingPageMobileProps = PaintingDetailProps & {
  youMayAlsoLikePaintings: PaintingT[];
};

export const PaintingPageMobile: FC<PaintingPageMobileProps> = ({
  exchange,
  painting,
  youMayAlsoLikePaintings,
}) => {
  return (
    <div className="flex flex-col gap-4 mt-12">
      <PhotoCollageMobile {...painting} />
      <PaintingInfoMobile painting={painting} exchange={exchange} />
      <YouMayAlsoLikeMobile exchange={exchange} paintings={youMayAlsoLikePaintings} />
    </div>
  );
};
