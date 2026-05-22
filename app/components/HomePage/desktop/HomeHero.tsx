import Image from 'next/image';
import heroPhoto from '@/app/assets/hero_photo1.jpg';
import { Button } from '../../ui';
import Link from 'next/link';
import { NAVIGATION_MENU_OPTIONS } from '@/constants';

export const HomeHero = () => {
  return (
    <section className="flex">
      <div className="w-full flex flex-col md:flex-row items-stretch">
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-6 py-10 md:py-0">
          <div className="max-w-[280px] md:max-w-[200px]">
            <h1 className="text-3xl md:text-4xl leading-tight font-medium">
              Art that speaks to your soul
            </h1>
          </div>

          <div className="max-w-[280px] md:max-w-[300px]">
            <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
              Original oil paintings inspired by nature, emotions, and the beauty of the moment.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <Button asChild>
              <Link href={NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.link}>
                view {NAVIGATION_MENU_OPTIONS.ALL_PAINTINGS.title}
              </Link>
            </Button>

            <Button variant="ghost" className="text-sm text-black  hover:opacity-70 transition">
              about the artist →
            </Button>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="relative w-full h-[70svh] overflow-hidden">
            <Image src={heroPhoto} alt="Artwork showcase" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
};
