export const SearchSkeleton = () => {
  return (
    <div className="w-full max-w-md mx-auto rounded-2xl bg-white p-2">
      <div className="">
        <span className="text-muted-foreground font-medium ml-1">Suggestions</span>

        <div className="mt-3 flex gap-2 overflow-hidden">
          {[94, 68, 52, 86, 48, 34].map((width, index) => (
            <div
              key={index}
              className="h-8 shrink-0 animate-pulse rounded-lg bg-gray-100"
              style={{ width: `${width}px` }}
            />
          ))}
        </div>
      </div>

      {/* results */}
      <div className="mt-6">
        <span className="text-muted-foreground font-medium ml-1">Products</span>

        <div className="mt-3 overflow-hidden rounded-xl border border-gray-100">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex min-h-[180px] items-center gap-4 border-b border-gray-100 p-2 last:border-b-0 sm:min-h-[170px]"
            >
              {/* image */}
              <div className="h-40 w-36 shrink-0 animate-pulse rounded-lg bg-gray-200 sm:h-36 sm:w-32" />

              {/* text */}
              <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
                <div className="h-5 w-[70%] max-w-40 animate-pulse rounded bg-gray-200" />

                <div className="h-5 w-5 shrink-0 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
