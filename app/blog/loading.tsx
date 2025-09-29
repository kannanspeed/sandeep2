import { BlogSkeleton } from '@/components/blog-skeleton'

export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <div className="h-10 w-32 skeleton rounded mb-4" />
        <div className="h-6 w-96 skeleton rounded" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Sidebar Skeleton */}
        <div className="lg:col-span-1">
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="h-6 w-32 skeleton rounded mb-4" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="h-4 w-full skeleton rounded" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Skeleton */}
        <div className="lg:col-span-3">
          <BlogSkeleton />
        </div>
      </div>
    </div>
  )
}


