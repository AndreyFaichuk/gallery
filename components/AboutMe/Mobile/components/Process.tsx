import { useSlideContent } from '@/hooks';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../../AboutMe.constants';
import { useState } from 'react';
import { getMediaContentUrl } from '@/utils';
import { MoveLeft, MoveRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { AnimatedSlider } from '@/components/AnimatedSlider';
import { ProcessPreview } from './ProcessPreview';
import { PaintingPhotoGallery } from '@/components/PaintingPhotoGallery';

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
    <section className="flex flex-col gap-2">
      <div className="flex justify-center items-center gap-4">
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
        <h2 className="text-[10px] leading-none uppercase tracking-[0.2em] text-[#8b735e]">
          inside studio & process
        </h2>
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
      </div>

      <div className="flex items-start justify-between xs:max-md:relative xs:max-md:flex-col">
        <div className="flex flex-col gap-4 w-full">
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

          <div className="flex justify-between items-center">
            <MoveLeft
              className={cn('size-6', {
                'text-gray-400': currentIndex === 0,
              })}
              onClick={() => {
                if (currentIndex === 0) return;

                handleDecreaseIndex();
              }}
            />

            <span>
              {currentIndex + 1} / {Object.values(process).length}
            </span>

            <MoveRight
              className={cn('size-6', {
                'text-gray-400': currentIndex === Object.values(process).length - 1,
              })}
              onClick={() => {
                if (currentIndex === Object.values(process).length - 1) return;

                handleIncreaseIndex();
              }}
            />
          </div>
        </div>
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
