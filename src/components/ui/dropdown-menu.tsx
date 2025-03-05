import { cn } from '@/lib/utils'
import { staticStyles } from '@/styles/styles'
import { Icon } from '@iconify/react'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

const contentClasses = cn(staticStyles.base, staticStyles.variant.default, `
  data-[state=open]:animate-in data-[state=open]:fade-in-0
  radix-side-bottom:slide-in-from-top-2
  radix-side-left:slide-in-from-right-2
  radix-side-right:slide-in-from-left-2
  radix-side-top:slide-in-from-bottom-2
  z-50 min-w-32 space-y-1 p-2 shadow-lg duration-100 select-none
`)
function Content({ sideOffset = 6, ...props }: DropdownMenuPrimitive.DropdownMenuContentProps) {
  return (
    <DropdownMenuPrimitive.Content
      data-slot="dropdown-menu-content"
      className={cn(
        contentClasses,
        props.className,
      )}
      sideOffset={sideOffset}
      {...props}
    />

  )
}

function Group({ children, ...props }: DropdownMenuPrimitive.DropdownMenuGroupProps) {
  return (
    <DropdownMenuPrimitive.Group
      data-slot="dropdown-menu-group"
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.Group>
  )
}

const itemClasses = cn(`
  text-popover-foreground flex
  max-h-(--radix-dropdown-menu-content-available-height) items-center gap-2
  rounded px-2 py-1 text-sm transition-all duration-100 outline-none
  focus:bg-muted
`)
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

const labelClasses = cn(`
  text-muted-foreground px-2 py-1 text-sm font-medium whitespace-nowrap
`)
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

function Portal({ ...props }: DropdownMenuPrimitive.DropdownMenuPortalProps) {
  return (
    <DropdownMenuPrimitive.Portal
      data-slot="dropdown-menu-portal"
      {...props}
    />
  )
}

const radioGroupClasses = cn('flex flex-col gap-1')
function RadioGroup({ ref, ...props }: DropdownMenuPrimitive.DropdownMenuRadioGroupProps & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      ref={ref}
      className={cn(radioGroupClasses, props.className)}
      {...props}
    />
  )
}

function Root({ ...props }: DropdownMenuPrimitive.DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root
      data-slot="dropdown-menu"
      {...props}
    />
  )
}

function RadioItem({ children, ...props }: DropdownMenuPrimitive.DropdownMenuRadioItemProps) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(itemClasses, `
        relative flex items-center rounded py-1 pr-2 pl-7 transition-all
        duration-100 outline-none
      `, props.className)}
      {...props}
    >
      <span className={`
        pointer-events-none absolute left-2 flex size-3 items-center
        justify-center
      `}
      >
        <DropdownMenuPrimitive.ItemIndicator>
          <Icon
            icon="ph:circle-fill"
            className="size-3 fill-current"
          />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

const separatorClasses = cn('bg-border my-2 h-px')
function Separator({ ...props }: DropdownMenuPrimitive.DropdownMenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn(
        separatorClasses,
        props.className,
      )}
      {...props}
    />
  )
}

function Sub({ ...props }: DropdownMenuPrimitive.DropdownMenuSubProps) {
  return (
    <DropdownMenuPrimitive.Sub
      data-slot="dropdown-menu-sub"
      {...props}
    />
  )
}

function SubContent({ sideOffset = 6, ...props }: DropdownMenuPrimitive.DropdownMenuSubContentProps) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      sideOffset={sideOffset}
      className={cn(contentClasses, props.className)}
      {...props}
    />
  )
}

const subTriggerClasses = cn('flex items-center justify-between')
function SubTrigger({ children, ...props }: DropdownMenuPrimitive.DropdownMenuSubTriggerProps) {
  return (
    <DropdownMenuPrimitive.SubTrigger
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

function Trigger({ ...props }: DropdownMenuPrimitive.DropdownMenuTriggerProps) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

export const DropdownMenu = {
  Content,
  Group,
  Item,
  Label,
  Portal,
  RadioItem,
  RadioGroup,
  Root,
  Separator,
  Sub,
  SubContent,
  SubTrigger,
  Trigger,
}
