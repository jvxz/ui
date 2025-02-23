import { Icon } from '@iconify/react'

import { cn } from '@/lib/utils'

function Root({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center gap-2">{children}</div>
}

function Item({ className, disabled, ...props }: {
  disabled?: boolean
} & React.ComponentPropsWithoutRef<'a'>) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      aria-disabled={disabled}
      className={cn(
        'cursor-default flex items-center gap-2 px-1',
        'hover:underline',
        'aria-disabled:no-underline aria-disabled:text-muted-foreground aria-disabled:cursor-not-allowed aria-disabled:pointer-events-none',
        className,
      )}
      {...props}
    />
  )
}

function Separator() {
  return (
    <Icon
      icon="ph:caret-right"
      className="text-muted-foreground/50"
    />
  )
}

export const Breadcrumb = {
  Root,
  Item,
  Separator,
}
