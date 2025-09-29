import { Suspense } from 'react'
import { Metadata } from 'next'
import { BlogList } from '@/components/blog-list'
import { BlogFilters } from '@/components/blog-filters'
import { BlogSkeleton } from '@/components/blog-skeleton'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Explore our comprehensive collection of Next.js tutorials, guides, and best practices.',
  openGraph: {
    title: 'Blog | Next.js Comprehensive Blog',
    description: 'Explore our comprehensive collection of Next.js tutorials, guides, and best practices.',
    images: ['/og-blog.png'],
  },
}

interface BlogPageProps {
  searchParams: {
    category?: string
    tag?: string
    search?: string
    sort?: string
    page?: string
  }
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = parseInt(searchParams.page || '1')
  const postsPerPage = 6
  const offset = (currentPage - 1) * postsPerPage

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Discover insights, tutorials, and best practices for modern web development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Suspense fallback={<div className="h-64 skeleton rounded-lg" />}>
            <BlogFilters />
          </Suspense>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <Suspense fallback={<BlogSkeleton />}>
            <BlogList 
              searchParams={searchParams}
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              offset={offset}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
