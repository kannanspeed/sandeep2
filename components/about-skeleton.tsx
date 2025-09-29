export function AboutSkeleton() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="border rounded-lg p-6 text-center">
            <div className="w-24 h-24 skeleton rounded-full mx-auto mb-4" />
            <div className="h-6 w-32 skeleton rounded mx-auto mb-2" />
            <div className="h-4 w-24 skeleton rounded mx-auto mb-4" />
            
            <div className="space-y-2 mb-4">
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-full skeleton rounded" />
              <div className="h-3 w-2/3 skeleton rounded mx-auto" />
            </div>
            
            <div className="flex flex-wrap gap-1 justify-center mb-4">
              <div className="h-5 w-16 skeleton rounded-full" />
              <div className="h-5 w-20 skeleton rounded-full" />
              <div className="h-5 w-14 skeleton rounded-full" />
            </div>
            
            <div className="flex justify-center space-x-4">
              <div className="h-4 w-4 skeleton rounded" />
              <div className="h-4 w-4 skeleton rounded" />
              <div className="h-4 w-4 skeleton rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


