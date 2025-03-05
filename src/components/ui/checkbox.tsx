import { cn } from '@/lib/utils'
import { interactiveStyles } from '@/styles/styles'
import { Icon } from '@iconify/react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

function Checkbox({ className, ...props }: CheckboxPrimitive.CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        interactiveStyles.base,
        interactiveStyles.variant.primary,
        `
          group size-5 rounded-md transition-shadow
          radix-state-unchecked:bg-transparent
        `,
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-items-center"
      >
        <Icon
          icon="ph:check-bold"
          className="size-[14px]"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
