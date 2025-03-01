'use client'
import dynamic from 'next/dynamic'
import type { ThemeProviderProps } from 'next-themes'

import { Toaster } from './ui-old/toast'

const NextThemesProvider = dynamic(
  async () => import('next-themes').then(e => e.ThemeProvider),
  {
    ssr: false,
  },
)

function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
      <Toaster />
    </NextThemesProvider>
  )
}

export { Providers }
