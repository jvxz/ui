import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { staticStyles } from '@/styles/styles'

const badgeVariants = cva(
  [
    'flex justify-center items-center px-2 py-0.5 w-fit text-xs select-none',
    staticStyles.base,
  ],
  {
    variants: {
      variant: {
        default: staticStyles.variant.default,
        outline: staticStyles.variant.outline,
        ghost: staticStyles.variant.ghost,
        destructive: staticStyles.variant.destructive,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({ className, variant = 'default', ...props }: VariantProps<typeof badgeVariants> & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(badgeVariants({
        variant,
      }), className)}
      {...props}
    />
  )
}

export { Badge }
