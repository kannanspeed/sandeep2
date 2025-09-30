import { getCategories, getTags } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
            type="category"
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
            type="tag"
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
              { value: 'newest', label: 'Newest First', name: 'newest' },
              { value: 'oldest', label: 'Oldest First', name: 'oldest' },
              { value: 'popular', label: 'Most Popular', name: 'popular' },
              { value: 'likes', label: 'Most Liked', name: 'likes' },
            ]}
            paramKey="sort"
            type="sort"
          />
        </CardContent>
      </Card>
    </div>
  )
}
