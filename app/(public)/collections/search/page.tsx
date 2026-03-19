import { PaintingSearchCatalog } from '@/app/components/layout/PaintingSearchCatalog';
import { Pagination } from '@/app/components/Pagination';
import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import { SuggestionsAndProductsSearch } from '@/app/components/SuggestionsAndProductsSearch';
import { Input } from '@/app/components/ui/input';
import { PAINTING_ITEM_VARIANT, type PaintingsSearchParamsProps } from '@/types/painting-types';
import getAllPaintings, { type SortParam } from '@/utils/routeHandlers/getAllPaintings';
import getPaintings from '@/utils/routeHandlers/getPaintings';
import getSuggestions from '@/utils/routeHandlers/getSuggestions';

const test = [
  {
    id: '0477e356-4834-411d-9da6-2849bab0fb81',
    name: 'Girl with a Pearl Earring',
    description:
      'An intimate portrait of a young woman illuminated by soft light. The delicate rendering of fabric and the luminous pearl earring create a captivating focal point.',
    dimensions: '44 cm × 39 cm',
    price: '2340',
    images: ['IMG_3304.JPG', 'IMG_3310.JPG'],
    isAvailable: true,
    collectionId: '5c131120-73e9-4d10-bf41-c6a8a19e3e84',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
  },
  {
    id: '4638c72f-3e03-4528-9209-1309b882a730',
    name: 'Golden Fracture',
    description:
      'An expressive abstract piece where sharp golden lines break through darker undertones, symbolizing resilience and transformation.',
    dimensions: '90 cm × 65 cm',
    price: '2000',
    images: ['IMG_8844.JPG', 'IMG_8850.JPG'],
    isAvailable: true,
    collectionId: '106c3d38-92fc-4cb0-9da7-987583ce4198',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
  },
  {
    id: '4f3ca870-52e0-4d2c-aef7-fed9f627112d',
    name: 'Mona Lisa',
    description:
      'A timeless Renaissance portrait depicting a woman with an enigmatic smile. The soft sfumato technique and subtle background landscape create depth and emotional complexity.',
    dimensions: '77 cm × 53 cm',
    price: '2850',
    images: ['IMG_8897.JPG', 'IMG_8896.JPG'],
    isAvailable: true,
    collectionId: '5c131120-73e9-4d10-bf41-c6a8a19e3e84',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
  },
  {
    id: '5a493089-ef5d-4ac8-95e7-8b5684acfe76',
    name: 'Crimson Horizon',
    description:
      'A dramatic abstract landscape dominated by deep crimson tones blending into a fading golden horizon. Thick texture layers add emotional intensity and depth.',
    dimensions: '80 cm × 60 cm',
    price: '2850',
    images: ['IMG_1836.JPG', 'IMG_4068.JPG'],
    isAvailable: true,
    collectionId: '106c3d38-92fc-4cb0-9da7-987583ce4198',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
  },
];

const exchange = { EUR: 0.872334, UAH: 44.09512, USD: 1 };

const AllPaintings = async ({ searchParams }: PaintingsSearchParamsProps) => {
  const { collection, availability, query, page, sort } = await searchParams;

  const { filters, items, totalCount, exchange } = await getAllPaintings({
    collectionId: collection,
    isAvailable: availability,
    page: page ? Number(page) : undefined,
    query,
    sort,
  });

  const [suggestions, paintings] = await Promise.all([
    getSuggestions({ query: query ?? '' }),
    getPaintings({ query: query ?? '' }),
  ]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <SuggestionsAndProductsSearch paintings={paintings} suggestions={suggestions} />
      <PaintingsFilterBar filters={filters} totalCount={totalCount}>
        <PaintingSearchCatalog items={items} exchange={exchange} />
      </PaintingsFilterBar>
    </div>
  );
};

export default AllPaintings;
