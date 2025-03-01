import { Avatar as AvatarPrimitive } from '@radix-ui/react-avatar'
import NextImage from 'next/image'

import { cn } from '@/lib/utils'

function Root({
  className,
  square,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  square?: boolean
}) {
  return (
    <AvatarPrimitive
      className={cn(
        'rounded-full select-none size-10 border group place-items-center grid',
        square && 'rounded-sm',
        className,
      )}
      {...props}
    />
  )
}

function Image({
  className,
  src,
  alt,
  supportNextJs,
  ...props
}: React.HTMLAttributes<HTMLImageElement> & {
  src: string
  alt: string
  supportNextJs?: boolean
}) {
  const Comp = supportNextJs ? NextImage : 'img'
  return (
    <Comp
      className={cn(
        '[grid-area:1/1] rounded-[inherit] col-span-1 row-span-1 ',
        className,
      )}
      src={src}
      alt={alt}
      {...props}
    />
  )
}

function Fallback({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('[grid-area:1/1] col-span-1 row-span-1 -z-10', className)}
      {...props}
    />
  )
}

export const Avatar = {
  Root,
  Image,
  Fallback,
}
