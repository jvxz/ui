import { Slot } from '@radix-ui/react-slot'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'flex justify-center items-center gap-2 disabled:opacity-50 rounded outline-0 focus-visible:ring-2 font-extralight transition-all duration-100 cursor-pointer disabled:cursor-not-allowed select-none',
  {
    variants: {
      variant: {
        default:
         'border shadow border-input bg-secondary hover:bg-muted not-disabled:active:border-input not-disabled:active:bg-muted/70 not-disabled:hover:border-ring/50 text-secondary-foreground ',
        destructive:
         'bg-destructive shadow text-destructive-foreground hover:bg-destructive not-disabled:active:bg-destructive ',
        outline:
         'border  shadow border-input/70 bg-transparent hover:bg-accent/10 not-disabled:active:bg-transparent hover:text-accent-foreground',
        ghost: 'hover:bg-accent/50 bg-inherit hover:text-accent-foreground not-disabled:active:bg-accent/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: ' px-3 py-1 h-8',
        sm: ' px-2 py-[2px] text-sm',
        lg: ' h-10 px-8 font-medium text-lg',
        icon: 'h-8 w-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        className={cn(buttonVariants({
          variant,
          size,
          className,
        }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
