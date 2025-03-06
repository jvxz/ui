import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { interactiveStyles, staticStyles } from '@/styles/styles'
import { Icon } from '@iconify/react'
import * as ModalPrimitive from '@radix-ui/react-dialog'
import { Button } from './button'

function Content({ className, children, closeBtn = true, ...props }: ModalPrimitive.DialogContentProps & { closeBtn?: boolean }) {
  return (
    <ModalPrimitive.Portal
      data-slot="dialog-portal"
    >
      <ModalPrimitive.Close
        data-slot="dialog-close"
      >
        <ModalPrimitive.Overlay
          data-slot="dialog-overlay"
          className={`
            radix-state-open:animate-in radix-state-open:fade-in-0
            fixed inset-0 z-50 bg-black/50 backdrop-blur-[3px] duration-200
          `}
        />
      </ModalPrimitive.Close>
      <ModalPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          staticStyles.base,
          staticStyles.variant.default,
          `
            motion-translate-y-in-[5%] motion-ease-in-out motion-preset-fade-lg
            fixed inset-0 z-50 m-auto h-fit max-h-[85vh] w-[90vw] max-w-[500px]
            space-y-2 rounded border p-5 duration-200
          `,
          className,
        )}
        {...props}
      >
        {children}
        {closeBtn && (
          <ModalPrimitive.Close
            data-slot="dialog-close"
            autoFocus
            asChild
          >
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                interactiveStyles.base,
                interactiveStyles.variant.ghost,
                interactiveStyles.size.icon,
                `absolute top-3 right-3 size-6`,
              )}
            >
              <Icon icon="ph:x" />
            </Button>
          </ModalPrimitive.Close>
        )}
      </ModalPrimitive.Content>
    </ModalPrimitive.Portal>
  )
}

function Title({ className, ...props }: ModalPrimitive.DialogTitleProps) {
  return (
    <ModalPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-medium', className)}
      {...props}
    />
  )
}

function Description({ className, ...props }: ModalPrimitive.DialogDescriptionProps) {
  return (
    <ModalPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function Header({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn(`
        flex flex-col gap-2 text-center
        sm:text-left
      `, className)}
      {...props}
    />
  )
}

function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(`
        flex flex-col-reverse gap-2
        sm:flex-row sm:justify-end
      `, className)}
      {...props}
    />
  )
}

export const Modal = {
  Content,
  Description,
  Footer,
  Header,
  Root: ModalPrimitive.Root,
  Title,
  Trigger: ModalPrimitive.Trigger,
}
