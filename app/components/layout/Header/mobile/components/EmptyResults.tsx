import Image from 'next/image';
import { FC } from 'react';

type EmptyResultsProps = {
  query: string;
};

export const EmptyResults: FC<EmptyResultsProps> = ({ query }) => {
  return (
    <div className="flex justify-center mt-14 flex-col gap-4 items-center">
      <Image src="/empty-result.svg" width={120} height={120} alt="Empty state" />
      <span className="text-foreground">We couldn&apo;t find any results for {query}</span>
    </div>
  );
};
