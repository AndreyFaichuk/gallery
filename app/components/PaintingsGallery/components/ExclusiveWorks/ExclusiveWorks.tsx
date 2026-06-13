'use client';

import { PaintingT } from '@/types';
import { CircleChevronLeft, CircleChevronRight, Sparkles } from 'lucide-react';
import { FC, useState } from 'react';
import { ExclusivePaintingPreview } from './ExclusivePaintingPreview';
import { formatDimension, getMediaContentUrl } from '@/utils';
import { PaintingPhotoGallery } from '@/app/components/PaintingPhotoGallery';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/app/lib/utils';
import { Separator } from '@/app/components/ui';

type ExclusiveWorksProps = {
  exclusiveItems: PaintingT[];
};

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -40 : 40,
    opacity: 0,
  }),
};

export const ExclusiveWorks: FC<ExclusiveWorksProps> = ({ exclusiveItems }) => {
  const [exclusiveWorkIndex, setExclusiveWorkIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [isPhotoGalleryIndex, setIsPhotoGalleryIndex] = useState(-1);
  const [isOpenedPhotoGallery, setIsOpenedPhotoGallery] = useState(false);

  const images = exclusiveItems[exclusiveWorkIndex].imageUrls.map((path) =>
    getMediaContentUrl(`${exclusiveItems[exclusiveWorkIndex].id}/${path}`),
  );

  const imageName = exclusiveItems[exclusiveWorkIndex].name;

  const dimensions = formatDimension(
    exclusiveItems[exclusiveWorkIndex].width,
    exclusiveItems[exclusiveWorkIndex].height,
  );

  const handleSetCurrentPictureIndex = (index: number) => {
    setIsPhotoGalleryIndex(index);
    setIsOpenedPhotoGallery(true);
  };

  const handleIncreaseExclusiveWorkIndex = () => {
    setDirection(1);

    setExclusiveWorkIndex((prev) => {
      if (prev === exclusiveItems.length - 1) return prev;
      return (prev += 1);
    });
  };

  const handleDecreaseExclusiveWorkIndex = () => {
    setDirection(-1);

    setExclusiveWorkIndex((prev) => {
      if (prev === 0) return prev;
      return (prev -= 1);
    });
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex-wrap flex w-full items-center justify-between">
        <div className="flex gap-4 items-start">
          <Sparkles />
          <div className="w-[200px] xs:w-[250px] md:w-[400px] flex flex-col items-start gap-2">
            <h2 className="text-2xl font-semibold leading-none -mt-1">Exclusive Works</h2>
            <span>
              These paintings are represented by our art parthers and are not available for purchase
              through the website
            </span>
          </div>
        </div>
        <div className="gap-4 md:gap-2 flex">
          <CircleChevronLeft
            className={cn('size-10 md:size-8 cursor-pointer', {
              'text-gray-400': exclusiveWorkIndex === 0,
            })}
            onClick={handleDecreaseExclusiveWorkIndex}
          />

          <CircleChevronRight
            className={cn('size-10 md:size-8 cursor-pointer', {
              'text-gray-400': exclusiveWorkIndex === exclusiveItems.length - 1,
            })}
            onClick={handleIncreaseExclusiveWorkIndex}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={exclusiveItems[exclusiveWorkIndex].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          <div className="relative">
            <ExclusivePaintingPreview
              images={images}
              onPaintingClick={handleSetCurrentPictureIndex}
            />

            <div className="absolute flex flex-col gap-2 bottom-[15px] left-3.5">
              <h2 className="text-lg font-medium text-white">{imageName}</h2>
              <span className="text-xs font-normal text-white">{dimensions}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <span className="m-auto">
        {exclusiveWorkIndex + 1} / {exclusiveItems.length}
      </span>

      <Separator />

      <PaintingPhotoGallery
        paintingId={exclusiveItems[exclusiveWorkIndex].id}
        isOpened={isOpenedPhotoGallery}
        index={isPhotoGalleryIndex}
        onClose={() => {
          setIsOpenedPhotoGallery(false);
          setIsPhotoGalleryIndex(-1);
        }}
        paintingPreparedImageUrls={images}
        paintingPreparedVideoUrls={[]}
      />
    </div>
  );
};
