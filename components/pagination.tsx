'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PaginationProps {
  currentPage: number
  totalPages: number
  searchParams: Record<string, string | undefined>
}

export function Pagination({ currentPage, totalPages, searchParams }: PaginationProps) {
  if (totalPages <= 1) return null

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams()
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value) params.set(key, value)
    })
    params.set('page', page.toString())
    return `/blog?${params.toString()}`
  }

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  const visiblePages = getVisiblePages()

  return (
    <div className="flex items-center justify-center space-x-2">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        asChild
        disabled={currentPage === 1}
      >
        <Link href={createPageUrl(currentPage - 1)}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Link>
      </Button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => {
        if (page === '...') {
          return (
            <span key={`dots-${index}`} className="px-3 py-2 text-muted-foreground">
              ...
            </span>
          )
        }

        const pageNumber = page as number
        const isActive = currentPage === pageNumber

        return (
          <Button
            key={pageNumber}
            variant={isActive ? 'default' : 'outline'}
            size="sm"
            asChild
          >
            <Link href={createPageUrl(pageNumber)}>
              {pageNumber}
            </Link>
          </Button>
        )
      })}

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        asChild
        disabled={currentPage === totalPages}
      >
        <Link href={createPageUrl(currentPage + 1)}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Link>
      </Button>
    </div>
  )
}
