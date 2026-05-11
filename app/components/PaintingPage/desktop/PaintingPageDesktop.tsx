'use client';

import { FC } from 'react';

import { PaintingDetailProps, PaintingT } from '@/types';
import { PhotoCollageDesktop, PaintingInfoDesktop } from '../../PaintingDetails/desktop';
import { YouMayAlsoLikeDesktop } from '../../PaintingDetails/desktop/YouMayAlsoLikeDesktop';

export type PaintingPageDesktopProps = PaintingDetailProps & {
  youMayAlsoLikePaintings: PaintingT[];
};

const PaintingPageDesktop: FC<PaintingPageDesktopProps> = ({
  exchange,
  painting,
  youMayAlsoLikePaintings,
}) => {
  const { imageUrls, name, id, videos } = painting;

  return (
    <div className="grid grid-cols-12">
      <div className="col-start-1 xl:col-start-3 col-span-12 gap-10">
        <div className="flex gap-10 items-start min-h-[1400px]">
          <PhotoCollageDesktop videos={videos} imageUrls={imageUrls} name={name} id={id} />
          <PaintingInfoDesktop painting={painting} exchange={exchange} />
        </div>
      </div>
      <YouMayAlsoLikeDesktop paintings={youMayAlsoLikePaintings} exchange={exchange} />
    </div>
  );
};

export default PaintingPageDesktop;
