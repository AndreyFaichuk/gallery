'use client';

import type { FC } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Share from 'yet-another-react-lightbox/plugins/share';
import Video from 'yet-another-react-lightbox/plugins/video';

import 'yet-another-react-lightbox/styles.css';

type PaintingPhotoGalleryProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  paintingPreparedImageUrls: string[];
  paintingPreparedVideoUrls: string[];
};

export const PaintingPhotoGallery: FC<PaintingPhotoGalleryProps> = ({
  isOpen,
  setIsOpen,
  paintingPreparedImageUrls,
  paintingPreparedVideoUrls,
}) => {
  const picturesSlides = paintingPreparedImageUrls.map((imageUrl) => ({
    src: imageUrl,
  }));

  const videosSlides = paintingPreparedVideoUrls.map((videoUrl) => ({
    type: 'video' as const,
    autoPlay: true,
    sources: [
      {
        src: videoUrl,
        type: 'video/mp4',
        width: 1280,
        height: 720,
      },
    ],
  }));

  return (
    <Lightbox
      plugins={[Share, Video]}
      open={isOpen}
      close={() => setIsOpen(false)}
      slides={[...picturesSlides, ...videosSlides]}
    />
  );
};
