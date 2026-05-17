'use client';

import { MobileHeader } from './mobile/MobileHeader';
import DesktopHeader from './desktop/DesktopHeader';

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
