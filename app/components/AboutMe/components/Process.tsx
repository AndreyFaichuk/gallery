'use client';

import { getMediaContentUrl } from '@/utils';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../constants';
import { useSlideContent } from '@/hooks';
import { ProcessPreview } from './ProcessPreview';
import { MoveLeft, MoveRight } from 'lucide-react';
import { cn } from '@/app/lib/utils';
import { AnimatedSlider } from '../../AnimatedSlider';
import { PaintingPhotoGallery } from '../../PaintingPhotoGallery';
import { useState } from 'react';

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
    <section className="flex flex-col px-12 lg:px-24 gap-10">
      <div className="flex justify-center items-center gap-4">
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
        <h2 className="text-xs uppercase tracking-widest text-stone-500 sm:text-lg">
          inside studio & process
        </h2>
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
      </div>

      <div className="flex items-start justify-between">
        <div className="flex flex-col mt-56 w-32 gap-4">
          <MoveLeft
            className={cn('size-10 md:size-8 cursor-pointer', {
              'text-gray-400': currentIndex === 0,
            })}
            onClick={() => {
              if (currentIndex === 0) return;

              handleDecreaseIndex();
            }}
          />

          <p className="2xl:text-[17px] 2xl:leading-[1.55] font-body">
            A glimpse into my world and the journey behind each work, tracing every idea from its
            first spark to its final form.
          </p>
        </div>
        <div className="flex flex-col gap-4">
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

          <span className="m-auto 2xl:text-lg">
            {currentIndex + 1} / {Object.values(process).length}
          </span>
        </div>

        <MoveRight
          className={cn('size-10 md:size-8 cursor-pointer mt-56', {
            'text-gray-400': currentIndex === Object.values(process).length - 1,
          })}
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
