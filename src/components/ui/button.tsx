import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { interactiveStyles } from '@/styles/styles'
import { Slot } from '@radix-ui/react-slot'

import { cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  [
    `
      inline-flex shrink-0 cursor-pointer items-center justify-center gap-2
      whitespace-nowrap select-none
      [&_svg]:pointer-events-none [&_svg]:shrink-0
      [&_svg:not([class*='size-'])]:size-4
    `,
    interactiveStyles.base,
  ],
  {
    variants: {
      variant: {
        primary: interactiveStyles.variant.primary,
        outline: interactiveStyles.variant.outline,
        ghost: interactiveStyles.variant.ghost,
        destructive: interactiveStyles.variant.destructive,
      },
      size: {
        default: interactiveStyles.size.default,
        sm: interactiveStyles.size.sm,
        lg: interactiveStyles.size.lg,
        icon: interactiveStyles.size.icon,
      },
    },
    defaultVariants: {
      variant: 'primary',
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
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
