'use client';

import { CollectionT } from '@/types';
import { FC } from 'react';
import { CollectionsPreview } from './components/CollectionsPreview';
import { MoreCollections } from './components/MoreCollections';

type CollectionsProps = {
  collections: CollectionT[];
};

export const Collections: FC<CollectionsProps> = ({ collections }) => {
  return (
    <div className="flex flex-col gap-6">
      <CollectionsPreview collections={collections} />
      <MoreCollections />
    </div>
  );
};
