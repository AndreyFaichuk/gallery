import { PaintingSearchCatalog } from '@/app/components/layout/PaintingSearchCatalog';
import { PaintingsFilterBar } from '@/app/components/PaintingsFilterBar';
import { SuggestionsAndProductsSearch } from '@/app/components/SuggestionsAndProductsSearch';
import type { PaintingsSearchParamsProps } from '@/types/painting-types';
import getAllPaintings from '@/utils/routeHandlers/getAllPaintings';
import getPaintings from '@/utils/routeHandlers/getPaintings';
import getSuggestions from '@/utils/routeHandlers/getSuggestions';

const test = [
  {
    id: '0477e356-4834-411d-9da6-2849bab0fb81',
    name: 'Girl with a Pearl Earring',
    description:
      'An intimate portrait of a young woman illuminated by soft light. The delicate rendering of fabric and the luminous pearl earring create a captivating focal point.',
    price: '2340',
    imageUrls: ['IMG_3304.JPG', 'IMG_3310.JPG'],
    videoUrls: [],
    isAvailable: true,
    collectionId: '5c131120-73e9-4d10-bf41-c6a8a19e3e84',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
    width: 50,
    height: 90,
    year: 2026,
    specifications:
      'Handcrafted on stretched canvas using premium acrylic pigments and contemporary layered painting techniques. The composition is built through successive applications of color, controlled blending, and selective texture to achieve visual balance and material richness. Finished with a durable protective coating to support longevity and maintain the integrity of the painted surface.',
  },
  {
    id: '4638c72f-3e03-4528-9209-1309b882a730',
    name: 'Golden Fracture',
    description:
      'An expressive abstract piece where sharp golden lines break through darker undertones, symbolizing resilience and transformation.',
    price: '2000',
    imageUrls: ['IMG_8844.JPG', 'IMG_8850.JPG'],
    videoUrls: [],
    isAvailable: true,
    collectionId: '106c3d38-92fc-4cb0-9da7-987583ce4198',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
    width: 50,
    height: 90,
    year: 2026,
    specifications:
      'Handcrafted on stretched canvas using premium acrylic pigments and contemporary layered painting techniques. The composition is built through successive applications of color, controlled blending, and selective texture to achieve visual balance and material richness. Finished with a durable protective coating to support longevity and maintain the integrity of the painted surface.',
  },
  {
    id: '4f3ca870-52e0-4d2c-aef7-fed9f627112d',
    name: 'Mona Lisa',
    description:
      'A timeless Renaissance portrait depicting a woman with an enigmatic smile. The soft sfumato technique and subtle background landscape create depth and emotional complexity.',
    price: '2850',
    imageUrls: ['IMG_8897.JPG', 'IMG_8896.JPG'],
    videoUrls: [],
    isAvailable: true,
    collectionId: '5c131120-73e9-4d10-bf41-c6a8a19e3e84',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
    width: 50,
    height: 90,
    year: 2026,
    specifications:
      'Handcrafted on stretched canvas using premium acrylic pigments and contemporary layered painting techniques. The composition is built through successive applications of color, controlled blending, and selective texture to achieve visual balance and material richness. Finished with a durable protective coating to support longevity and maintain the integrity of the painted surface.',
  },
  {
    id: '5a493089-ef5d-4ac8-95e7-8b5684acfe76',
    name: 'Crimson Horizon',
    description:
      'A dramatic abstract landscape dominated by deep crimson tones blending into a fading golden horizon. Thick texture layers add emotional intensity and depth.',
    price: '2850',
    imageUrls: ['IMG_1836.JPG', 'IMG_4068.JPG'],
    videoUrls: [],
    isAvailable: true,
    collectionId: '106c3d38-92fc-4cb0-9da7-987583ce4198',
    createdAt: new Date('2026-03-04T18:09:25.438Z'),
    width: 50,
    height: 90,
    year: 2026,
    specifications:
      'Handcrafted on stretched canvas using premium acrylic pigments and contemporary layered painting techniques. The composition is built through successive applications of color, controlled blending, and selective texture to achieve visual balance and material richness. Finished with a durable protective coating to support longevity and maintain the integrity of the painted surface.',
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
    <>
      <SuggestionsAndProductsSearch paintings={paintings} suggestions={suggestions} />
      <PaintingsFilterBar filters={filters} totalCount={totalCount}>
        <PaintingSearchCatalog items={items} exchange={exchange} />
      </PaintingsFilterBar>
    </>
  );
};

export default AllPaintings;
