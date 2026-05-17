import { DesktopSearchPageSkeleton, MobileSearchPageSkeleton } from '@/app/components/Skeletons';
import { PAINTING_ITEM_VARIANT } from '@/types';

const Loading = () => {
  return (
    <>
      <div className="xs:hidden">
        <MobileSearchPageSkeleton variant={PAINTING_ITEM_VARIANT.SEARCH} />
      </div>

      <div className="hidden xs:block">
        <DesktopSearchPageSkeleton variant={PAINTING_ITEM_VARIANT.SEARCH} />
      </div>
    </>
  );
};

export default Loading;
