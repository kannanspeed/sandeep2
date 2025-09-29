import { Suspense } from 'react'
import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TeamSection } from '@/components/team-section'
import { StatsSection } from '@/components/stats-section'
import { AboutSkeleton } from '@/components/about-skeleton'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about our mission to showcase modern Next.js development practices and create comprehensive learning resources.',
  openGraph: {
    title: 'About | Next.js Comprehensive Blog',
    description: 'Learn about our mission to showcase modern Next.js development practices and create comprehensive learning resources.',
    images: ['/og-about.png'],
  },
}

const features = [
  {
    title: 'Modern Architecture',
    description: 'Built with Next.js 14, App Router, and Server Components for optimal performance.',
    icon: '🏗️',
  },
  {
    title: 'Performance First',
    description: 'Optimized for Core Web Vitals with image optimization, caching, and streaming.',
    icon: '⚡',
  },
  {
    title: 'Developer Experience',
    description: 'TypeScript, Tailwind CSS, and modern tooling for the best development experience.',
    icon: '🛠️',
  },
  {
    title: 'Accessibility',
    description: 'WCAG compliant with semantic HTML, keyboard navigation, and screen reader support.',
    icon: '♿',
  },
  {
    title: 'SEO Optimized',
    description: 'Dynamic metadata, OpenGraph, and structured data for better search visibility.',
    icon: '🔍',
  },
  {
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices and screen sizes.',
    icon: '📱',
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          About Next.js Comprehensive Blog
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're passionate about modern web development and creating comprehensive resources 
          that showcase the full power of Next.js and the React ecosystem.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="mb-16">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
          <CardDescription>
            Empowering developers with comprehensive Next.js knowledge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">What We Do</h3>
              <p className="text-muted-foreground mb-4">
                This blog serves as a comprehensive showcase of modern Next.js development practices. 
                We demonstrate real-world implementations of advanced features including:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• File-system routing and dynamic routes</li>
                <li>• Server Components and data fetching</li>
                <li>• Caching strategies and performance optimization</li>
                <li>• Error handling and user experience</li>
                <li>• Image optimization and Core Web Vitals</li>
                <li>• Metadata and SEO best practices</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Why We Built This</h3>
              <p className="text-muted-foreground mb-4">
                Modern web development requires understanding many interconnected concepts. 
                We created this comprehensive example to demonstrate how all these pieces 
                work together in a real application.
              </p>
              <p className="text-muted-foreground">
                Every feature is implemented with production-ready code, best practices, 
                and attention to detail that you'd expect in a professional application.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Features Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <Suspense fallback={<div className="h-32 skeleton rounded-lg mb-16" />}>
        <StatsSection />
      </Suspense>

      {/* Team Section */}
      <Suspense fallback={<AboutSkeleton />}>
        <TeamSection />
      </Suspense>

      {/* Technology Stack */}
      <Card className="mt-16">
        <CardHeader>
          <CardTitle>Technology Stack</CardTitle>
          <CardDescription>
            Built with modern tools and best practices
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Next.js 14',
              'React 18',
              'TypeScript',
              'Tailwind CSS',
              'MDX',
              'Vercel',
              'ESLint',
              'Prettier',
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="justify-center py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
