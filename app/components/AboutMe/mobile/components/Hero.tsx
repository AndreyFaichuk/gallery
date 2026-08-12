'use client';

import Image from 'next/image';

import { getMediaContentUrl } from '@/utils';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../../constants';

const HERO_CARD_BRUSH = '/about-me/hero-card-brush.png';

export const Hero = () => {
  const heroImageUrl = getMediaContentUrl(`${ABOUT_ME_PREFIX}/${IMAGES_CONFIG.hero}`);

  return (
    <section className="flex flex-col items-center font-body text-stone-900">
      <div className="relative h-[clamp(9.5rem,52.5vw,15.75rem)] w-full overflow-hidden">
        <Image
          src={heroImageUrl}
          alt="Juliette Bereziy working on an abstract painting in her studio"
          fill
          priority
          sizes="100vw"
          className="origin-left scale-[1.45] object-cover object-left"
        />
      </div>

      <div className="relative z-10 -mt-[90px] w-[clamp(180px,70vw,340px)] overflow-hidden rounded-sm border border-[#c9ae8b]/45 bg-[#faf8f2] px-5 py-4">
        <Image
          src={HERO_CARD_BRUSH}
          alt=""
          fill
          sizes="360px"
          aria-hidden="true"
          className="object-contain object-right"
        />

        <div className="z-30 relative max-w-[68%]">
          <p className="text-[10px] leading-none uppercase tracking-[0.2em] text-[#8b735e]">
            About the artist
          </p>

          <h1 className="mt-2 text-[44px] leading-[0.88] font-normal tracking-[-0.025em]">
            <span className="block">Juliette</span>
            <span className="block">Bereziy</span>
          </h1>

          <p className="mt-3 text-[9px] leading-[1.35] uppercase tracking-[0.16em] text-[#7f6b5a]">
            <span className="block">Ukrainian contemporary artist</span>
            <span className="block">Based in Lviv, Ukraine</span>
          </p>

          <p className="my-2 text-xs leading-[1.4] text-stone-700">
            Working primarily with oil on canvas, I create abstract paintings inspired by natural
            rhythms, shifting light and the quiet movement of emotional memory.
          </p>

          <p className="mt-3 font-artist text-[30px] leading-none text-stone-700">
            Juliette Bereziy
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-center gap-2 px-5 mt-6">
        <div className="h-px max-w-14 flex-1 bg-amber-600" />
        <span className="text-3xl font-semibold leading-none text-amber-600" aria-hidden="true">
          “
        </span>
        <blockquote className="whitespace-nowrap text-3xl italic leading-none">
          I paint inner places.
        </blockquote>
        <span className="text-3xl font-semibold leading-none text-amber-600" aria-hidden="true">
          ”
        </span>
        <div className="h-px max-w-14 flex-1 bg-amber-600" />
      </div>
    </section>
  );
};
