import { PaintingDetails } from '@/app/components/PaintingDetails';
import type { PaintingPageParams } from '@/types/painting-types';
import getPainting from '@/utils/routeHandlers/getPainting';
import { redirect } from 'next/navigation';

const test = {
  id: '4f3ca870-52e0-4d2c-aef7-fed9f627112d',
  name: 'Mona Lisa',
  description:
    'A timeless Renaissance portrait depicting a woman with an enigmatic smile. The soft sfumato technique and subtle background landscape create depth and emotional complexity.',
  price: '2595',
  imageUrls: ['IMG_8896.JPG', 'IMG_8897.JPG', 'IMG_8918.JPG', 'IMG_8922.JPG', 'IMG_8930.JPG'],
  videoUrls: ['IMG_8950.MOV', 'IMG_8952.MOV'],
  isAvailable: true,
  collectionId: '5c131120-73e9-4d10-bf41-c6a8a19e3e84',
  createdAt: new Date('2025-11-24T18:09:25.000Z'),
  width: 50,
  height: 90,
  year: 2026,
  specifications:
    'Handcrafted on stretched canvas using premium acrylic pigments and contemporary layered painting techniques. The composition is built through successive applications of color, controlled blending, and selective texture to achieve visual balance and material richness. Finished with a durable protective coating to support longevity and maintain the integrity of the painted surface.',
};

const exchange = { EUR: 0.872334, UAH: 44.09512, USD: 1 };

const PaintingPage = async ({ params }: PaintingPageParams) => {
  const { id } = await params;

  const painting = await getPainting({ id });

  if (!painting) return redirect('/');

  return <PaintingDetails painting={test} exchange={exchange} />;
};

export default PaintingPage;
