'use client';

import Image from 'next/image';
import { FC } from 'react';

type ProcessPreviewProps = {
  index: number;
  images: string[];
  onPaintingClick: (index: number) => void;
};

export const ProcessPreview: FC<ProcessPreviewProps> = ({ index, images, onPaintingClick }) => {
  return (
    <div className="grid h-[500px] grid-cols-2 grid-rows-2 gap-2">
      {images.map((path, imageIndex) => (
        <div key={path} className="relative">
          <Image
            onClick={() => onPaintingClick(imageIndex)}
            src={path}
            alt={`Studio process ${imageIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 70vw, 1024px"
            className="object-cover cursor-pointer rounded-md"
          />
        </div>
      ))}
    </div>
  );
};
