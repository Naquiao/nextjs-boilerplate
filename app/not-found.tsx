import Link from 'next/link'
import { Button } from '../components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="text-center">
        <CardHeader>
          <div className="text-6xl mb-4">🔍</div>
          <CardTitle className="text-2xl">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-foreground/70">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <p className="text-sm text-foreground/60">
            The page might have been moved, deleted, or you may have entered an incorrect URL.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button>Go home</Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline">Browse blog</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 