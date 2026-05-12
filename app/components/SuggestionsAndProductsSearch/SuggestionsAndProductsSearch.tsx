'use client';

import { type FC } from 'react';

import type { PaintingT } from '@/types/schema.types';
import { breakpointOptions, useBreakpoint } from '@/hooks';
import { tailwindBreakpoints } from '@/types';
import { SuggestionsAndProductsSearchDesktop } from './desktop/SuggestionsAndProductsSearchDesktop';
import { SuggestionsAndProductsSearchMobile } from './mobile/SuggestionsAndProductsSearchMobile';

type SuggestionsAndProductsSearchProps = {
  suggestions: string[];
  paintings: PaintingT[];
};

export const SuggestionsAndProductsSearch: FC<SuggestionsAndProductsSearchProps> = ({
  paintings,
  suggestions,
}) => {
  const isBelowMobile = useBreakpoint(tailwindBreakpoints.XS, breakpointOptions.BELOW);

  return isBelowMobile ? (
    <div className="xs:hidden"></div>
  ) : (
    <div className="hidden xs:block">
      <SuggestionsAndProductsSearchDesktop paintings={paintings} suggestions={suggestions} />
    </div>
  );
};
