import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-muted h-8 w-24 animate-pulse rounded', className)}
      {...props}
    />
  )
}

export { Skeleton }
