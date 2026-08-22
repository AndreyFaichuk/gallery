'use client';

import { MobileHeader } from './Mobile';
import DesktopHeader from './Desktop';

export const Header = () => {
  return (
    <>
      <div className="xs:hidden">
        <MobileHeader />
      </div>
      <div className="hidden xs:block">
        <DesktopHeader />
      </div>
    </>
  );
};
