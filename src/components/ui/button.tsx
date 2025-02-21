import type { VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'flex justify-center items-center gap-2 disabled:opacity-50 rounded outline-0 focus:ring ring-ring font-extralight transition-all duration-100 cursor-pointer disabled:cursor-not-allowed select-none',
  {
    variants: {
      variant: {
        default:
         'border bg-secondary/80 hover:bg-secondary not-disabled:active:border-secondary-foreground/10 not-disabled:active:bg-secondary/80 not-disabled:hover:border-secondary-foreground/20 text-secondary-foreground ',
        destructive:
         'bg-destructive text-destructive-foreground hover:bg-destructive/80 not-disabled:active:bg-destructive/80 ',
        outline:
         'border border-input bg-background hover:bg-accent/50 hover:border-accent-foreground/10 not-disabled:active:bg-accent/40 hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground  hover:bg-secondary/80',
        ghost: 'hover:bg-accent/50 hover:text-accent-foreground not-disabled:active:bg-accent/40',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'shadow-lg px-3 py-1 h-8',
        sm: 'shadow-lg px-2 py-[2px] text-sm',
        lg: 'shadow-lg h-10 px-8 font-medium text-lg',
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
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
