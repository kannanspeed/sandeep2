import { Suspense } from 'react'
import { Metadata } from 'next'
import { MDXDemo } from '@/components/mdx-demo'
import { MDXSkeleton } from '@/components/mdx-skeleton'

export const metadata: Metadata = {
  title: 'MDX Demo',
  description: 'Explore the power of MDX - combining Markdown with React components for rich, interactive content.',
  openGraph: {
    title: 'MDX Demo | Next.js Comprehensive Blog',
    description: 'Explore the power of MDX - combining Markdown with React components for rich, interactive content.',
    images: ['/og-mdx.png'],
  },
}

export default function MDXDemoPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">MDX Demo</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Experience the power of MDX - combining the simplicity of Markdown with the power of React components 
          to create rich, interactive content.
        </p>
      </div>

      <Suspense fallback={<MDXSkeleton />}>
        <MDXDemo />
      </Suspense>
    </div>
  )
}


