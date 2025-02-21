import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { Icon } from '@iconify/react'

import { cn } from '@/lib/utils'

const contentClasses = cn(
  'bg-popover p-2 border rounded min-w-48 select-none space-y-1 motion-duration-150',
  'radix-side-bottom:motion-preset-slide-down-sm',
  'radix-side-top:motion-preset-slide-up-sm',
  'radix-side-left:motion-preset-slide-left-sm',
  'radix-side-right:motion-preset-slide-right-sm',
)
function Content({ sideOffset = 6, ...props }: DropdownMenuPrimitive.DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Content
      className={cn(
        contentClasses,
        props.className)}
      sideOffset={sideOffset}
      {...props}
    />

  )
}

const itemClasses = cn(
  'py-1 px-2 rounded transition-all duration-100 outline-none flex items-center gap-2',
  'hover:bg-accent',
  'focus-visible:bg-accent focus-visible:ring',
)
function Item({ ...props }: DropdownMenuPrimitive.DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item
      className={cn(
        itemClasses,
        props.className)}
      {...props}
    />
  )
}

const labelClasses = cn(
  'px-2 py-1 font-medium text-muted-foreground text-sm whitespace-nowrap ',
)
function Label({ ...props }: DropdownMenuPrimitive.DropdownMenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(
        labelClasses,
        props.className)}
      {...props}
    />
  )
}

const radioGroupClasses = cn(
  'flex flex-col gap-1',
)
function RadioGroup({ ...props }: DropdownMenuPrimitive.DropdownMenuRadioGroupProps) {
  return (
    <DropdownMenuPrimitive.RadioGroup className={cn(radioGroupClasses, props.className)} {...props} />
  )
}

const radioItemClasses = cn(
  'py-1 px-2 rounded transition-all duration-100 outline-none flex items-center justify-between',
)
function RadioItem({ ...props }: DropdownMenuPrimitive.DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      className={cn(radioItemClasses, itemClasses, props.className)}
      {...props}
    >
      {props.children}
      <DropdownMenuPrimitive.ItemIndicator>
        <Icon icon="ph:check" />
      </DropdownMenuPrimitive.ItemIndicator>

    </DropdownMenuPrimitive.RadioItem>
  )
}
const separatorClasses = cn(
  'my-2 bg-border h-px',
)
function Separator({ ...props }: DropdownMenuPrimitive.DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn(
        separatorClasses,
        props.className)}
      {...props}
    />
  )
}

const subContentClasses = cn(
  '',
)
function SubContent({ ...props }: DropdownMenuPrimitive.DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent className={cn(subContentClasses, contentClasses, props.className)} {...props} />
  )
}

const subTriggerClasses = cn(
  '',
)
function SubTrigger({ children, ...props }: { children: React.ReactNode } & DropdownMenuPrimitive.DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      className={cn(
        subTriggerClasses,
        itemClasses,
        props.className)}
      {...props}
    >
      <div className="flex justify-between items-center [&>div]:p-0">
        {children}
        <Icon icon="mdi:chevron-right" />
      </div>
    </DropdownMenuPrimitive.SubTrigger>
  )
}

export const DropdownMenu = {
  Content,
  Item,
  Label,
  RadioItem,
  RadioGroup,
  Separator,
  SubContent,
  SubTrigger,
  Group: DropdownMenuPrimitive.Group,
  Portal: DropdownMenuPrimitive.Portal,
  Root: DropdownMenuPrimitive.Root,
  Sub: DropdownMenuPrimitive.Sub,
  Trigger: DropdownMenuPrimitive.Trigger,
}
