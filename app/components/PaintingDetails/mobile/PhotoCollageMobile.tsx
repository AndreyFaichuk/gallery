'use client';

import { FC, useState } from 'react';
import { PhotoCollageDesktopProps } from '../desktop';
import { getMediaContentUrl } from '@/utils';
import { Maximize2, Play } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/app/lib/utils';
import { Button } from '../../ui/button';
import { PaintingPhotoGallery } from '../../PaintingPhotoGallery';

type GalleryItem = {
  type: 'image' | 'video';
  src: string;
};

type PhotoCollageMobileProps = PhotoCollageDesktopProps;

export const PhotoCollageMobile: FC<PhotoCollageMobileProps> = ({
  id,
  imageUrls,
  name,
  videos,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpenedPhotoGallery, setIsOpenedPhotoGallery] = useState(false);

  const handleSetCurrentPictureIndex = (index: number) => {
    setActiveIndex(index);
  };

  const handleOpenPhotoGallery = () => {
    setIsOpenedPhotoGallery(true);
  };

  const isVideoExists = videos.some((video) => video.src && video.thumbnail);

  const paintingPreparedImageUrls = imageUrls.map((image) => getMediaContentUrl(`${id}/${image}`));

  const paintingPreparedVideoUrls = videos?.map((video) =>
    getMediaContentUrl(`${id}/videos/${video.src}`),
  );

  const paintingThumbnailVideoUrls = videos?.map((video) =>
    getMediaContentUrl(`${id}/thumbnails/${video.thumbnail}`),
  );

  const items: GalleryItem[] = [
    ...paintingPreparedImageUrls.map((preparedImageUrl) => ({
      type: 'image' as const,
      src: preparedImageUrl,
    })),

    ...(isVideoExists
      ? paintingThumbnailVideoUrls.map((preparedVideoUrl) => ({
          type: 'video' as const,
          src: preparedVideoUrl,
        }))
      : []),
  ];

  const active = items[activeIndex];

  return (
    <>
      <div className="w-full">
        <div
          className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100"
          onClick={handleOpenPhotoGallery}
        >
          <Image
            src={active.src}
            alt={name}
            fill
            sizes="100vw"
            className="object-cover"
            priority={activeIndex === 0}
          />

          {active.type == 'image' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Maximize2 className="size-8 fill-white text-white absolute right-[15px] top-[15px]" />
            </div>
          )}

          {active.type === 'video' && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Play className="size-8 fill-white text-white" />
            </div>
          )}
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {items.map((item, index) => (
            <Button
              variant="default"
              key={`${item.src}-${index}`}
              onClick={() => handleSetCurrentPictureIndex(index)}
              className={cn(
                'relative h-20 w-20 shrink-0 overflow-hidden rounded-md border-1',
                activeIndex === index ? 'border-black' : 'border-transparent',
              )}
            >
              <Image
                src={item.src}
                alt={`${name}-${index}`}
                fill
                sizes="80px"
                className="object-cover"
              />

              {item.type === 'video' && isVideoExists && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="size-6 fill-white text-white" />
                </div>
              )}
            </Button>
          ))}
        </div>
      </div>
      <PaintingPhotoGallery
        paintingId={id}
        isOpened={isOpenedPhotoGallery}
        index={activeIndex}
        onClose={() => setIsOpenedPhotoGallery(false)}
        paintingPreparedImageUrls={paintingPreparedImageUrls}
        paintingPreparedVideoUrls={isVideoExists ? paintingPreparedVideoUrls : []}
      />
    </>
  );
};
