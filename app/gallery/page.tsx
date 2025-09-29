import { Suspense } from 'react'
import { Metadata } from 'next'
import { ImageGallery } from '@/components/image-gallery'
import { GallerySkeleton } from '@/components/gallery-skeleton'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore our image gallery showcasing Next.js Image optimization features and Core Web Vitals improvements.',
  openGraph: {
    title: 'Gallery | Next.js Comprehensive Blog',
    description: 'Explore our image gallery showcasing Next.js Image optimization features and Core Web Vitals improvements.',
    images: ['/og-gallery.png'],
  },
}

// Sample gallery data
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    alt: 'Modern web development workspace',
    title: 'Development Environment',
    description: 'A clean, modern workspace setup for web development',
    category: 'Workspace',
    tags: ['development', 'workspace', 'modern'],
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    alt: 'Data visualization dashboard',
    title: 'Analytics Dashboard',
    description: 'Beautiful data visualization with charts and graphs',
    category: 'Dashboard',
    tags: ['analytics', 'dashboard', 'data'],
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
    alt: 'Mobile app interface design',
    title: 'Mobile Interface',
    description: 'Responsive mobile app design with modern UI elements',
    category: 'Mobile',
    tags: ['mobile', 'ui', 'design'],
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    alt: 'Code editor with syntax highlighting',
    title: 'Code Editor',
    description: 'Professional code editor with advanced features',
    category: 'Development',
    tags: ['code', 'editor', 'programming'],
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    alt: 'Business analytics and charts',
    title: 'Business Analytics',
    description: 'Comprehensive business intelligence dashboard',
    category: 'Analytics',
    tags: ['business', 'analytics', 'charts'],
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    alt: 'Team collaboration workspace',
    title: 'Team Collaboration',
    description: 'Modern team workspace for collaborative development',
    category: 'Collaboration',
    tags: ['team', 'collaboration', 'workspace'],
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    alt: 'Cloud infrastructure and servers',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud infrastructure for modern applications',
    category: 'Infrastructure',
    tags: ['cloud', 'infrastructure', 'servers'],
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop',
    alt: 'Database management interface',
    title: 'Database Management',
    description: 'Advanced database management and administration tools',
    category: 'Database',
    tags: ['database', 'management', 'tools'],
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop',
    alt: 'User interface design mockup',
    title: 'UI Design Mockup',
    description: 'Professional UI/UX design mockup for web applications',
    category: 'Design',
    tags: ['ui', 'ux', 'design', 'mockup'],
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    alt: 'Security and authentication interface',
    title: 'Security Dashboard',
    description: 'Comprehensive security monitoring and authentication system',
    category: 'Security',
    tags: ['security', 'authentication', 'monitoring'],
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    alt: 'Performance monitoring tools',
    title: 'Performance Monitoring',
    description: 'Real-time performance monitoring and optimization tools',
    category: 'Performance',
    tags: ['performance', 'monitoring', 'optimization'],
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    alt: 'API documentation interface',
    title: 'API Documentation',
    description: 'Interactive API documentation with testing capabilities',
    category: 'Documentation',
    tags: ['api', 'documentation', 'testing'],
  },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Image Gallery</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our gallery showcasing Next.js Image optimization features, responsive design, 
          and Core Web Vitals improvements.
        </p>
      </div>

      <Suspense fallback={<GallerySkeleton />}>
        <ImageGallery images={galleryImages} />
      </Suspense>
    </div>
  )
}

