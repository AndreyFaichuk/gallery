'use client';

import Image from 'next/image';
import { FC } from 'react';

const LAYOUT_CONFIG: Record<
  number,
  {
    gridClassName: string;
    imageClassNames: string[];
  }
> = {
  0: {
    gridClassName: 'grid-cols-[1fr_4fr_1.75fr]',
    imageClassNames: [
      'col-start-1 row-span-2',
      'col-start-2 row-span-2',
      'col-start-3 row-start-1',
      'col-start-3 row-start-2',
    ],
  },
  1: {
    gridClassName: 'aspect-[3/2] grid-cols-4',
    imageClassNames: [
      'col-start-1 col-end-3 row-start-1 row-end-3',
      'col-start-3 col-end-5 row-start-1 row-end-2',
      'col-start-3 col-end-4 row-start-2 row-end-3',
      'col-start-4 col-end-5 row-start-2 row-end-3 object-[50%_23%]',
    ],
  },
  2: {
    gridClassName: 'grid-cols-[27fr_43fr_30fr]',
    imageClassNames: [
      'col-start-1 col-end-3 row-start-1 row-end-2',
      'col-start-3 col-end-4 row-start-1 row-end-3',
      'col-start-1 col-end-2 row-start-2 row-end-3',
      'col-start-2 col-end-3 row-start-2 row-end-3',
    ],
  },
};

type ProcessPreviewProps = {
  index: number;
  images: string[];
  onPaintingClick: (index: number) => void;
};

export const ProcessPreview: FC<ProcessPreviewProps> = ({ index, images, onPaintingClick }) => {
  const layout = LAYOUT_CONFIG[index] ?? LAYOUT_CONFIG[0];

  return (
    <div
      className={`grid h-[500px] 2xl:h-[700px] w-[70vw] max-w-5xl grid-rows-2 gap-2 2xl:w-[70vw] 2xl:max-w-none ${layout.gridClassName}`}
    >
      {images.map((path, imageIndex) => (
        <Image
          onClick={() => onPaintingClick(imageIndex)}
          key={path}
          src={path}
          alt={`Studio process ${imageIndex + 1}`}
          width={1200}
          height={1200}
          sizes="(max-width: 1024px) 70vw, 1024px"
          className={`${layout.imageClassNames[imageIndex] ?? ''} h-full w-full object-cover`}
        />
      ))}
    </div>
  );
};
