import { cn } from '@/app/lib/utils';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', type = 'button', ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer w-full',
          {
            'bg-[#F2F2EC] text-red-950 hover:bg-neutral-200': variant === 'primary',

            'h-9 px-3 text-sm': size === 'sm',
            'h-10 px-4 py-2 text-base': size === 'md',
            'h-11 px-6 text-lg': size === 'lg',
          },
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button };
