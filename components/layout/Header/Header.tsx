'use client';

import DesktopHeader from './Desktop';
import { MobileHeader } from './Mobile';

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
