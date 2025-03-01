import { cn } from '@/lib/utils'

function Root({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <table
      className={cn('border-collapse', className)}
      {...props}
    />
  )
}

function Header({ className, borderX = true, ...props }: React.TableHTMLAttributes<HTMLTableSectionElement> & { borderX?: boolean }) {
  return (
    <thead
      className={cn(
        'border-b bg-accent/20 font-medium text-muted-foreground',
        '*:hover:bg-accent/40 *:transition-all *:duration-100',
        borderX && '*:not-first:border-l',
        className,
      )}
      {...props}
    />
  )
}

function Body({ className, borderY = true, ...props }: React.TableHTMLAttributes<HTMLTableSectionElement> & { borderY?: boolean }) {
  return (
    <tbody
      className={cn(
        borderY && '*:not-last:border-b',
        className,
      )}
      {...props}
    />
  )
}

function Row({ className, borderX = true, ...props }: React.TableHTMLAttributes<HTMLTableRowElement> & { borderX?: boolean }) {
  return (
    <tr
      className={cn(
        'hover:bg-accent/20 transition-all duration-100',
        borderX && '*:not-first:border-l',
        className,
      )}
      {...props}
    />
  )
}

function Cell({ className, ...props }: React.TableHTMLAttributes<HTMLTableCellElement>) {
  return (
    <td
      className={cn(
        'p-3 py-2 select-none',
        className,
      )}
      {...props}
    />
  )
}

export const Table = {
  Root,
  Header,
  Body,
  Row,
  Cell,
}
