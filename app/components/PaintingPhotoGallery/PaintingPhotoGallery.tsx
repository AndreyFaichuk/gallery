'use client';

import type { FC } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Share from 'yet-another-react-lightbox/plugins/share';
import Video from 'yet-another-react-lightbox/plugins/video';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/styles.css';

type PaintingPhotoGalleryProps = {
  paintingId: string;
  isOpened: boolean;
  index: number;
  onClose: VoidFunction;
  paintingPreparedImageUrls: string[];
  paintingPreparedVideoUrls: string[];
};

export const PaintingPhotoGallery: FC<PaintingPhotoGalleryProps> = ({
  index,
  onClose,
  isOpened,
  paintingPreparedImageUrls,
  paintingPreparedVideoUrls,
  paintingId,
}) => {
  const picturesSlides = paintingPreparedImageUrls.map((imageUrl) => ({
    src: imageUrl,

    share: {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/paintings/${paintingId}`,
    },
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

    share: {
      url: `${process.env.NEXT_PUBLIC_APP_URL}/paintings/${paintingId}`,
    },
  }));

  return (
    <Lightbox
      index={index}
      plugins={[Share, Video, Zoom]}
      open={isOpened && index > -1}
      close={onClose}
      slides={[...picturesSlides, ...videosSlides]}
      animation={{ zoom: 500 }}
      zoom={{
        maxZoomPixelRatio: 6,
        zoomInMultiplier: 3,
        doubleTapDelay: 300,
        doubleClickDelay: 300,
        doubleClickMaxStops: 4,
        keyboardMoveDistance: 50,
        wheelZoomDistanceFactor: 100,
        pinchZoomDistanceFactor: 100,
        scrollToZoom: true,
      }}
    />
  );
};
