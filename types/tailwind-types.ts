export const tailwindBreakpoints = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  '2XL': '2xl',
} as const;

export type TailwindBreakpointsT = (typeof tailwindBreakpoints)[keyof typeof tailwindBreakpoints];
