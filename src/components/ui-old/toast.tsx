'use client'

import { Icon } from '@iconify/react'
import { useTheme } from 'next-themes'
import { Toaster as ToasterPrimitive } from 'sonner'
import type { ToasterProps } from 'sonner'

import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme()
  return (
    <ToasterPrimitive
      theme={theme as ToasterProps['theme']}
      richColors
      icons={{
        info: <Icon icon="ph:info" />,
        error: <Icon icon="ph:x-circle" />,
        warning: <Icon icon="ph:warning" />,
        success: <Icon icon="ph:check-circle" />,
        close: <Icon icon="ph:x" />,
      }}
      toastOptions={{
        unstyled: true,
        closeButton: false,
        classNames: {
          toast: cn(
            'border shadow w-96 flex gap-2 bg-card text-foreground p-4 justify-between rounded *:shrink-0',
            props.className,
          ),
          closeButton: cn(
            buttonVariants({
              variant: 'ghost',
              size: 'icon',
            }),
            'grid place-items-center absolute top-2 right-2',
          ),
          info: 'bg-blue-500',
          icon: '[&>svg]:size-5 my-auto',
          content: 'grow',
          title: 'font-medium mb-1',
          description: 'text-sm',
          actionButton: cn(buttonVariants({
            // variant: 'outline',
            size: 'sm',
          }), 'mt-auto font-sans'),
        },
      }}
      {...props}
    />
  )
}

export type { ToasterProps }
export { Toaster }
