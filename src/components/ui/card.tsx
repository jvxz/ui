
import { cn } from '@/lib/utils'

function Root({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-label="Card"
      className={cn(
        'bg-card shadow-lg p-6 border rounded-2xl outline-0 focus-visible:ring-2',
        className,
      )}
      {...props}
    />
  )
}

function Content({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-label="Card content"
      className={cn(
        className,
      )}
      {...props}
    />
  )
}

function Header({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-label="Card header"
      className={cn(
        'space-y-1 mb-6',
        className,
      )}
      {...props}
    />
  )
}

function Title({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-label="Card title"
      className={cn(
        'font-medium text-xl',
        className,
      )}
      {...props}
    />
  )
}

function Description({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-label="Card description"
      className={cn(
        'text-muted-foreground text-sm',
        className,
      )}
      {...props}
    />
  )
}

function Footer({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
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
