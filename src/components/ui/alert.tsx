import { cva, VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva('shadow p-4 border rounded', {
  variants: {
    variant: {
      default: 'text-card-foreground bg-card',
      destructive: 'border-destructive text-destructive bg-destructive/[2%]',
    },
  },
})
function Root({ className, icon, children, variant, ...props }: VariantProps<typeof alertVariants> & React.HTMLAttributes<HTMLDivElement> & { icon?: React.ReactNode }) {
  return (
    <div
      className={cn(
        alertVariants({ variant }),
        icon && 'flex items-start gap-3 [&>svg]:mt-[4.25px]',
        className)}
      {...props}
    >
      {icon}
      <div className="space-y-1">{children}</div>
    </div>
  )
}

function Title({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('font-medium text-md', className)}
      {...props}
    />
  )
}

function Description({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('text-sm', className)}
      {...props}
    />
  )
}

export const Alert = {
  Root,
  Title,
  Description,
}

