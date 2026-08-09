import { Separator } from '../ui';
import { Discover, Hero, Process, Questions } from './components';
import { Statement } from './components';

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-10 md:max-lg:pb-12 2xl:pb-32">
      <Hero />

      <Separator />

      <Statement />

      <Process />

      <Questions />

      <Discover />
    </div>
  );
};
