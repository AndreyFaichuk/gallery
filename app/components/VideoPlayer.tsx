'use client';

import type { FC } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '../lib/utils';

const ReactPlayer = dynamic(() => import('react-player'), {
  ssr: false,
});

interface Props {
  url: string;
  className?: string;
}

const VideoPlayer: FC<Props> = ({ url, className }) => {
  return (
    <div className={cn('h-full w-full', className)}>
      <ReactPlayer
        src={url}
        width="100%"
        height="100%"
        controls
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default VideoPlayer;
