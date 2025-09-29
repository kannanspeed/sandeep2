import { getPosts } from '@/lib/api'
import { BlogCard } from '@/components/blog-card'
import { Pagination } from '@/components/pagination'
import { NoResults } from '@/components/no-results'

interface BlogListProps {
  searchParams: {
    category?: string
    tag?: string
    search?: string
    sort?: string
    page?: string
  }
  currentPage: number
  postsPerPage: number
  offset: number
}

export async function BlogList({ searchParams, currentPage, postsPerPage, offset }: BlogListProps) {
  const { category, tag, search, sort } = searchParams

  // Build query options
  const options: any = {
    limit: postsPerPage,
    offset,
  }

  if (category) options.category = category
  if (tag) options.tag = tag
  if (search) {
    // For demo purposes, we'll filter client-side
    // In a real app, you'd handle this server-side
  }

  const posts = await getPosts(options)

  // Client-side filtering for search (demo purposes)
  let filteredPosts = posts
  if (search) {
    filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  // Client-side sorting (demo purposes)
  if (sort) {
    switch (sort) {
      case 'newest':
        filteredPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        break
      case 'oldest':
        filteredPosts.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
        break
      case 'popular':
        filteredPosts.sort((a, b) => b.views - a.views)
        break
      case 'likes':
        filteredPosts.sort((a, b) => b.likes - a.likes)
        break
    }
  }

  if (filteredPosts.length === 0) {
    return <NoResults searchTerm={search} />
  }

  return (
    <div className="space-y-8">
      {/* Results Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">
            {search ? `Search results for "${search}"` : 'Latest Posts'}
          </h2>
          <p className="text-muted-foreground">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} found
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination 
        currentPage={currentPage}
        totalPages={Math.ceil(filteredPosts.length / postsPerPage)}
        searchParams={searchParams}
      />
    </div>
  )
}

