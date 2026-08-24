import { DesktopSearchPageSkeleton, MobileSearchPageSkeleton } from '@/components/Skeletons';

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
