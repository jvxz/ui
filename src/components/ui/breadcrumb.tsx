import { Icon } from '@iconify/react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/lib/utils'

function Root({ ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav
      aria-label="breadcrumb"
      data-slot="breadcrumb"
      className="flex items-center gap-2"
      {...props}
    />
  )
}

function Item({ className, ...props }: React.ComponentPropsWithoutRef<'a'>) {
  return (
    <a
      data-slot="breadcrumb-item"
      className={cn(
        'cursor-default flex items-center gap-2 px-1',
        'hover:underline',
        className,
      )}
      {...props}
    />
  )
}

function Link({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  )
}

function Separator() {
  return (
    <Icon
      icon="ph:caret-right"
      data-slot="breadcrumb-separator"
      className="text-muted-foreground/50"
    />
  )
}

export const Breadcrumb = {
  Item,
  Link,
  Root,
  Separator,
}
