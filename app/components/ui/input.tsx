import { type ComponentProps, type ReactNode, forwardRef } from 'react';

import { cn } from '@/app/lib/utils';

type InputProps = ComponentProps<'input'> & {
  afterIcon?: ReactNode;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, afterIcon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          ref={ref}
          className={cn(
            'flex h-10 w-full rounded-md focus:outline-none bg-background px-3 py-2 text-base disabled:cursor-not-allowed disabled:opacity-50 md:text-sm shadow-md outline-none',
            afterIcon ? 'pr-10' : '',
            className,
          )}
          {...props}
        />

        {afterIcon && (
          <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-auto">
            {afterIcon}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export { Input };
