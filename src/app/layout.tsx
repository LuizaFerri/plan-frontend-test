import React from 'react'

import type { Metadata } from 'next'
import { Exo, Open_Sans } from 'next/font/google'

import '@/styles/globals.scss'

const exo = Exo({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-exo'
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans'
})

export const metadata: Metadata = {
  title: 'REST Countries',
  description: 'Explore países do mundo todo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${exo.variable} ${openSans.variable}`}>{children}</body>
    </html>
  )
}
