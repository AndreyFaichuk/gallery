import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@/app/lib/utils';

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverArrow = PopoverPrimitive.Arrow;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'end', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn('z-50  p-2', className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
));

PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const PopoverAnchor = PopoverPrimitive.Anchor;

PopoverAnchor.displayName = PopoverPrimitive.Anchor.displayName;

const PopoverClose = PopoverPrimitive.Close;

PopoverClose.displayName = PopoverPrimitive.Close.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverAnchor, PopoverClose };
