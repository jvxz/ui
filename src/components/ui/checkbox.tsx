import { Icon } from '@iconify/react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const checkboxClass = cva('flex justify-center items-center gap-2 bg-background disabled:opacity-50 shadow border rounded outline-0 focus:ring size-8 aspect-square')
function Checkbox({ className, ...props }: CheckboxPrimitive.CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(checkboxClass(), className)}
      {...props}
      >
      <CheckboxPrimitive.Indicator className="place-items-center grid">
        <Icon icon="ph:check-bold" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
