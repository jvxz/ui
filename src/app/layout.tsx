import { type Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'

import { Providers } from '@/components/providers'
import '@/styles/globals.css'
import { ThemeToggle } from '@/components/theme-toggle'

export const metadata: Metadata = {
  title: 'ui-kit',
  description: 'personal ui kit',
  icons: [{
    rel: 'icon',
    url: 'https://github.com/jvxz.png',
  }],
}

const font = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${font.variable}`}
    >
      <body>
        <Providers>
          <div className="top-4 right-4 fixed">
            <ThemeToggle />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  )
}
