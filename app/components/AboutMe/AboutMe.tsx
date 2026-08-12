import { DesktopAboutMe } from './desktop';
import { MobileAboutMe } from './mobile';

export const AboutMe = () => {
  return (
    <>
      <div className="xs:hidden">
        <MobileAboutMe />
      </div>
      <div className="hidden xs:block">
        <DesktopAboutMe />
      </div>
    </>
  );
};
