import Image from 'next/image';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../../AboutMe.constants';
import { getMediaContentUrl } from '@/utils';

export const Hero = () => {
  const { hero } = IMAGES_CONFIG;

  const heroImageUrl = getMediaContentUrl(`${ABOUT_ME_PREFIX}/${hero}`);

  return (
    <section className="font-body text-stone-900 flex flex-col gap-8 xs:max-md:gap-5 md:max-lg:gap-6">
      <div className="flex xs:max-md:flex-col">
        <div className="mx-auto max-w-xl px-6 xs:max-md:mx-0 xs:max-md:w-full xs:max-md:max-w-none xs:max-md:px-10 xs:max-md:pt-6 xs:max-md:pb-5 md:max-lg:mx-0 md:max-lg:w-[40%] md:max-lg:max-w-none md:max-lg:px-8 md:max-lg:py-4 lg:px-12">
          <h2 className="text-xs uppercase tracking-widest text-stone-500 xs:max-md:text-[10px] sm:text-lg md:max-lg:text-[11px]">
            About the artist
          </h2>

          <h1 className="mt-4 text-5xl leading-none font-normal tracking-tight xs:max-md:mt-3 xs:max-md:text-[clamp(38px,7.5vw,46px)] sm:text-6xl md:max-lg:mt-3 md:max-lg:text-[clamp(42px,5vw,50px)] lg:text-7xl 2xl:text-[76px]">
            <span className="block xs:max-md:inline xs:max-md:mr-2">Juliette</span>
            <span className="block xs:max-md:inline">Bereziy</span>
          </h1>

          <p className="mt-6 text-xs leading-tight uppercase tracking-widest text-stone-500 xs:max-md:mt-4 xs:max-md:text-[10px] xs:max-md:leading-[1.4] sm:text-lg md:max-lg:mt-5 md:max-lg:text-[12px] md:max-lg:leading-[1.35] 2xl:text-xl">
            Ukrainian contemporary artist
            <span className="block xs:max-md:ml-1 xs:max-md:inline">based in Lviv, Ukraine</span>
          </p>

          <p className="mt-4 max-w-md text-sm leading-snug text-stone-700 xs:max-md:mt-3 xs:max-md:max-w-sm xs:max-md:text-[13px] xs:max-md:leading-[1.45] sm:text-base sm:leading-relaxed md:max-lg:mt-3 md:max-lg:text-sm md:max-lg:leading-[1.45] 2xl:text-[17px] 2xl:leading-7">
            Working primarily with oil on canvas, I create abstract paintings inspired by natural
            rhythms, shifting light and the quiet movement of emotional memory.
          </p>

          <p className="mt-20 font-artist text-4xl leading-none text-stone-700 xs:max-md:mt-4 xs:max-md:text-[36px] sm:text-5xl md:max-lg:mt-5 md:max-lg:text-[38px] 2xl:mt-[72px] 2xl:text-[52px]">
            Juliette Bereziy
          </p>
        </div>
        <div className="relative h-[500px] w-[60%] xs:max-md:mx-10 xs:max-md:aspect-[5/2] xs:max-md:h-auto xs:max-md:w-auto md:max-lg:h-[clamp(350px,40vw,380px)]">
          <Image
            src={heroImageUrl}
            alt="hero-image"
            fill
            priority
            className="object-cover xs:max-md:object-center md:max-lg:object-left"
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-center gap-2 xs:max-md:px-10 sm:gap-4 md:max-lg:gap-3">
        <div className="h-px max-w-24 flex-1 bg-amber-600 xs:max-md:max-w-16" />
        <span
          className="text-2xl font-semibold text-amber-600 xs:max-md:text-xl sm:text-4xl md:max-lg:text-2xl 2xl:text-[38px]"
          aria-hidden="true"
        >
          “
        </span>
        <blockquote className="whitespace-nowrap text-2xl italic xs:max-md:text-xl md:max-lg:text-[22px] lg:text-4xl 2xl:text-[38px] 2xl:leading-[42px]">
          I paint inner places.
        </blockquote>
        <span
          className="text-2xl font-semibold text-amber-600 xs:max-md:text-xl sm:text-4xl md:max-lg:text-2xl 2xl:text-[38px]"
          aria-hidden="true"
        >
          ”
        </span>
        <div className="h-px max-w-24 flex-1 bg-amber-600 xs:max-md:max-w-16" />
      </div>
    </section>
  );
};
