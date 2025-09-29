'use client'

import { useEffect } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center max-w-md mx-auto px-4">
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="h-12 w-12 text-destructive" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Application Error</h1>
              <p className="text-muted-foreground mb-8">
                A critical error occurred that prevented the application from loading properly.
              </p>
            </div>

            <div className="bg-muted p-4 rounded-lg mb-8 text-left">
              <p className="text-sm font-mono break-all">
                {error.message}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            <Button onClick={reset} className="flex items-center mx-auto">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reload Application
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

