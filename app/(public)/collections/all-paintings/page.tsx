import { PaintingsCatalog } from '@/app/components/PaintingsCatalog';
import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import getAllPaintings from '@/utils/routeHandlers/getAllPaintings';

interface Props {
  searchParams: Promise<{ query?: string; collection?: string; availability?: '1' | '0' }>;
}

const AllPaintings = async ({ searchParams }: Props) => {
  const { collection, availability, query } = await searchParams;

  const { filters, items } = await getAllPaintings({
    collectionId: collection,
    isAvailable: availability,
    query,
  });

  return (
    <div>
      <PaintingsFilterBar filters={filters} />
      <PaintingsCatalog />
    </div>
  );
};

export default AllPaintings;
