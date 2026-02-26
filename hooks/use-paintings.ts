import type { PaintingT } from '@/types/schema-types';
import { useQuery } from '@tanstack/react-query';

export const paintingsQueryKeys = {
  paintings: {
    all: (query: string) => ['paintings', 'all', query],
  },
};

type UsePaintingsProps = {
  query: string;
};

const usePaintings = ({ query }: UsePaintingsProps) => {
  const {
    data: paintings = [],
    isLoading: arePaintingsLoading,
    error,
    isError,
    refetch,
  } = useQuery<PaintingT[]>({
    queryKey: paintingsQueryKeys.paintings.all(query),
    queryFn: async () => {
      const searchParams = new URLSearchParams();

      if (query) {
        searchParams.set('q', query);
      }

      const response = await fetch(`/api/paintings/?${searchParams.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch paintings');
      }

      return response.json();
    },
    enabled: !!query,
  });

  return {
    paintings,
    arePaintingsLoading,
    error,
    isError,
    refetch,
  };
};

export default usePaintings;
