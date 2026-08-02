import { Separator } from '../ui';
import { Hero } from './components';

export const AboutMe = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />

      <Separator />
    </div>
  );
};
