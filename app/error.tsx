'use client'

import { useEffect } from 'react'
import { Button } from '../components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="text-center">
        <CardHeader>
          <div className="text-6xl mb-4">⚠️</div>
          <CardTitle className="text-2xl">Something went wrong!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/70">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <details className="text-left bg-foreground/5 p-4 rounded-lg">
              <summary className="cursor-pointer font-medium mb-2">
                Error Details (Development Only)
              </summary>
              <pre className="text-xs text-foreground/70 whitespace-pre-wrap">
                {error.message}
              </pre>
            </details>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={reset}>
              Try again
            </Button>
            <Button variant="outline" onClick={() => window.location.href = '/'}>
              Go home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 