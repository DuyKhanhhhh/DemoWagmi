"use client";

import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
// import type { Metadata } from 'next'
import Store from '@/redux/Store'
import { Provider } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers >
          <Provider store={Store}>
            {children}
          </Provider>
        </Providers>

      </body>
    </html>
  )
}