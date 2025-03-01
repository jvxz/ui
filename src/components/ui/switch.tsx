import * as SwitchPrimitive from '@radix-ui/react-switch'
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const rootVariants = cva('inline-flex relative justify-center items-center bg-input radix-state-checked:bg-primary/60 shadow rounded-full outline-0 focus-visible:ring-2 transition-all cursor-pointer', {
  variants: {
    size: {
      sm: 'w-10 h-6',
      md: 'w-14 h-8',
      lg: 'w-18 h-10',
    },
  },
})

const thumbVariants = cva('block bg-foreground shadow-lg rounded-full transition-all duration-100', {
  variants: {
    size: {
      sm: 'size-5 -translate-x-2 radix-state-checked:translate-x-2',
      md: 'size-6 -translate-x-3 radix-state-checked:translate-x-3',
      lg: 'size-8 -translate-x-4 radix-state-checked:translate-x-4',
    },
  },
})
function Switch({ className, size = 'md', ...props }: SwitchPrimitive.SwitchProps & { size?: VariantProps<typeof rootVariants>['size'] }) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        rootVariants({
          size,
        }),
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          thumbVariants({
            size,
          }),
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
