import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded transition-all cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
  {
    variants: {
      variant: {
        default:
          'bg-primary border hover:border-primary-foreground/25 text-primary-foreground shadow active:bg-primary/80 active:border-border',
        destructive:
          'bg-destructive/90 hover:bg-destructive active:bg-destructive/80 text-destructive-foreground shadow focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
        outline:
          'border hover:bg-accent hover:border-primary-foreground/25 active:border-border shadow hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow hover:bg-secondary/80',
        ghost: 'hover:bg-accent active:bg-accent/80 hover:text-accent-foreground',
        link: 'text-primary-foreground underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-8 px-3 py-2 has-[>svg]:px-3',
        sm: 'h-6 text-sm rounded gap-1.5 px-2 has-[>svg]:px-2.5',
        lg: 'h-10 text-md rounded px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({
        variant,
        size,
        className,
      }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
