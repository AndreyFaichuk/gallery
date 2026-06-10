import Image from 'next/image';
console.log('test 1');

type LayoutItem = {
  colStart: number;
  rowStart: number;
  colSpan: number;
  rowSpan: number;
};

type Props = {
  images: string[];
};

const LAYOUTS: Record<number, LayoutItem[][]> = {
  5: [
    [
      {
        colStart: 1,
        rowStart: 1,
        colSpan: 2,
        rowSpan: 2,
      },
      {
        colStart: 3,
        rowStart: 1,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 4,
        rowStart: 1,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 3,
        rowStart: 2,
        colSpan: 2,
        rowSpan: 1,
      },
      {
        colStart: 3,
        rowStart: 3,
        colSpan: 2,
        rowSpan: 1,
      },
    ],

    [
      {
        colStart: 1,
        rowStart: 1,
        colSpan: 2,
        rowSpan: 3,
      },
      {
        colStart: 3,
        rowStart: 1,
        colSpan: 2,
        rowSpan: 1,
      },
      {
        colStart: 3,
        rowStart: 2,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 4,
        rowStart: 2,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 3,
        rowStart: 3,
        colSpan: 2,
        rowSpan: 1,
      },
    ],
  ],

  6: [
    [
      {
        colStart: 1,
        rowStart: 1,
        colSpan: 2,
        rowSpan: 2,
      },
      {
        colStart: 3,
        rowStart: 1,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 4,
        rowStart: 1,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 3,
        rowStart: 2,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 4,
        rowStart: 2,
        colSpan: 1,
        rowSpan: 1,
      },
      {
        colStart: 1,
        rowStart: 3,
        colSpan: 4,
        rowSpan: 1,
      },
    ],
  ],
};

function getLayout(imagesCount: number) {
  const variants = LAYOUTS[imagesCount];

  if (!variants?.length) {
    return null;
  }

  return variants[Math.floor(Math.random() * variants.length)];
}

export function ExclusivePaintingPreview({ images }: Props) {
  const layout = getLayout(images.length);

  if (!layout) {
    return (
      <div className="grid grid-cols-3 gap-2">
        {images.map((image) => (
          <div key={image} className="relative aspect-square overflow-hidden rounded-xl">
            <Image fill src={image} alt={image ?? ''} className="object-cover" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className="grid gap-2 h-[700px]"
      style={{
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
      }}
    >
      {images.map((image, index) => {
        const item = layout[index];

        if (!item) {
          return null;
        }

        return (
          <div
            key={image}
            className="relative overflow-hidden rounded-xl"
            style={{
              gridColumn: `${item.colStart} / span ${item.colSpan}`,
              gridRow: `${item.rowStart} / span ${item.rowSpan}`,
            }}
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
}
