'use client'
import type { ButtonProps } from '@/components/ui/button'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/react'

const size: ButtonProps['size'] = 'default'
const disabled = false

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <Button
          variant="default"
          size={size}
        >
          Primary
          <Icon icon="mdi:arrow-right" />
        </Button>
        <Button
          variant="outline"
          size={size}
          disabled={disabled}
        >
          Outline
        </Button>
        <Button variant="ghost" size={size} disabled={disabled}>
          Ghost
        </Button>
        <Button variant="destructive" size={size} disabled={disabled}>
          Destructive
        </Button>
        <Button variant="link" size={size} disabled={disabled}>
          Link
        </Button>
      </div>
    </div>
  )
}
