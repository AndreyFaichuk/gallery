'use client';

import type { FC } from 'react';
import { Pagination } from './Pagination';
import type { PaginationProps } from './PaginationStrategy.types';
import { LoadMore } from './LoadMore';
import {
  ALL_PAINTINGS_API_MODE,
  type PaginationStrategyVariantT,
} from '@/services/gallery/types';

type PaginationStrategyProps = PaginationProps & {
  variant: PaginationStrategyVariantT;
};

export const PaginationStrategy: FC<PaginationStrategyProps> = ({ variant, ...rest }) => {
  if (rest.totalPages <= 1) return null;

  if (variant === ALL_PAINTINGS_API_MODE.LOAD_MORE) return <LoadMore {...rest} />;

  return <Pagination {...rest} />;
};
