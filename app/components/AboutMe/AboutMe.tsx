import { Separator } from '../ui';
import { Discover, Hero, Process, Questions } from './components';
import { Statement } from './components';

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />

      <Separator />

      <Statement />

      <Process />

      <Questions />

      <Discover />
    </div>
  );
};
