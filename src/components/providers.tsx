'use client'
import dynamic from 'next/dynamic'
import { type ThemeProviderProps } from 'next-themes'

import { Toaster } from './ui/toast'

const NextThemesProvider = dynamic(
  () => import('next-themes').then(e => e.ThemeProvider),
  {
    ssr: false,
  },
)

function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
      <Toaster />
    </NextThemesProvider>
  )
}

export { Providers }
