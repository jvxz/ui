import { Icon } from '@iconify/react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import type { ComponentPropsWithoutRef } from 'react'

import { cn } from '@/lib/utils'

function Accordion({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b py-2 px-4 w-sm', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header
      className={cn('font-medium text-lg group', className)}
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'flex justify-between items-center focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 transition-all w-full outline-none rounded group group-hover:underline disabled:pointer-events-none',
          '[&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <Icon
          aria-hidden
          id="chevron-down"
          icon="ph:caret-down-bold"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  ...props
}: AccordionPrimitive.AccordionContentProps) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn('px-1 radix-state-open:py-2 overflow-hidden motion-preset-slide-down accordion-content', className)}
      {...props}
    />
  )
}

export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
}
