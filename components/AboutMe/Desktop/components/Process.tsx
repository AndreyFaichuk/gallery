'use client';

import { MoveLeft, MoveRight } from 'lucide-react';
import { useState } from 'react';
import { useSlideContent } from '@/hooks';
import { getMediaContentUrl } from '@/utils';
import { cn } from '@/utils/cn';
import { AnimatedSlider } from '../../../AnimatedSlider';
import { PaintingPhotoGallery } from '../../../PaintingPhotoGallery';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../../AboutMe.constants';
import { ProcessPreview } from './ProcessPreview';

export const Process = () => {
  const { process } = IMAGES_CONFIG;

  const { currentIndex, direction, handleDecreaseIndex, handleIncreaseIndex, setIsAnimating } =
    useSlideContent();

  const [isPhotoGalleryIndex, setIsPhotoGalleryIndex] = useState(-1);
  const [isOpenedPhotoGallery, setIsOpenedPhotoGallery] = useState(false);

  const handleSetCurrentPictureIndex = (index: number) => {
    setIsPhotoGalleryIndex(index);
    setIsOpenedPhotoGallery(true);
  };

  const currentItem = Object.values(process)[currentIndex];

  const images = currentItem.map((path) => getMediaContentUrl(`${ABOUT_ME_PREFIX}/${path}`));

  return (
    <section className="flex flex-col gap-10 px-12 xs:max-md:gap-4 xs:max-md:px-10 md:max-lg:gap-8 md:max-lg:px-8 lg:px-24">
      <div className="flex justify-center items-center gap-4 xs:max-md:gap-3">
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
        <h2 className="text-xs uppercase tracking-widest text-stone-500 xs:max-md:text-[10px] sm:text-lg md:max-lg:text-[11px]">
          inside studio & process
        </h2>
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
      </div>

      <div className="flex items-start justify-between xs:max-md:relative xs:max-md:flex-col">
        <div className="mt-56 flex w-32 flex-col gap-4 xs:max-md:contents md:max-lg:mt-[clamp(130px,18vw,170px)] md:max-lg:w-24 md:max-lg:gap-3">
          <MoveLeft
            className={cn(
              'size-10 cursor-pointer xs:max-md:absolute xs:max-md:bottom-0 xs:max-md:left-10 xs:max-md:size-5 md:size-8 md:max-lg:size-6',
              {
                'text-gray-400': currentIndex === 0,
              },
            )}
            onClick={() => {
              if (currentIndex === 0) return;

              handleDecreaseIndex();
            }}
          />

          <p className="font-body xs:max-md:mb-2 xs:max-md:ml-10 xs:max-md:max-w-64 xs:max-md:text-[10px] xs:max-md:leading-[1.35] md:max-lg:text-[13px] md:max-lg:leading-[1.4] 2xl:text-[17px] 2xl:leading-[1.55]">
            A glimpse into my world and the journey behind each work, tracing every idea from its
            first spark to its final form.
          </p>
        </div>
        <div className="flex flex-col gap-4 xs:max-md:w-full xs:max-md:gap-2 md:max-lg:gap-3">
          <AnimatedSlider
            direction={direction}
            id={currentIndex}
            handleIncreaseIndex={handleIncreaseIndex}
            handleDecreaseIndex={handleDecreaseIndex}
            setIsAnimating={setIsAnimating}
            shouldStopBackward={currentIndex === 0}
            shouldStopForward={currentIndex === Object.values(process).length - 1}
          >
            <ProcessPreview
              index={currentIndex}
              images={images}
              onPaintingClick={handleSetCurrentPictureIndex}
            />
          </AnimatedSlider>

          <span className="m-auto xs:max-md:text-xs md:max-lg:text-sm 2xl:text-lg">
            {currentIndex + 1} / {Object.values(process).length}
          </span>
        </div>

        <MoveRight
          className={cn(
            'mt-56 ml-4 size-10 shrink-0 cursor-pointer xs:max-md:absolute xs:max-md:right-10 xs:max-md:bottom-0 xs:max-md:mt-0 xs:max-md:ml-0 xs:max-md:size-5 md:size-8 md:max-lg:mt-[clamp(130px,18vw,170px)] md:max-lg:size-6',
            {
              'text-gray-400': currentIndex === Object.values(process).length - 1,
            },
          )}
          onClick={() => {
            if (currentIndex === Object.values(process).length - 1) return;

            handleIncreaseIndex();
          }}
        />
      </div>

      <PaintingPhotoGallery
        paintingId={''}
        isOpened={isOpenedPhotoGallery}
        index={isPhotoGalleryIndex}
        onClose={() => {
          setIsOpenedPhotoGallery(false);
          setIsPhotoGalleryIndex(-1);
        }}
        paintingPreparedImageUrls={images}
        paintingPreparedVideoUrls={[]}
      />
    </section>
  );
};
