import type { Metadata } from 'next'
import Script from "next/script"
import { Inter } from 'next/font/google'
import './globals.css'

import { Providers } from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pedro dev',
  description: `I'm a developer who enjoys making digital experiences easier and simpler for people by producing quality work.`,
  authors: [{ name: 'Pedro', url: 'https://github.com/pkratosp' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

        <Script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" async type="module" />
      </body>
    </html>
  )
}
