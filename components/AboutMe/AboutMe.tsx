import { DesktopAboutMe } from './Desktop';
import { MobileAboutMe } from './Mobile';

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
