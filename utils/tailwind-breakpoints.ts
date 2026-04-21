import { tailwindBreakpoints, type TailwindBreakpointsT } from '@/types/tailwind-types';

// Matches the default tailwind breakpoints + a custom xs breakpoint
export const tailwindBreakpointsMapper: Record<TailwindBreakpointsT, number> = {
  [tailwindBreakpoints.XS]: 480,
  [tailwindBreakpoints.SM]: 640,
  [tailwindBreakpoints.MD]: 768,
  [tailwindBreakpoints.LG]: 1024,
  [tailwindBreakpoints.XL]: 1280,
  [tailwindBreakpoints['2XL']]: 1536,
};

export const getBreakpointValue = (breakpoint: TailwindBreakpointsT) =>
  tailwindBreakpointsMapper[breakpoint];
