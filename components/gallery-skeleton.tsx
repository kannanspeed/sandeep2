export function GallerySkeleton() {
  return (
    <div className="space-y-8">
      {/* Filter Tabs Skeleton */}
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-8 w-20 skeleton rounded" />
        ))}
      </div>

      {/* Gallery Grid Skeleton */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            {/* Image Skeleton */}
            <div className="aspect-square skeleton" />
            
            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
              <div className="h-5 w-3/4 skeleton rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full skeleton rounded" />
                <div className="h-4 w-2/3 skeleton rounded" />
              </div>
              
              <div className="flex flex-wrap gap-1">
                <div className="h-5 w-16 skeleton rounded-full" />
                <div className="h-5 w-20 skeleton rounded-full" />
                <div className="h-5 w-14 skeleton rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


