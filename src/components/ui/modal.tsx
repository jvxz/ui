import { Icon } from '@iconify/react'
import * as ModalPrimitive from '@radix-ui/react-alert-dialog'
import { cva } from 'class-variance-authority'
import type { HTMLAttributes } from 'react'

import { Button } from './button'
import { cn } from '@/lib/utils'

const contentClass = cva('z-50 fixed inset-0 bg-card m-auto motion-preset-slide-up-sm p-5 border rounded w-[90vw] max-w-[500px] h-fit max-h-[85vh] text-muted-foreground motion-duration-125 motion-ease-out motion-preset-fade')
function Content({ className, children, ref, closeBtn = true, ...props }: ModalPrimitive.AlertDialogContentProps & { ref?: React.Ref<HTMLDivElement>, closeBtn?: boolean }) {
  return (
    <ModalPrimitive.Portal>
      <ModalPrimitive.Action>
        <ModalPrimitive.Overlay
          className="fixed inset-0 bg-black/40 backdrop-blur-[3px] motion-duration-125 motion-ease-out motion-preset-fade"
        />
      </ModalPrimitive.Action>
      <ModalPrimitive.Content
        ref={ref}
        className={cn(contentClass(), className)}
        {...props}
      >
        {children}
        {closeBtn && (
          <ModalPrimitive.Action asChild>
            <Button
              variant="ghost"
              size="icon"
              className="top-3 right-3 absolute rounded-full size-5"
            >
              <Icon icon="ph:x" />
            </Button>
          </ModalPrimitive.Action>
        )}
      </ModalPrimitive.Content>
    </ModalPrimitive.Portal>
  )
}

const titleClass = cva('font-medium text-xl')
function Title({ className, ref, ...props }: ModalPrimitive.AlertDialogTitleProps & { ref?: React.Ref<HTMLHeadingElement> }) {
  return (
    <ModalPrimitive.Title
      ref={ref}
      className={cn(titleClass(), className)}
      {...props}
    />
  )
}

const descriptionClass = cva('text-muted-foreground')
function Description({ className, ref, ...props }: ModalPrimitive.AlertDialogDescriptionProps & { ref?: React.Ref<HTMLParagraphElement> }) {
  return (
    <ModalPrimitive.Description
      ref={ref}
      className={cn(descriptionClass(), className)}
      {...props}
    />
  )
}

const headerClass = cva('mb-4 text-foreground')
function Header({ className, ref, ...props }: HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn(headerClass(), className)}
      {...props}
    />
  )
}

const footerClass = cva('flex justify-end gap-2 mt-4')
function Footer({ className, ref, ...props }: HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLDivElement> }) {
  return (
    <div
      ref={ref}
      className={cn(footerClass(), className)}
      {...props}
    />
  )
}

export const Modal = {
  Root: ModalPrimitive.Root,
  Trigger: ModalPrimitive.Trigger,
  Submit: ModalPrimitive.Action,
  Cancel: ModalPrimitive.Cancel,
  Content,
  Title,
  Description,
  Header,
  Footer,
}
