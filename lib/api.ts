// API utilities for data fetching with caching
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://nextjs-comprehensive-blog.vercel.app/api'
  : 'http://localhost:3000/api'

export interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  category: string
  readTime: number
  featured: boolean
  image: string
  likes: number
  views: number
}

export interface Category {
  id: number
  name: string
  slug: string
  count: number
}

export interface Tag {
  name: string
  count: number
}

export interface User {
  id: number
  name: string
  email: string
  avatar: string
  bio: string
  social: {
    twitter: string
    github: string
    linkedin: string
  }
}

// Simulate slow data fetching for demonstration
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Fetch posts with caching
export async function getPosts(options?: {
  featured?: boolean
  category?: string
  tag?: string
  limit?: number
  offset?: number
}): Promise<Post[]> {
  // Simulate slow data fetching
  await delay(1000)
  
  const params = new URLSearchParams()
  if (options?.featured !== undefined) params.append('featured', options.featured.toString())
  if (options?.category) params.append('category', options.category)
  if (options?.tag) params.append('tag', options.tag)
  if (options?.limit) params.append('_limit', options.limit.toString())
  if (options?.offset) params.append('_start', options.offset.toString())

  const response = await fetch(`${API_BASE_URL}/posts?${params}`, {
    next: { 
      revalidate: 3600, // Revalidate every hour
      tags: ['posts'] 
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return response.json()
}

// Fetch single post by slug
export async function getPost(slug: string): Promise<Post | null> {
  await delay(800)
  
  const response = await fetch(`${API_BASE_URL}/posts?slug=${slug}`, {
    next: { 
      revalidate: 1800, // Revalidate every 30 minutes
      tags: ['posts', `post-${slug}`] 
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }
  
  const posts = await response.json()
  return posts[0] || null
}

// Fetch categories
export async function getCategories(): Promise<Category[]> {
  await delay(500)
  
  const response = await fetch(`${API_BASE_URL}/categories`, {
    next: { 
      revalidate: 7200, // Revalidate every 2 hours
      tags: ['categories'] 
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch categories')
  }
  
  return response.json()
}

// Fetch tags
export async function getTags(): Promise<Tag[]> {
  await delay(500)
  
  const response = await fetch(`${API_BASE_URL}/tags`, {
    next: { 
      revalidate: 7200, // Revalidate every 2 hours
      tags: ['tags'] 
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch tags')
  }
  
  return response.json()
}

// Fetch user by name
export async function getUser(name: string): Promise<User | null> {
  await delay(300)
  
  const response = await fetch(`${API_BASE_URL}/users?name=${name}`, {
    next: { 
      revalidate: 3600, // Revalidate every hour
      tags: ['users', `user-${name}`] 
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }
  
  const users = await response.json()
  return users[0] || null
}

// Search posts
export async function searchPosts(query: string): Promise<Post[]> {
  await delay(1200)
  
  const response = await fetch(`${API_BASE_URL}/posts?q=${encodeURIComponent(query)}`, {
    next: { 
      revalidate: 1800, // Revalidate every 30 minutes
      tags: ['posts', 'search'] 
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to search posts')
  }
  
  return response.json()
}

// Get related posts
export async function getRelatedPosts(postId: number, limit: number = 3): Promise<Post[]> {
  await delay(600)
  
  const response = await fetch(`${API_BASE_URL}/posts?id_ne=${postId}&_limit=${limit}`, {
    next: { 
      revalidate: 1800, // Revalidate every 30 minutes
      tags: ['posts', 'related'] 
    }
  })
  
  if (!response.ok) {
    throw new Error('Failed to fetch related posts')
  }
  
  return response.json()
}
