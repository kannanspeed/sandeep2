import { NextRequest, NextResponse } from 'next/server'
import db from '@/data/db.json'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  
  let posts = db.posts

  // Filter by featured
  const featured = searchParams.get('featured')
  if (featured !== null) {
    posts = posts.filter(post => post.featured === (featured === 'true'))
  }

  // Filter by category
  const category = searchParams.get('category')
  if (category) {
    posts = posts.filter(post => post.category.toLowerCase() === category.toLowerCase())
  }

  // Filter by tag
  const tag = searchParams.get('tag')
  if (tag) {
    posts = posts.filter(post => post.tags.includes(tag))
  }

  // Filter by slug
  const slug = searchParams.get('slug')
  if (slug) {
    posts = posts.filter(post => post.slug === slug)
  }

  // Search query
  const q = searchParams.get('q')
  if (q) {
    const query = q.toLowerCase()
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.content.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // Pagination
  const limit = parseInt(searchParams.get('_limit') || '10')
  const start = parseInt(searchParams.get('_start') || '0')
  const end = start + limit

  const paginatedPosts = posts.slice(start, end)

  return NextResponse.json(paginatedPosts)
}


