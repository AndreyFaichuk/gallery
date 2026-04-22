import type { PaintingT } from '@/types/schema.types';
import { getMediaContentUrl } from '@/utils';
import Image from 'next/image';
import { useState, type FC } from 'react';
import VideoPlayer from '../VideoPlayer';
import { PaintingPhotoGallery } from './PaintingPhotoGallery';

type PhotoCollageProps = Pick<PaintingT, 'name' | 'imageUrls' | 'id' | 'videoUrls'>;

export const PhotoCollage: FC<PhotoCollageProps> = ({ imageUrls, name, id, videoUrls }) => {
  const [isPhotoGalleryOpen, setIsPhotoGalleryOpen] = useState(-1);

  const paintingPreparedImageUrls = imageUrls.map((image) => getMediaContentUrl(`${id}/${image}`));

  const paintingPreparedVideoUrls = videoUrls.map((video) =>
    getMediaContentUrl(`${id}/videos/${video}`),
  );

  const mainImage = paintingPreparedImageUrls[0];
  const galleryImages = paintingPreparedImageUrls.slice(1);

  const handleSetCurrentPictureIndex = (index: number) => {
    setIsPhotoGalleryOpen(index);
  };

  return (
    <>
      <div className="grid gap-3 w-4/10">
        {mainImage && (
          <div
            className="relative overflow-hidden w-full aspect-[7/9] cursor-pointer"
            onClick={() => handleSetCurrentPictureIndex(0)}
            onKeyDown={() => {}}
          >
            <Image src={mainImage} alt={name} fill className="object-cover" />
          </div>
        )}

        {galleryImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {galleryImages.map((src, index) => (
              <div
                key={src}
                className="relative overflow-hidden w-full aspect-[7/9] cursor-pointer"
                onClick={() => handleSetCurrentPictureIndex(index + 1)}
                onKeyDown={() => {}}
              >
                <Image
                  src={src}
                  alt={`${name} detail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {paintingPreparedVideoUrls.map((src) => (
              <div className="relative aspect-[7/9] w-full overflow-hidden" key={src}>
                <VideoPlayer url={src} className="absolute inset-0 h-full w-full" />
              </div>
            ))}
          </div>
        )}
      </div>
      <PaintingPhotoGallery
        index={isPhotoGalleryOpen}
        setIndex={setIsPhotoGalleryOpen}
        paintingPreparedImageUrls={paintingPreparedImageUrls}
        paintingPreparedVideoUrls={paintingPreparedVideoUrls}
      />
    </>
  );
};
