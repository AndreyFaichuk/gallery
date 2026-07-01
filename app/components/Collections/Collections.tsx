'use client';

import { CollectionT } from '@/types';
import { FC } from 'react';

type CollectionsProps = {
  collections: CollectionT[];
};

export const Collections: FC<CollectionsProps> = ({ collections }) => {
  return 'Collections';
};
