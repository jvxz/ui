import { ThemeProvider } from 'next-themes'

import { Toaster } from '@/components/ui/toast'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
      <Toaster />
    </ThemeProvider>
  )
}

export { Providers }
