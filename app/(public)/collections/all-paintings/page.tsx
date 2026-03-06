import { PaintingsCatalog } from '@/app/components/PaintingsCatalog';
import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import getAllPaintings from '@/utils/routeHandlers/getAllPaintings';

const test = [
  {
    name: 'Availability',
    param: 'availability',
    options: [
      {
        label: 'In stock',
        value: '1',
        count: 10,
      },
      {
        label: 'Out of stock',
        value: '0',
        count: 0,
      },
    ],
  },
  {
    name: 'Collections',
    param: 'collection',
    options: [
      {
        label: 'Renaissance Classics',
        value: '5c131120-73e9-4d10-bf41-c6a8a19e3e84',
        count: 2,
      },
      {
        label: 'Emotional Landscapes',
        value: 'b8dd9d7d-b4de-4509-a4e6-3576444efebe',
        count: 2,
      },
      {
        label: 'Urban & Contemporary',
        value: '41b2ccf7-2148-4709-9b8b-5bd8f0776f4b',
        count: 2,
      },
      {
        label: 'Abstract Expressions',
        value: '106c3d38-92fc-4cb0-9da7-987583ce4198',
        count: 2,
      },
      {
        label: 'Modern Minimalism',
        value: '93d24a70-1e7b-4d0d-afa6-7d59c5bdc108',
        count: 2,
      },
    ],
  },
];

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
      <PaintingsFilterBar filters={test} />
      <PaintingsCatalog />
    </div>
  );
};

export default AllPaintings;
