'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface FilterSectionProps {
  items: Array<{
    slug?: string
    value?: string
    name: string
    count?: number
    label?: string
  }>
  paramKey: string
  type: 'category' | 'tag' | 'sort'
}

export function FilterSection({ 
  items, 
  paramKey, 
  type
}: FilterSectionProps) {
  const searchParams = useSearchParams()
  const currentValue = searchParams.get(paramKey)

  const createUrl = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value === currentValue) {
      params.delete(paramKey)
    } else {
      params.set(paramKey, value)
    }
    params.delete('page') // Reset to first page when filtering
    return `/blog?${params.toString()}`
  }

  const getValue = (item: any) => {
    return item.slug || item.value || item.name
  }

  const renderItem = (item: any) => {
    switch (type) {
      case 'category':
      case 'tag':
        return (
          <div className="flex items-center justify-between">
            <span>{item.name}</span>
            {item.count && (
              <Badge variant="secondary" className="text-xs">
                {item.count}
              </Badge>
            )}
          </div>
        )
      case 'sort':
        return <span>{item.label}</span>
      default:
        return <span>{item.name}</span>
    }
  }

  return (
    <div className="space-y-2">
      {/* Clear All */}
      {currentValue && (
        <Link
          href="/blog"
          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Clear all filters
        </Link>
      )}
      
      {/* Filter Items */}
      {items.map((item, index) => {
        const value = getValue(item)
        const isActive = currentValue === value
        
        return (
          <Link
            key={index}
            href={createUrl(value)}
            className={cn(
              'block p-2 rounded-md text-sm transition-colors',
              isActive
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-accent hover:text-accent-foreground'
            )}
          >
            {renderItem(item)}
          </Link>
        )
      })}
    </div>
  )
}
