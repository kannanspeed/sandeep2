import Link from 'next/link'
import { ArrowRight, BookOpen, Zap, Shield, Palette, Code, Database, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: BookOpen,
    title: 'File-system Routing',
    description: 'Automatic routing based on file structure with dynamic routes and layouts.',
  },
  {
    icon: Database,
    title: 'Data Fetching & Caching',
    description: 'Server components with built-in caching, request memoization, and data revalidation.',
  },
  {
    icon: Zap,
    title: 'Suspense & Streaming',
    description: 'Progressive loading with React Suspense and streaming for better user experience.',
  },
  {
    icon: Palette,
    title: 'Styling with Tailwind',
    description: 'Modern CSS with Tailwind CSS, responsive design, and dark mode support.',
  },
  {
    icon: Shield,
    title: 'Error Management',
    description: 'Comprehensive error handling with error boundaries and custom 404 pages.',
  },
  {
    icon: Code,
    title: 'Image Optimization',
    description: 'Automatic image optimization with Next.js Image component and Core Web Vitals.',
  },
  {
    icon: Globe,
    title: 'Metadata & SEO',
    description: 'Dynamic metadata, OpenGraph, and SEO optimization for better discoverability.',
  },
  {
    icon: BookOpen,
    title: 'Markdown & MDX',
    description: 'Rich content with Markdown and MDX support for interactive blog posts.',
  },
]

const stats = [
  { label: 'Blog Posts', value: '50+' },
  { label: 'Features', value: '12' },
  { label: 'Performance Score', value: '100' },
  { label: 'Accessibility', value: 'A+' },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="gradient-text">Next.js Comprehensive Blog</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              A feature-rich blog application showcasing all modern Next.js capabilities including routing, 
              data fetching, caching, streaming, styling, error handling, image optimization, metadata, MDX, and more.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/blog">
                  Explore Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Comprehensive Next.js Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every modern Next.js feature implemented and demonstrated
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Explore?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into the blog posts, explore the gallery, or check out the MDX demo to see all features in action.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/blog">
                  Read Blog Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
