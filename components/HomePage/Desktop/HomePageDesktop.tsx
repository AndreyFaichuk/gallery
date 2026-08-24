import { Separator } from '../../ui';
import { HomeArtistQuote } from './HomeArtistQuote';
import { HomeAtelier } from './HomeAtelier';
import { HomeBenefits } from './HomeBenefits';
import { HomeHero } from './HomeHero';
import { HomeNewsletter } from './HomeNewsletter';

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
