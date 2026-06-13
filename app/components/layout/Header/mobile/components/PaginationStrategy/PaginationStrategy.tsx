'use client';

import { FC } from 'react';
import { Pagination } from './Pagination';
import { PaginationProps } from './types';
import { LoadMore } from './LoadMore';
import {
  ALL_PAINTINGS_API_MODE,
  PaginationStrategyVariantT,
} from '@/utils/route-handlers/types/filter-options.type';

type PaginationStrategyProps = PaginationProps & {
  variant: PaginationStrategyVariantT;
};

export const PaginationStrategy: FC<PaginationStrategyProps> = ({ variant, ...rest }) => {
  if (rest.totalPages <= 1) return null;

  if (variant === ALL_PAINTINGS_API_MODE.LOAD_MORE) return <LoadMore {...rest} />;

  return <Pagination {...rest} />;
};
