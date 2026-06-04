import { HomeHero } from './HomeHero';
import { HomeArtistQuote } from './HomeArtistQuote';
import { HomeAtelier } from './HomeAtelier';
import { HomeBenefits } from './HomeBenefits';
import { HomeNewsletter } from './HomeNewsletter';
import { Separator } from '../../ui';

export const HomePageDesktop = () => {
  return (
    <div className="flex flex-col">
      <HomeHero />

      <Separator />

      <HomeBenefits />
      <HomeArtistQuote />
      <HomeAtelier />
      <HomeNewsletter />
    </div>
  );
};
