import { getMediaContentUrl } from '@/utils';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../constants';
import Image from 'next/image';

export const Statement = () => {
  const { statement } = IMAGES_CONFIG;

  const statementImageUrl = getMediaContentUrl(`${ABOUT_ME_PREFIX}/${statement}`);

  return (
    <section className="flex px-6 lg:px-12 gap-10 font-body">
      <div className="relative h-[500px] w-[30%]">
        <Image
          src={statementImageUrl}
          alt="statement-image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="w-[70%] flex flex-col">
        <div className="flex gap-2 items-center mb-4">
          <h2 className="text-xs uppercase tracking-widest text-stone-500 sm:text-lg">
            artist statement
          </h2>
          <div className="h-px max-w-16 flex-1 bg-amber-600" />
        </div>

        <div className="flex w-[85%] min-w-[70%] max-w-[90%] flex-col gap-6">
          <p className="text-xl leading-tight mb-2 italic text-zinc-800">
            My paintings emerge from the dialogue between intuition and observation. I&apos;m
            interested in the invisible: the atmosphere of a moment, the trace of light, the echo of
            feeling.
          </p>

          <div className="flex flex-col gap-6 border-r border-amber-600 pr-6">
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
