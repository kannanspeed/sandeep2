'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

interface FilterSectionProps<T> {
  items: T[]
  paramKey: string
  renderItem: (item: T) => React.ReactNode
  getValue?: (item: T) => string
}

export function FilterSection<T>({ 
  items, 
  paramKey, 
  renderItem,
  getValue = (item: any) => item.slug || item.value || item.name
}: FilterSectionProps<T>) {
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
