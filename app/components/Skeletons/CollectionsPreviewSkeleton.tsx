import { COLLECTION_PREVIEW_LAYOUT } from '@/constants';
import { Skeleton } from '../ui/skeleton';

const PREVIEW_SLOTS = [
  {
    className: COLLECTION_PREVIEW_LAYOUT.hero,
    titleWidthClassName: 'w-[180px]',
    descriptionLines: 4,
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.topRight,
    titleWidthClassName: 'w-[210px]',
    descriptionLines: 4,
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.bottomLeft,
    titleWidthClassName: 'w-[180px]',
    descriptionLines: 5,
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.bottomCenter,
    titleWidthClassName: 'w-[170px]',
    descriptionLines: 3,
  },
  {
    className: COLLECTION_PREVIEW_LAYOUT.bottomRight,
    titleWidthClassName: 'w-[190px]',
    descriptionLines: 4,
  },
];

export const CollectionsPreviewSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:aspect-[1.93] md:grid-cols-[repeat(13,minmax(0,1fr))] md:grid-rows-[1.29fr_1fr] md:gap-2 2xl:aspect-[2.45]">
      {[1, 2, 3, 4, 5].map((el, index) => {
        const previewSlot = PREVIEW_SLOTS[index];

        return (
          <div
            key={el}
            className={`relative min-h-[114px] overflow-hidden rounded-lg bg-neutral-200 md:min-h-0 md:aspect-auto ${previewSlot.className}`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-400" />
            <div className="relative flex h-full min-h-[100px] flex-col justify-end gap-2 px-5 pb-4 pt-10 md:min-h-[180px] md:px-6 md:pb-7 lg:min-h-[187px] lg:px-6">
              <Skeleton
                className={`h-7 max-w-full rounded-sm bg-white/45 ${previewSlot.titleWidthClassName}`}
              />

              <div className="mt-2 flex max-w-[210px] flex-col md:max-w-[230px] gap-2">
                {Array.from({ length: previewSlot.descriptionLines }).map((_, lineIndex) => (
                  <Skeleton
                    // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
                    key={lineIndex}
                    className="h-[21px] rounded-sm bg-white/45"
                    style={{
                      width: lineIndex === previewSlot.descriptionLines - 1 ? '80%' : '100%',
                    }}
                  />
                ))}
              </div>

              <div className="mt-3 flex items-center gap-2 md:mt-5">
                <Skeleton className="h-4 w-[134px] rounded-sm bg-white/45" />
                <Skeleton className="size-4 rounded-sm bg-white/45" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
