import { cn } from '@/lib/utils'
import { staticStyles } from '@/styles/styles'

function Root({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        staticStyles.base,
        staticStyles.variant.default,
        'p-4',
        className,
      )}
      {...props}
    />
  )
}

function Content({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn(className)}
      {...props}
    />
  )
}

function Header({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'space-y-1 mb-6',
        className,
      )}
      {...props}
    />
  )
}

function Title({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'font-medium text-xl',
        className,
      )}
      {...props}
    />
  )
}

function Description({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        'text-muted-foreground text-sm',
        className,
      )}
      {...props}
    />
  )
}

function Footer({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'flex gap-2 mt-6',
        className,
      )}
      {...props}
    />
  )
}

export const Card = {
  Root,
  Content,
  Header,
  Title,
  Description,
  Footer,
}
