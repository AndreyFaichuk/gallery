import { MobileSearchPageSkeleton } from '@/app/components/Skeletons';
import { PaintingItemSkeleton } from '@/app/components/Skeletons';

const Loading = () => {
  return (
    <>
      <div className="xs:hidden">
        <MobileSearchPageSkeleton />
      </div>

      <div className="hidden xs:block">
        <PaintingItemSkeleton />
      </div>
    </>
  );
};

export default Loading;
