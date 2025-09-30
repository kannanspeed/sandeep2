// API utilities for data fetching with caching
import dbData from '../data/db.json'

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
  
  let posts = [...dbData.posts]
  
  // Apply filters
  if (options?.featured !== undefined) {
    posts = posts.filter(post => post.featured === options.featured)
  }
  
  if (options?.category) {
    posts = posts.filter(post => post.category === options.category)
  }
  
  if (options?.tag) {
    posts = posts.filter(post => post.tags.includes(options.tag!))
  }
  
  // Apply pagination
  if (options?.offset) {
    posts = posts.slice(options.offset)
  }
  
  if (options?.limit) {
    posts = posts.slice(0, options.limit)
  }
  
  return posts
}

// Fetch single post by slug
export async function getPost(slug: string): Promise<Post | null> {
  await delay(800)
  
  const post = dbData.posts.find(post => post.slug === slug)
  return post || null
}

// Fetch categories
export async function getCategories(): Promise<Category[]> {
  await delay(500)
  
  return dbData.categories
}

// Fetch tags
export async function getTags(): Promise<Tag[]> {
  await delay(500)
  
  return dbData.tags
}

// Fetch user by name
export async function getUser(name: string): Promise<User | null> {
  await delay(300)
  
  const user = dbData.users.find(user => user.name === name)
  return user || null
}

// Search posts
export async function searchPosts(query: string): Promise<Post[]> {
  await delay(1200)
  
  const lowercaseQuery = query.toLowerCase()
  return dbData.posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

// Get related posts
export async function getRelatedPosts(postId: number, limit: number = 3): Promise<Post[]> {
  await delay(600)
  
  return dbData.posts
    .filter(post => post.id !== postId)
    .slice(0, limit)
}
