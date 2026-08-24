'use client';

import type { PaintingT } from '@/types';
import { CircleChevronLeft, CircleChevronRight, Sparkles } from 'lucide-react';
import { type FC, useState } from 'react';
import { ExclusivePaintingPreview } from './ExclusivePaintingPreview';
import { formatDimension, getMediaContentUrl } from '@/utils';
import { PaintingPhotoGallery } from '@/components/PaintingPhotoGallery';
import { cn } from '@/utils/cn';
import { useSlideContent } from '@/hooks';
import { AnimatedSlider } from '@/components/AnimatedSlider';

type ExclusiveWorksProps = {
  exclusiveItems: PaintingT[];
};

export const ExclusiveWorks: FC<ExclusiveWorksProps> = ({ exclusiveItems }) => {
  const { currentIndex, direction, handleDecreaseIndex, handleIncreaseIndex, setIsAnimating } =
    useSlideContent();

  const [isPhotoGalleryIndex, setIsPhotoGalleryIndex] = useState(-1);
  const [isOpenedPhotoGallery, setIsOpenedPhotoGallery] = useState(false);

  const currentItem = exclusiveItems[currentIndex];

  const images = currentItem.imageUrls.map((path) =>
    getMediaContentUrl(`paintings/${currentItem.id}/${path}`),
  );

  const imageName = currentItem.name;

  const dimensions = formatDimension(currentItem.width, currentItem.height);

  const handleSetCurrentPictureIndex = (index: number) => {
    setIsPhotoGalleryIndex(index);
    setIsOpenedPhotoGallery(true);
  };

  return (
    <div className="flex flex-col w-full gap-6">
      <div className="flex-wrap flex w-full items-center justify-between">
        <div className="gap-4 items-start hidden xs:flex">
          <div className="flex gap-4">
            <Sparkles />
            <div className="w-[200px] xs:w-[250px] md:w-[400px] flex flex-col items-start gap-2">
              <h2 className="text-2xl font-semibold leading-none -mt-1">Exclusive Works</h2>
              <span>
                These paintings are represented by our art parthers and are not available for
                purchase through the website
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 w-full justify-center mb-2 xs:hidden">
          <Sparkles />
          <h2 className="text-2xl font-semibold leading-none -mt-1">Exclusive Works</h2>
        </div>
        <div className="flex gap-4 items-start flex-col xs:hidden">
          <div className="w-[260px] md:w-[400px] flex flex-col items-start gap-2">
            <span>
              These paintings are represented by our art parthers and are not available for purchase
              through the website
            </span>
          </div>
        </div>

        <div className="gap-4 md:gap-2 flex">
          <CircleChevronLeft
            className={cn('size-10 md:size-8 cursor-pointer', {
              'text-gray-400': currentIndex === 0,
            })}
            onClick={() => {
              if (currentIndex === 0) return;

              handleDecreaseIndex();
            }}
          />

          <CircleChevronRight
            className={cn('size-10 md:size-8 cursor-pointer', {
              'text-gray-400': currentIndex === exclusiveItems.length - 1,
            })}
            onClick={() => {
              if (currentIndex === exclusiveItems.length - 1) return;

              handleIncreaseIndex();
            }}
          />
        </div>
      </div>

      <AnimatedSlider
        direction={direction}
        id={currentItem.id}
        handleIncreaseIndex={handleIncreaseIndex}
        handleDecreaseIndex={handleDecreaseIndex}
        setIsAnimating={setIsAnimating}
        shouldStopBackward={currentIndex === 0}
        shouldStopForward={currentIndex === exclusiveItems.length - 1}
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
      </AnimatedSlider>

      <span className="m-auto">
        {currentIndex + 1} / {exclusiveItems.length}
      </span>

      <PaintingPhotoGallery
        paintingId={currentItem.id}
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
