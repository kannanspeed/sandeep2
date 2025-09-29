import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// Simulate slow data fetching
async function getStats() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  return {
    posts: 50,
    features: 12,
    performance: 100,
    accessibility: 95,
    seo: 98,
    users: 1250,
  }
}

export async function StatsSection() {
  const stats = await getStats()

  const statItems = [
    {
      title: 'Blog Posts',
      value: `${stats.posts}+`,
      description: 'Comprehensive tutorials and guides',
    },
    {
      title: 'Features',
      value: stats.features,
      description: 'Next.js features demonstrated',
    },
    {
      title: 'Performance',
      value: `${stats.performance}%`,
      description: 'Lighthouse performance score',
    },
    {
      title: 'Accessibility',
      value: `${stats.accessibility}%`,
      description: 'WCAG compliance score',
    },
    {
      title: 'SEO Score',
      value: `${stats.seo}%`,
      description: 'Search optimization rating',
    },
    {
      title: 'Users',
      value: `${stats.users.toLocaleString()}`,
      description: 'Monthly active users',
    },
  ]

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">By the Numbers</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {statItems.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">
                {stat.value}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-medium">
                {stat.title}
              </CardDescription>
              <CardDescription className="text-xs mt-1">
                {stat.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


