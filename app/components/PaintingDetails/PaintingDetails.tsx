'use client';

import type { PaintingT } from '@/types/schema-types';
import type { FC } from 'react';
import { PhotoCollage } from './PhotoCollage';
import { PaintingInfo } from './PaintingInfo';
import type { ExchangeT } from '@/types/painting-types';

type PaintingDetailProps = ExchangeT & {
  painting: PaintingT;
};

export const PaintingDetails: FC<PaintingDetailProps> = ({ painting, exchange }) => {
  const { imageUrls, name, id, videoUrls } = painting;

  return (
    <div className="flex items-start justify-center gap-10">
      <PhotoCollage videoUrls={videoUrls} imageUrls={imageUrls} name={name} id={id} />
      <PaintingInfo painting={painting} exchange={exchange} />
    </div>
  );
};
