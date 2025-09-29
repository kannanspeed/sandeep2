import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Next.js Comprehensive Blog',
    template: '%s | Next.js Comprehensive Blog',
  },
  description: 'A comprehensive Next.js blog application showcasing all modern features including routing, data fetching, caching, streaming, styling, error handling, image optimization, metadata, MDX, and more.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Blog', 'MDX', 'Performance'],
  authors: [{ name: 'Next.js Blog Team' }],
  creator: 'Next.js Blog Team',
  publisher: 'Next.js Blog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nextjs-comprehensive-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nextjs-comprehensive-blog.vercel.app',
    title: 'Next.js Comprehensive Blog',
    description: 'A comprehensive Next.js blog application showcasing all modern features',
    siteName: 'Next.js Comprehensive Blog',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Next.js Comprehensive Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Comprehensive Blog',
    description: 'A comprehensive Next.js blog application showcasing all modern features',
    images: ['/og-image.png'],
    creator: '@nextjs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

