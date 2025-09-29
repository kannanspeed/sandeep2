import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="text-center">
          <div className="h-12 w-96 skeleton rounded mx-auto mb-4" />
          <div className="h-6 w-64 skeleton rounded mx-auto" />
        </div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="h-6 w-32 skeleton rounded" />
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Array.from({ length: 4 }).map((_, j) => (
                        <div key={j} className="h-4 w-full skeleton rounded" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <div className="h-8 w-48 skeleton rounded" />
              <div className="h-4 w-32 skeleton rounded" />
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video skeleton" />
                    <CardHeader>
                      <div className="h-5 w-20 skeleton rounded mb-2" />
                      <div className="h-6 w-full skeleton rounded mb-2" />
                      <div className="h-6 w-3/4 skeleton rounded" />
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="h-3 w-full skeleton rounded" />
                        <div className="h-3 w-full skeleton rounded" />
                        <div className="h-3 w-2/3 skeleton rounded" />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        <div className="h-5 w-16 skeleton rounded-full" />
                        <div className="h-5 w-20 skeleton rounded-full" />
                        <div className="h-5 w-14 skeleton rounded-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
