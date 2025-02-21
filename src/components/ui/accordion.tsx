import { Icon } from '@iconify/react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'

import { cn } from '@/lib/utils'

function Item({ className, ...props }: AccordionPrimitive.AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={cn('border-b py-2 px-4 w-sm', className)}
      {...props}
    />
  )
}

function Trigger({ className, children, ...props }: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header
      className={cn('font-medium text-lg group', className)}
    >
      <AccordionPrimitive.Trigger
        className={cn('flex justify-between items-center w-full group-hover:underline', className)}
        {...props}
      >
        {children}
        <Icon
          aria-hidden
          id="chevron-down"
          icon="ph:caret-down"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function Content({ className, ...props }: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      className={cn('px-1 radix-state-open:py-2 overflow-hidden motion-preset-slide-down accordion-content', className)}
      {...props}
    />
  )
}

export const Accordion = {
  Root: AccordionPrimitive.Root,
  Item,
  Trigger,
  Content,
}
