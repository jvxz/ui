import { ComponentPropsWithRef } from 'react'

import { cn } from '@/lib/utils'

function Skeleton({
  className,
  ref,
  ...props
}: ComponentPropsWithRef<'div'>) {
  return (
    <div
      ref={ref}
      className={cn('bg-muted w-24 h-8 rounded animate-pulse', className)}
      {...props}
    />
  )
}

export { Skeleton }
