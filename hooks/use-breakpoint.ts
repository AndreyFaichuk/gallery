import { useMediaQuery } from 'usehooks-ts';
import type { TailwindBreakpointsT } from '@/types';
import { getBreakpointValue } from '@/utils';

export const breakpointOptions = {
  BELOW: 'below',
  ABOVE: 'above',
} as const;

type BreakpointOptionT = (typeof breakpointOptions)[keyof typeof breakpointOptions];

export const useBreakpoint = (
  breakpoint: TailwindBreakpointsT,
  option: BreakpointOptionT = breakpointOptions.ABOVE,
): boolean => {
  const breakpointValue = getBreakpointValue(breakpoint);

  const query =
    option === breakpointOptions.BELOW
      ? `(max-width: ${breakpointValue - 0.02}px)`
      : `(min-width: ${breakpointValue}px)`;

  return useMediaQuery(query);
};
