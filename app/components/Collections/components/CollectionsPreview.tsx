'use client';

import { CollectionT } from '@/types';
import { CollectionItem } from './CollectionItem';

type CollectionsPreviewProps = {
  collections: CollectionT[];
};

const PREVIEW_SLOTS = [
  {
    className: 'md:col-[1_/_9] md:row-[1_/_2]',
    imageClassName: 'scale-[2.25] object-[52%_48%] md:scale-[2.05] md:object-[50%_48%]',
  },
  {
    className: 'md:col-[9_/_14] md:row-[1_/_2]',
    imageClassName: 'scale-[2] object-[50%_43%] md:scale-[1.75] md:object-[48%_43%]',
  },
  {
    className: 'md:col-[1_/_5] md:row-[2_/_3]',
    imageClassName: 'scale-[2.25] object-[50%_50%] md:scale-[2.15] md:object-[50%_50%]',
  },
  {
    className: 'md:col-[5_/_10] md:row-[2_/_3]',
    imageClassName: 'scale-[1.2] object-[50%_45%] md:scale-[1.6] md:object-[50%_45%]',
  },
  {
    className: 'md:col-[10_/_14] md:row-[2_/_3]',
    imageClassName: 'scale-[2.15] object-[52%_46%] md:scale-[1.95] md:object-[52%_46%]',
  },
];

export const CollectionsPreview = ({ collections }: CollectionsPreviewProps) => {
  const previewImages = collections.slice(0, PREVIEW_SLOTS.length);

  if (!previewImages.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 gap-1.5 md:aspect-[1.93] md:grid-cols-[repeat(13,minmax(0,1fr))] md:grid-rows-[1.29fr_1fr] md:gap-2 2xl:aspect-[2.45]">
      {previewImages.map((collection, index) => {
        const previewSlot = PREVIEW_SLOTS[index];

        return (
          <CollectionItem
            key={collection.id}
            collection={collection}
            className={previewSlot.className}
            imageClassName={previewSlot.imageClassName}
          />
        );
      })}
    </div>
  );
};
