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
    default: 'Kannan Blogs',
    template: '%s | Kannan Blogs',
  },
  description: 'A comprehensive blog application showcasing modern web development features including routing, data fetching, caching, streaming, styling, error handling, image optimization, metadata, MDX, and more.',
  keywords: ['Blog', 'React', 'TypeScript', 'Tailwind CSS', 'Web Development', 'MDX', 'Performance', 'Kannan'],
  authors: [{ name: 'Kannan' }],
  creator: 'Kannan',
  publisher: 'Kannan Blogs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://kannan-blogs.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kannan-blogs.vercel.app',
    title: 'Kannan Blogs',
    description: 'A comprehensive blog application showcasing modern web development features',
    siteName: 'Kannan Blogs',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kannan Blogs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kannan Blogs',
    description: 'A comprehensive blog application showcasing modern web development features',
    images: ['/og-image.png'],
    creator: '@kannanblogs',
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

