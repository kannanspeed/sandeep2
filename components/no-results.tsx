import { Search, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface NoResultsProps {
  searchTerm?: string
}

export function NoResults({ searchTerm }: NoResultsProps) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
        <Search className="h-12 w-12 text-muted-foreground" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2">
        {searchTerm ? `No results found for "${searchTerm}"` : 'No posts found'}
      </h3>
      
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        {searchTerm 
          ? 'Try adjusting your search terms or browse our categories to find what you\'re looking for.'
          : 'There are no posts available at the moment. Check back later for new content.'
        }
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/blog">
            <RefreshCw className="mr-2 h-4 w-4" />
            View All Posts
          </Link>
        </Button>
        
        {searchTerm && (
          <Button variant="outline" asChild>
            <Link href="/blog">
              Clear Search
            </Link>
          </Button>
        )}
      </div>
    </div>
  )
}

