'use client';

import { PaintingT } from '@/types';
import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getMediaContentUrl } from '@/utils';

type AllPaintingsGalleryItemProps = {
  painting: PaintingT;
};

type AllPaintingsGalleryItemShellProps = {
  children: ReactNode;
};

export const AllPaintingsGalleryItemShell: FC<AllPaintingsGalleryItemShellProps> = ({
  children,
}) => {
  return (
    <motion.div
      className="w-full flex flex-col gap-4 group max-w-[350px] min-[2500px]:max-w-[420px]"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      {children}
    </motion.div>
  );
};

export const AllPaintingsGalleryItem: FC<AllPaintingsGalleryItemProps> = ({ painting }) => {
  const firstImage = getMediaContentUrl(`paintings/${painting.id}/${painting.imageUrls[0]}`);
  const secondImage = getMediaContentUrl(`paintings/${painting.id}/${painting.imageUrls[1]}`);

  return (
    <AllPaintingsGalleryItemShell>
      <div className="relative overflow-hidden rounded-lg">
        <motion.div
          variants={{
            rest: { opacity: 1, scale: 1 },
            hover: { opacity: 0, scale: 1.05 },
          }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={firstImage}
            alt="painting"
            width={420}
            height={420}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          variants={{
            rest: { opacity: 0, scale: 1 },
            hover: { opacity: 1, scale: 1.05 },
          }}
          transition={{ duration: 0.35 }}
        >
          <Image
            src={secondImage}
            alt="painting hover"
            width={420}
            height={420}
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-2">
        <h3>{painting.name}</h3>
        <span className="font-medium">{painting.isAvailable ? 'Available' : 'Not available'}</span>
      </div>
    </AllPaintingsGalleryItemShell>
  );
};
