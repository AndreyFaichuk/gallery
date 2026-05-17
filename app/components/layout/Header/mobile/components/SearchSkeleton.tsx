import { CommandGroup } from '@/app/components/ui';
import { Skeleton } from '@/app/components/ui/skeleton';

export const SearchSkeleton = () => {
  return (
    <>
      <CommandGroup heading="Suggestions">
        <div className="flex overflow-scroll h-14 gap-2">
          {[94, 68, 52, 86, 48, 34].map((width, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
            <Skeleton key={index} className="h-8 shrink-0 rounded-lg" style={{ width }} />
          ))}
        </div>
      </CommandGroup>

      <CommandGroup heading="Products">
        <div className="flex flex-col border-1 border-gray-200 rounded-md p-2 gap-2">
          {[136, 112, 152].map((width, index) => {
            const isLastElement = index === 2;

            return (
              <div
                // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
                key={index}
                className={isLastElement ? 'border-b-0 pb-0' : 'border-b-1 border-gray-200 pb-2'}
              >
                <div className="flex items-center gap-4 justify-between">
                  <div className="flex gap-4 items-center">
                    <Skeleton className="h-[150px] w-[140px] shrink-0 rounded-sm" />
                    <Skeleton className="h-6 rounded-sm" style={{ width }} />
                  </div>
                  <Skeleton className="size-4 shrink-0 rounded-sm" />
                </div>
              </div>
            );
          })}
        </div>
      </CommandGroup>
    </>
  );
};
