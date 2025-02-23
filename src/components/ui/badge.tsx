import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva('flex justify-center items-center px-2 py-0.5 rounded-lg w-fit font-medium text-sm transition-all duration-100 select-none', {
  variants: {
    variant: {
      default: 'bg-secondary/50 hover:bg-secondary border',
      outline: 'bg-transparent border hover:bg-secondary/50',
      ghost: 'bg-transparent border-none hover:bg-secondary/50 ',
    },
  },
})

function Badge({ className, variant = 'default', ...props }: VariantProps<typeof badgeVariants> & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(badgeVariants({
        variant,
      }), className)}
      {...props}
    />
  )
}

export { Badge }
