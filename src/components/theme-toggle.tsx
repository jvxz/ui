'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button size="icon" onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      <Icon icon={resolvedTheme === 'dark' ? 'ph:sun-fill' : 'ph:moon-stars-fill'} />
    </Button>
  )
}

export { ThemeToggle }
