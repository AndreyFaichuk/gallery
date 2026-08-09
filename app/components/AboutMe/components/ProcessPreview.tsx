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
    gridClassName: 'grid-cols-[1fr_4fr_1.75fr] xs:max-md:grid-cols-12 md:max-lg:grid-cols-12',
    imageClassNames: [
      'col-start-1 row-span-2 xs:max-md:col-span-2 md:max-lg:col-span-2',
      'col-start-2 row-span-2 xs:max-md:col-start-3 xs:max-md:col-span-7 md:max-lg:col-start-3 md:max-lg:col-span-7',
      'col-start-3 row-start-1 xs:max-md:col-start-10 xs:max-md:col-span-3 md:max-lg:col-start-10 md:max-lg:col-span-3',
      'col-start-3 row-start-2 xs:max-md:col-start-10 xs:max-md:col-span-3 md:max-lg:col-start-10 md:max-lg:col-span-3',
    ],
  },
  1: {
    gridClassName: 'aspect-[3/2] grid-cols-4 xs:max-md:grid-cols-4 md:max-lg:grid-cols-4',
    imageClassNames: [
      'col-start-1 col-end-3 row-start-1 row-end-3',
      'col-start-3 col-end-5 row-start-1 row-end-2',
      'col-start-3 col-end-4 row-start-2 row-end-3',
      'col-start-4 col-end-5 row-start-2 row-end-3 object-[50%_23%]',
    ],
  },
  2: {
    gridClassName: 'grid-cols-[27fr_43fr_30fr] xs:max-md:grid-cols-10 md:max-lg:grid-cols-10',
    imageClassNames: [
      'col-start-1 col-end-3 row-start-1 row-end-2 xs:max-md:col-end-8 md:max-lg:col-end-8',
      'col-start-3 col-end-4 row-start-1 row-end-3 xs:max-md:col-start-8 xs:max-md:col-end-11 md:max-lg:col-start-8 md:max-lg:col-end-11',
      'col-start-1 col-end-2 row-start-2 row-end-3 xs:max-md:col-end-4 md:max-lg:col-end-4',
      'col-start-2 col-end-3 row-start-2 row-end-3 xs:max-md:col-start-4 xs:max-md:col-end-8 md:max-lg:col-start-4 md:max-lg:col-end-8',
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
      className={`grid h-[500px] w-[70vw] max-w-5xl grid-rows-2 gap-2 xs:max-md:aspect-[2.7/1] xs:max-md:h-auto xs:max-md:w-full xs:max-md:max-w-none xs:max-md:gap-1 md:max-lg:h-[clamp(320px,42vw,380px)] md:max-lg:w-[calc(100vw-220px)] md:max-lg:max-w-[720px] 2xl:h-[700px] 2xl:w-[70vw] 2xl:max-w-none ${layout.gridClassName}`}
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
