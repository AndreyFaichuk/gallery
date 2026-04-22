import type { PaintingT } from '@/types/schema.types';
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
    data: paintingsAndSuggestions = { paintings: [], suggestions: [] },
    isLoading: arePaintingsLoading,
    error,
    isError,
    refetch,
  } = useQuery<{ paintings: PaintingT[]; suggestions: string[] }>({
    queryKey: paintingsQueryKeys.paintings.all(query),
    queryFn: async () => {
      const searchParams = new URLSearchParams();

      if (query) {
        searchParams.set('q', query);
      }

      const response = await fetch(`/api/paintings/?${searchParams.toString()}`);

      if (!response.ok) {
        throw new Error('Failed to fetch paintings or suggestions');
      }

      return response.json();
    },
    enabled: Boolean(query.trim()),
  });

  return {
    paintingsAndSuggestions,
    arePaintingsLoading,
    error,
    isError,
    refetch,
  };
};

export default usePaintings;
