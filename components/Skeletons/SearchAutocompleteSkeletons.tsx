import { Skeleton } from '../ui/skeleton';

export const SuggestionsSkeleton = () => {
  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Suggestions</p>

      <hr className="my-2" />

      <div className="flex flex-col">
        {[128, 104, 152, 96].map((width, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
          <div key={index} className="rounded-md px-3 py-2">
            <Skeleton className="h-5 rounded-sm" style={{ width }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export const ProductsSkeleton = () => {
  return (
    <div className="flex flex-col flex-1 px-3 py-2">
      <p className="text-xs text-muted-foreground">Products</p>

      <hr className="my-2" />

      <div className="flex flex-col">
        {[136, 112, 152].map((width, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders are static.
          <div key={index} className="rounded-md px-3 py-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-[60px] w-[50px] shrink-0 rounded-none" />
              <Skeleton className="h-5 rounded-sm" style={{ width }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
