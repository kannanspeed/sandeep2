export default function BlogPostLoading() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Back Button Skeleton */}
      <div className="mb-6">
        <div className="h-10 w-32 skeleton rounded" />
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        {/* Main Content Skeleton */}
        <article className="lg:col-span-3">
          {/* Header Skeleton */}
          <header className="mb-8">
            <div className="h-6 w-20 skeleton rounded mb-4" />
            <div className="h-12 w-full skeleton rounded mb-4" />
            <div className="h-6 w-3/4 skeleton rounded mb-6" />
            
            {/* Meta Information Skeleton */}
            <div className="flex flex-wrap gap-6 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-4 w-24 skeleton rounded" />
              ))}
            </div>

            {/* Tags Skeleton */}
            <div className="flex flex-wrap gap-2 mb-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 w-16 skeleton rounded-full" />
              ))}
            </div>

            {/* Featured Image Skeleton */}
            <div className="aspect-video w-full skeleton rounded-lg mb-8" />
          </header>

          {/* Content Skeleton */}
          <div className="prose prose-lg max-w-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="mb-4">
                <div className="h-4 w-full skeleton rounded mb-2" />
                <div className="h-4 w-full skeleton rounded mb-2" />
                <div className="h-4 w-3/4 skeleton rounded" />
              </div>
            ))}
          </div>
        </article>

        {/* Sidebar Skeleton */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* Author Info Skeleton */}
            <div className="border rounded-lg p-6">
              <div className="h-6 w-32 skeleton rounded mb-4" />
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 skeleton rounded-full" />
                <div>
                  <div className="h-4 w-24 skeleton rounded mb-2" />
                  <div className="h-3 w-32 skeleton rounded" />
                </div>
              </div>
            </div>

            {/* Related Posts Skeleton */}
            <div className="border rounded-lg p-6">
              <div className="h-6 w-32 skeleton rounded mb-4" />
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="space-y-2">
                    <div className="h-4 w-full skeleton rounded" />
                    <div className="h-3 w-full skeleton rounded" />
                    <div className="h-3 w-2/3 skeleton rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}


