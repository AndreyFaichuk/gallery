import type { LucideIcon } from 'lucide-react';
import { BadgeCheck, ChevronRight, Globe2, Palette } from 'lucide-react';

type Benefit = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const BENEFITS: Benefit[] = [
  {
    title: 'Original works',
    description: 'Hand-painted originals created with passion and care.',
    Icon: Palette,
  },
  {
    title: 'Certificate of authenticity',
    description: 'Each piece includes a signed certificate of authenticity.',
    Icon: BadgeCheck,
  },
  {
    title: 'Worldwide shipping',
    description: 'Secure packaging and worldwide delivery.',
    Icon: Globe2,
  },
];

export const HomeBenefits = () => {
  return (
    <section className="px-0 py-4 lg:px-8 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {BENEFITS.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="border-b border-neutral-300 last:border-b-0 lg:border-b-0 lg:border-r  lg:border-neutral-300 last:lg:border-r-0"
          >
            <div className="flex w-full items-center gap-4 px-4 py-4 lg:items-start lg:px-8 lg:py-0">
              <Icon className="size-6 shrink-0 text-neutral-500 lg:size-8" strokeWidth={1.5} />

              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold leading-snug lg:text-base">{title}</h2>

                <p className="mt-1 max-w-[220px] text-xs leading-relaxed text-neutral-600 lg:text-sm">
                  {description}
                </p>
              </div>

              <ChevronRight className="size-4 shrink-0 text-neutral-500 lg:hidden" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
