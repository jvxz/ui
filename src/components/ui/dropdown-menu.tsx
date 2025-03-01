import { Icon } from '@iconify/react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import { cn } from '@/lib/utils'

const contentClasses = cn(
  'bg-popover p-2 border rounded min-w-48 select-none space-y-1 motion-duration-150 shadow',
  'radix-side-bottom:motion-preset-slide-down-sm',
  'radix-side-top:motion-preset-slide-up-sm',
  'radix-side-left:motion-preset-slide-left-sm',
  'radix-side-right:motion-preset-slide-right-sm',
)
function Content({ sideOffset = 6, ref, ...props }: DropdownMenuPrimitive.DropdownMenuContentProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.Content
      ref={ref}
      className={cn(
        contentClasses,
        props.className,
      )}
      sideOffset={sideOffset}
      {...props}
    />

  )
}

const itemClasses = cn(
  'px-2 py-1 text-popover-foreground rounded transition-all duration-100 outline-none flex items-center gap-2',
  'hover:bg-accent',
  'focus-visible:bg-accent focus-visible:ring',
)
function Item({ ref, ...props }: DropdownMenuPrimitive.DropdownMenuItemProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        itemClasses,
        props.className,
      )}
      {...props}
    />
  )
}

const labelClasses = cn(
  'px-2 py-1 font-medium text-muted-foreground text-sm whitespace-nowrap ',
)
function Label({ ref, ...props }: DropdownMenuPrimitive.DropdownMenuLabelProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn(
        labelClasses,
        props.className,
      )}
      {...props}
    />
  )
}

const radioGroupClasses = cn(
  'flex flex-col gap-1',
)
function RadioGroup({ ref, ...props }: DropdownMenuPrimitive.DropdownMenuRadioGroupProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      ref={ref}
      className={cn(radioGroupClasses, props.className)}
      {...props}
    />
  )
}

const radioItemClasses = cn(
  'py-1 px-2 rounded transition-all duration-100 outline-none flex items-center justify-between',
)
function RadioItem({ ref, ...props }: DropdownMenuPrimitive.DropdownMenuRadioItemProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      className={cn(radioItemClasses, itemClasses, props.className)}
      {...props}
    >
      {props.children}
      <DropdownMenuPrimitive.ItemIndicator className="">
        <Icon icon="ph:radio-button-fill" />
      </DropdownMenuPrimitive.ItemIndicator>

    </DropdownMenuPrimitive.RadioItem>
  )
}
const separatorClasses = cn(
  'my-2 bg-border h-px',
)
function Separator({ ref, ...props }: DropdownMenuPrimitive.DropdownMenuSeparatorProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.Separator
      ref={ref}
      className={cn(
        separatorClasses,
        props.className,
      )}
      {...props}
    />
  )
}

const subContentClasses = cn(
  '',
)
function SubContent({ ref, ...props }: DropdownMenuPrimitive.DropdownMenuSubContentProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(subContentClasses, contentClasses, props.className)}
      {...props}
    />
  )
}

const subTriggerClasses = cn(
  'flex items-center justify-between',
)
function SubTrigger({ children, ref, ...props }: { children: React.ReactNode, ref?: React.Ref<HTMLDivElement> } & DropdownMenuPrimitive.DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        subTriggerClasses,
        itemClasses,
        props.className,
      )}
      {...props}
    >
      {children}
      <Icon
        icon="ph:caret-right-bold"
        className="ml-auto"
      />
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
