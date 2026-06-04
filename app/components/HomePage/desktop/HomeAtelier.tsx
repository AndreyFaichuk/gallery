import { Instagram } from 'lucide-react';
import Image from 'next/image';
import home_atelier1 from '@/app/assets/home_atelier1.jpg';
import home_atelier2 from '@/app/assets/home_atelier2.jpg';
import home_atelier3 from '@/app/assets/home_atelier3.jpg';
import home_atelier4 from '@/app/assets/home_atelier4.jpg';
import Link from 'next/link';

const ATELIER_ITEMS = [home_atelier1, home_atelier2, home_atelier3, home_atelier4];

export const HomeAtelier = () => {
  return (
    <section className="bg-white/35 py-8 md:py-10">
      <div className="mb-6 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-medium leading-none md:text-3xl">From the atelier</h2>

        <Link
          href="https://www.instagram.com/juliette_bereziy.art/"
          target="_blank"
          rel="noreferrer"
          className="flex shrink-0 items-center gap-2 text-xs font-medium leading-tight transition hover:opacity-70 md:text-sm"
          aria-label="Follow Juliette Bereziy on Instagram"
        >
          <Instagram className="size-5 md:size-6" strokeWidth={1.75} />
          <span className="hidden sm:block">
            Follow the journey
            <br />
            @juliette_bereziy.art
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {ATELIER_ITEMS.map((item, index) => (
          <div key={index} className="relative aspect-square overflow-hidden">
            <Image src={item} alt="Artwork showcase" fill className="object-cover" priority />
          </div>
        ))}
      </div>
    </section>
  );
};
