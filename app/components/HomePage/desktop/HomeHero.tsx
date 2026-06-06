import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import heroPhoto from '@/app/assets/hero_photo1.jpg';
import { NAVIGATION_MENU_OPTIONS } from '@/constants';
import { Button } from '../../ui';

export const HomeHero = () => {
  return (
    <section className="flex">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/3 flex flex-col justify-center gap-6 py-10 lg:py-0">
          <div className="max-w-[280px] lg:max-w-[200px]">
            <h1 className="text-3xl lg:text-4xl leading-tight font-medium">
              Art that speaks to your soul
            </h1>
          </div>

          <div className="max-w-[280px] lg:max-w-[300px]">
            <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
              Original oil paintings inspired by nature, emotions, and the beauty of the moment.
            </p>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <Button asChild>
              <Link href={NAVIGATION_MENU_OPTIONS.SHOP.link}>
                view {NAVIGATION_MENU_OPTIONS.SHOP.title}
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="text-sm text-black hover:opacity-70 transition"
            >
              <Link href={NAVIGATION_MENU_OPTIONS.ABOUT_ME.link}>
                about the artist
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-2/3">
          <div className="relative h-[58svh] min-h-[340px] w-full overflow-hidden lg:h-[70svh] lg:min-h-0">
            <Image src={heroPhoto} alt="Artwork showcase" fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
};
