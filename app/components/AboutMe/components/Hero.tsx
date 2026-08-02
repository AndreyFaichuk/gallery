import Image from 'next/image';
import { IMAGES_CONFIG } from '../constants';
import { getMediaContentUrl } from '@/utils';

export const Hero = () => {
  const { hero } = IMAGES_CONFIG;

  const heroImageUrl = getMediaContentUrl(hero);

  return (
    <section className="font-body text-stone-900 flex flex-col gap-8">
      <div className="flex">
        <div className="mx-auto max-w-xl px-6 lg:px-12">
          <p className="text-xs uppercase tracking-widest text-stone-500 sm:text-lg">
            About the artist
          </p>

          <h1 className="mt-4 text-5xl leading-none font-normal tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Juliette</span>
            <span className="block">Bereziy</span>
          </h1>

          <p className="mt-6 text-xs leading-tight uppercase tracking-widest text-stone-500 sm:text-lg">
            Ukrainian contemporary artist
            <span className="block">based in Lviv, Ukraine</span>
          </p>

          <p className="mt-4 max-w-md text-sm leading-snug text-stone-700 sm:text-base sm:leading-relaxed">
            Working primarily with oil on canvas, I create abstract paintings inspired by natural
            rhythms, shifting light and the quiet movement of emotional memory.
          </p>

          <p className="mt-20 font-artist text-4xl leading-none text-stone-700 sm:text-5xl">
            Juliette Bereziy
          </p>
        </div>
        <div className="relative w-[60%] h-[500px]">
          <Image src={heroImageUrl} alt="hero-image" fill priority className="object-cover" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
        <span className="text-2xl font-semibold text-amber-600 sm:text-4xl" aria-hidden="true">
          “
        </span>
        <blockquote className="whitespace-nowrap text-2xl italic lg:text-4xl">
          I paint inner places.
        </blockquote>
        <span className="text-2xl font-semibold text-amber-600 sm:text-4xl" aria-hidden="true">
          ”
        </span>
        <div className="h-px max-w-24 flex-1 bg-amber-600" />
      </div>
    </section>
  );
};
