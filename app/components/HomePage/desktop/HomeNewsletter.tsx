import Image from 'next/image';
import { Button, Input } from '../../ui';
import home_quote from '@/app/assets/home_quote.jpg';

export const HomeNewsletter = () => {
  return (
    <section className="relative overflow-hidden bg-[#eee7de]/75">
      <Image src={home_quote} alt="" fill className="object-cover" sizes="100vw" />

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex min-h-[270px] items-center px-4 py-6 md:px-10">
        <div className="flex flex-col gap-5">
          <p className="max-w-[360px] text-sm leading-relaxed text-white md:text-base">
            Be the first to know about new paintings and exclusive updates.
          </p>

          <div className="flex max-w-[420px] min-w-[320px] flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              name="email"
              placeholder="Your email"
              className="h-9 rounded-sm border-white/30 bg-white/90 shadow-none"
              aria-label="Email address"
            />

            <Button type="button" className="h-9 w-fit rounded-md px-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
