import { cn } from '@/lib/utils'
import { staticStyles } from '@/styles/styles'

function Root({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"

    >
      <table
        data-slot="table"
        className={cn('border-collapse', className)}
        {...props}
      />
    </div>
  )
}

function Header({ className, borderX = true, ...props }: React.ComponentProps<'thead'> & { borderX?: boolean }) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        staticStyles.base,
        `
          bg-accent/20 text-muted-foreground border-b font-medium shadow-none
          *:transition-all *:duration-100
        `,
        borderX && '*:not-first:border-l',
        className,
      )}
      {...props}
    />
  )
}

function Body({ className, borderY = true, ...props }: React.ComponentProps<'tbody'> & { borderY?: boolean }) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        borderY && '*:not-last:border-b',
        className,
      )}
      {...props}
    />
  )
}

function Row({ className, borderX = false, ...props }: React.ComponentProps<'tr'> & { borderX?: boolean }) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        `
          hover:bg-accent/20
          transition-all duration-100
        `,
        borderX && '*:not-first:border-l',
        className,
      )}
      {...props}
    />
  )
}

function Cell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      className={cn(
        `
          p-3 py-2 align-middle whitespace-nowrap
          [&:has([role=checkbox])]:pr-0
          [&>[role=checkbox]]:translate-y-[2px]
        `,
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
