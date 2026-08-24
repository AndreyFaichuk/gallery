'use client';

import type { FC } from 'react';
import type { PaintingDetailProps, PaintingT } from '@/types';
import {
  PaintingInfoMobile,
  PhotoCollageMobile,
  YouMayAlsoLikeMobile,
} from '../../PaintingDetails/Mobile';

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
