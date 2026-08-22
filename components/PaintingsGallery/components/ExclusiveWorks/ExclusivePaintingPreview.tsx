import Image from 'next/image';

type ExclusivePaintingPreviewProps = {
  images: string[];
  onPaintingClick: (index: number) => void;
};

const PREVIEW_SLOTS = [
  'col-[1_/_3] row-[1_/_2] md:col-[1_/_5] md:row-[1_/_3]',
  'col-[1_/_3] row-[2_/_3] md:col-[5_/_9] md:row-[1_/_2]',
  'col-[2_/_3] row-[3_/_4] md:col-[9_/_13] md:row-[1_/_2]',
  'col-[1_/_2] row-[3_/_4] md:col-[5_/_10] md:row-[2_/_3]',
  'col-[1_/_3] row-[4_/_5] md:col-[10_/_13] md:row-[2_/_3]',
];

export const ExclusivePaintingPreview = ({
  images,
  onPaintingClick,
}: ExclusivePaintingPreviewProps) => {
  const previewImages = images.slice(0, PREVIEW_SLOTS.length);

  if (!previewImages.length) {
    return null;
  }

  return (
    <div className="grid aspect-[4/5] grid-cols-[1.18fr_0.95fr] grid-rows-[1.15fr_0.5fr_0.9fr_0.5fr] gap-1.5 overflow-visible md:aspect-[15/8] md:grid-cols-[repeat(12,minmax(0,1fr))] md:grid-rows-[1.12fr_0.88fr] md:gap-2 2xl:aspect-[5/2]">
      {previewImages.map((image, index) => {
        return (
          <div
            key={image}
            className={`relative overflow-hidden rounded-lg ${PREVIEW_SLOTS[index]}`}
            onClick={() => onPaintingClick(index)}
          >
            <Image
              fill
              src={image}
              alt={image ?? ''}
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        );
      })}
    </div>
  );
};
