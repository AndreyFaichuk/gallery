import { getMediaContentUrl } from '@/utils';
import { ABOUT_ME_PREFIX, IMAGES_CONFIG } from '../../constants';
import Image from 'next/image';

export const Statement = () => {
  const { statement } = IMAGES_CONFIG;

  const statementImageUrl = getMediaContentUrl(`${ABOUT_ME_PREFIX}/${statement}`);

  return (
    <section className="flex flex-col gap-2">
      <div className="relative h-[500px]">
        <Image
          src={statementImageUrl}
          alt="statement-image"
          fill
          priority
          className="object-cover xs:max-md:p-3"
        />
      </div>
      <div className="flex flex-col text-justify">
        <div className="mb-4 flex items-center gap-2 xs:max-md:mb-3 md:max-lg:mb-3">
          <h2 className="text-[10px] leading-none uppercase tracking-[0.2em] text-[#8b735e]">
            artist statement
          </h2>
        </div>

        <div className="flex flex-col gap-6 ">
          <p className="mb-2">
            My paintings emerge from the dialogue between intuition and observation. I&apos;m
            interested in the invisible: the atmosphere of a moment, the trace of light, the echo of
            feeling.
          </p>

          <div className="flex flex-col gap-6 text-xs">
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

            <p>
              Each piece is an invitation to pause, to move closer, and to discover your own
              reflection within the surface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
