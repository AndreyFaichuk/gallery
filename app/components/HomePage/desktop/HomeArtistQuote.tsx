import Image from 'next/image';
import { Separator } from '../../ui';
import home_quote from '@/app/assets/home_quote.jpg';

export const HomeArtistQuote = () => {
  return (
    <section className="relative overflow-hidden bg-[#f3eee7]/70">
      <Image src={home_quote} alt="" fill className="object-cover" sizes="100vw" priority={false} />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex min-h-[160px] items-center px-4 py-6 md:min-h-[210px] md:px-12 md:py-10 lg:min-h-[240px]">
        <span className="self-start text-4xl leading-none text-white/60 md:text-6xl">&quot;</span>

        <div className="ml-4 max-w-[700px] md:ml-8">
          <blockquote className="text-sm leading-relaxed text-white md:text-xl lg:text-2xl">
            My paintings are my diary. Each piece is a moment, captured with emotion and brought to
            life on canvas.
          </blockquote>

          <p className="mt-4 text-xs text-white/80 md:text-sm">— Juliette Bereziy</p>
        </div>
      </div>

      <Separator className="relative z-10 bg-white/50" />
    </section>
  );
};
