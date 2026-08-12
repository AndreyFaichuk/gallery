'use client';

import { Hero, Statement } from './components';

export const MobileAboutMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />

      <div className="flex flex-col px-10 gap-4">
        <Statement />
      </div>
    </div>
  );
};
