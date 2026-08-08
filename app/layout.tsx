import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-jb',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ABTalks — Turn 60 Days of Consistency into Your Dream Internship',
  description:
    'ABTalks runs a 60-day coding challenge for Indian college students. Pick a track, code every day, commit to GitHub, post on LinkedIn, and build a public streak that gets you noticed by recruiters.',
  generator: 'v0.app',
  keywords: [
    'coding challenge',
    'internship',
    'GitHub streak',
    'DSA',
    'web development',
    'placements',
    'Indian college students',
  ],
  openGraph: {
    title: 'ABTalks — 60-Day Coding Challenge',
    description:
      'Build a public learning streak recruiters can see. Code daily, commit, post, and land your dream internship.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1030',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
