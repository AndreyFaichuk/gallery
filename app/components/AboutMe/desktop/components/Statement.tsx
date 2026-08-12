import { getMediaContentUrl } from '@/utils';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../../constants';
import Image from 'next/image';

export const Statement = () => {
  const { statement } = IMAGES_CONFIG;

  const statementImageUrl = getMediaContentUrl(`${ABOUT_ME_PREFIX}/${statement}`);

  return (
    <section className="flex gap-10 px-6 font-body xs:max-md:flex-col xs:max-md:gap-4 xs:max-md:px-10 md:max-lg:gap-7 md:max-lg:px-8 lg:px-12">
      <div className="relative h-[500px] w-[30%] xs:max-md:aspect-[3/2] xs:max-md:h-auto xs:max-md:w-full xs:max-md:p-3 md:max-lg:h-[clamp(360px,42vw,400px)] md:max-lg:w-[40%]">
        <Image
          src={statementImageUrl}
          alt="statement-image"
          fill
          priority
          className="object-cover xs:max-md:p-3"
        />
      </div>
      <div className="flex w-[70%] flex-col xs:max-md:w-full md:max-lg:w-[60%]">
        <div className="mb-4 flex items-center gap-2 xs:max-md:mb-3 md:max-lg:mb-3">
          <h2 className="text-xs uppercase tracking-widest text-stone-500 xs:max-md:text-[10px] sm:text-lg md:max-lg:text-[11px]">
            artist statement
          </h2>
          <div className="h-px max-w-16 flex-1 bg-amber-600" />
        </div>

        <div className="flex w-[85%] min-w-[70%] max-w-[90%] flex-col gap-6 xs:max-md:w-full xs:max-md:min-w-0 xs:max-md:max-w-none xs:max-md:gap-3 xs:max-md:text-[13px] xs:max-md:leading-[1.45] md:max-lg:w-full md:max-lg:min-w-0 md:max-lg:max-w-none md:max-lg:gap-4 md:max-lg:text-[13px] md:max-lg:leading-[1.45] 2xl:gap-7 2xl:text-[17px] 2xl:leading-[1.55]">
          <p className="mb-2 text-xl leading-tight italic text-zinc-800 xs:max-md:mb-0 xs:max-md:text-sm xs:max-md:leading-[1.4] md:max-lg:mb-0 md:max-lg:text-[15px] md:max-lg:leading-[1.35] 2xl:text-[22px] 2xl:leading-[1.3]">
            My paintings emerge from the dialogue between intuition and observation. I&apos;m
            interested in the invisible: the atmosphere of a moment, the trace of light, the echo of
            feeling.
          </p>

          <div className="flex flex-col gap-6 border-r border-amber-600 pr-6 xs:max-md:gap-3 xs:max-md:border-r-0 xs:max-md:border-l xs:max-md:pr-0 xs:max-md:pl-3 md:max-lg:gap-4 md:max-lg:pr-4 2xl:gap-7">
            <p>
              Through layers of transparent glazes, dense strokes, pigment and gold, I build a
              surface that breathes. The process is both surrender and decision — a movement between
              instinct and clarity.
            </p>

            <p>My subject is not the outside world, but the inner one.</p>

            <p>
              I&apos;m drawn to the quiet power of colour, to the way it can hold memory without
              naming it. I work slowly, allowing each layer to speak before the next one is laid
              down. Over time, the painting becomes a record of presence — of looking, of listening,
              of becoming.
            </p>
          </div>

          <p>
            Each piece is an invitation to pause, to move closer, and to discover your own
            reflection within the surface.
          </p>
        </div>
      </div>
    </section>
  );
};
