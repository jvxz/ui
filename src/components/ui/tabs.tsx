import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const listVariants = cva('flex gap-1 bg-secondary shadow px-2 py-1 border rounded w-96')
function List({
  className,
  ref,
  ...props
}: TabsPrimitive.TabsProps & {
  ref?: React.ForwardedRef<HTMLDivElement>
}) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        listVariants(),
        className,
      )}
      {...props}
    />
  )
}

const triggerVariants = cva('flex justify-center items-center gap-1 radix-state-active:bg-background radix-state-active:shadow px-2 py-1 rounded outline-none focus-visible:ring-2 radix-state-inactive:text-muted-foreground/70 transition-all duration-100 grow [&>svg]:size-4 disabled:opacity-50 disabled:cursor-not-allowed')
function Trigger({
  className,
  ref,
  ...props
}: TabsPrimitive.TabsTriggerProps & {
  ref?: React.ForwardedRef<HTMLButtonElement>
}) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        triggerVariants(),
        className,
      )}
      {...props}
    />
  )
}

export const Tabs = {
  Root: TabsPrimitive.Root,
  Content: TabsPrimitive.Content,
  List,
  Trigger,
}
