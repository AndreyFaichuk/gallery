'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { Button } from '@/components/ui';

type SuggestionMobileProps = {
  suggestion: string;
};

export const SuggestionMobile: FC<SuggestionMobileProps> = ({ suggestion }) => {
  return (
    <Button asChild className="w-full" variant="secondary">
      <Link href={`/collections/search?query=${suggestion}`}>{suggestion}</Link>
    </Button>
  );
};
