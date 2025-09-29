import { getCategories, getTags } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FilterSection } from '@/components/filter-section'

export async function BlogFilters() {
  const [categories, tags] = await Promise.all([
    getCategories(),
    getTags()
  ])

  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <FilterSection
            items={categories}
            paramKey="category"
            renderItem={(category) => (
              <div className="flex items-center justify-between">
                <span>{category.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            )}
          />
        </CardContent>
      </Card>

      {/* Popular Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <FilterSection
            items={tags.slice(0, 10)}
            paramKey="tag"
            renderItem={(tag) => (
              <div className="flex items-center justify-between">
                <span>{tag.name}</span>
                <Badge variant="secondary" className="text-xs">
                  {tag.count}
                </Badge>
              </div>
            )}
          />
        </CardContent>
      </Card>

      {/* Sort Options */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <FilterSection
            items={[
              { value: 'newest', label: 'Newest First' },
              { value: 'oldest', label: 'Oldest First' },
              { value: 'popular', label: 'Most Popular' },
              { value: 'likes', label: 'Most Liked' },
            ]}
            paramKey="sort"
            renderItem={(item) => (
              <span>{item.label}</span>
            )}
          />
        </CardContent>
      </Card>
    </div>
  )
}
