'use client';

import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import { FC } from 'react';

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
