export function MDXSkeleton() {
  return (
    <div className="space-y-8">
      {/* Introduction Card Skeleton */}
      <div className="border rounded-lg p-6">
        <div className="h-6 w-48 skeleton rounded mb-4" />
        <div className="h-4 w-full skeleton rounded mb-2" />
        <div className="h-4 w-3/4 skeleton rounded mb-6" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="h-5 w-32 skeleton rounded" />
            <div className="space-y-2">
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-2/3 skeleton rounded" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-5 w-32 skeleton rounded" />
            <div className="space-y-2">
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-2/3 skeleton rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Card Skeleton */}
      <div className="border rounded-lg p-6">
        <div className="h-6 w-40 skeleton rounded mb-4" />
        <div className="h-4 w-full skeleton rounded mb-2" />
        <div className="h-4 w-2/3 skeleton rounded mb-6" />
        
        {/* Tabs Skeleton */}
        <div className="flex space-x-2 mb-6">
          <div className="h-10 w-20 skeleton rounded" />
          <div className="h-10 w-20 skeleton rounded" />
        </div>
        
        {/* Content Skeleton */}
        <div className="space-y-6">
          <div className="h-8 w-64 skeleton rounded" />
          <div className="space-y-2">
            <div className="h-4 w-full skeleton rounded" />
            <div className="h-4 w-full skeleton rounded" />
            <div className="h-4 w-3/4 skeleton rounded" />
          </div>
          
          <div className="h-6 w-48 skeleton rounded" />
          <div className="h-32 w-full skeleton rounded" />
          
          <div className="h-6 w-40 skeleton rounded" />
          <div className="h-48 w-full skeleton rounded" />
        </div>
      </div>

      {/* Features Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="h-5 w-5 skeleton rounded mr-2" />
              <div className="h-5 w-32 skeleton rounded" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-2/3 skeleton rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


