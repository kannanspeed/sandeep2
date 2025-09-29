export function BlogSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-48 skeleton rounded" />
        <div className="h-4 w-32 skeleton rounded" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            {/* Image Skeleton */}
            <div className="aspect-video skeleton" />
            
            {/* Content Skeleton */}
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-5 w-20 skeleton rounded" />
                <div className="h-4 w-12 skeleton rounded" />
              </div>
              
              <div className="space-y-2">
                <div className="h-6 w-full skeleton rounded" />
                <div className="h-6 w-3/4 skeleton rounded" />
              </div>
              
              <div className="space-y-2">
                <div className="h-4 w-full skeleton rounded" />
                <div className="h-4 w-full skeleton rounded" />
                <div className="h-4 w-2/3 skeleton rounded" />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <div className="h-5 w-16 skeleton rounded-full" />
                <div className="h-5 w-20 skeleton rounded-full" />
                <div className="h-5 w-14 skeleton rounded-full" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="h-4 w-24 skeleton rounded" />
                <div className="flex space-x-4">
                  <div className="h-4 w-8 skeleton rounded" />
                  <div className="h-4 w-8 skeleton rounded" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Skeleton */}
      <div className="flex items-center justify-center space-x-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-8 w-8 skeleton rounded" />
        ))}
      </div>
    </div>
  )
}

