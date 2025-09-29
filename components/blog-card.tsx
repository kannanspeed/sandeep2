import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, Heart, Eye } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import type { Post } from '@/lib/api'

interface BlogCardProps {
  post: Post
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {post.featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {post.readTime} min
          </div>
        </div>
        
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </CardTitle>
        
        <CardDescription className="line-clamp-3">
          {post.excerpt}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{post.tags.length - 3}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="mr-1 h-3 w-3" />
            {post.author}
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Heart className="mr-1 h-3 w-3" />
              {post.likes}
            </div>
            <div className="flex items-center">
              <Eye className="mr-1 h-3 w-3" />
              {post.views}
            </div>
          </div>
        </div>
        
        <div className="flex items-center mt-2 text-xs text-muted-foreground">
          <Calendar className="mr-1 h-3 w-3" />
          {new Date(post.publishedAt).toLocaleDateString()}
        </div>
      </CardContent>
    </Card>
  )
}

