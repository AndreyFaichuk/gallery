import Image from 'next/image';

export const InitialSearchState = () => {
  return (
    <div className="flex justify-center mt-14 flex-col gap-4 items-center">
      <Image src="/empty-state.svg" width={120} height={120} alt="Empty state" />
      <span className="text-foreground">Find art by name or suggestions</span>
    </div>
  );
};
