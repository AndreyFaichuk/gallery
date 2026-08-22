'use client';

import { Discover, Hero, Process, Questions, Statement } from './components';

export const MobileAboutMe = () => {
  return (
    <div className="flex flex-col gap-4">
      <Hero />

      <div className="flex flex-col px-10 gap-6">
        <Statement />

        <Process />

        <Questions />

        <Discover />
      </div>
    </div>
  );
};
