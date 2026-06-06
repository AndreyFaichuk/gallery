import { MobileSearchPageSkeleton } from '@/app/components/Skeletons';
import { DesktopSearchPageSkeleton } from '@/app/components/Skeletons';

const Loading = () => {
  return (
    <>
      <div className="xs:hidden">
        <MobileSearchPageSkeleton />
      </div>

      <div className="hidden xs:block">
        <DesktopSearchPageSkeleton />
      </div>
    </>
  );
};

export default Loading;
