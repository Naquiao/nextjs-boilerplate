import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getBlogPost, getBlogPosts } from '../../../lib/blog'
import { Button } from '../../../components/ui/Button'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map(post => ({
    slug: post.id
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} - NextJS Boilerplate Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <div className="mb-12">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            ← Back to Blog
          </Button>
        </Link>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-foreground/10 text-foreground/70 rounded-full text-sm">
            {post.category}
          </span>
          <span className="text-sm text-foreground/50">{post.readTime}</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center text-foreground/60 mb-6">
          <span>By {post.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 bg-foreground/5 text-foreground/60 rounded text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <article className="prose prose-lg max-w-none">
        <div 
          className="markdown-content"
          dangerouslySetInnerHTML={{ 
            __html: post.content
              .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
              .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
              .replace(/^### (.*$)/gim, '<h3>$1</h3>')
              .replace(/^## (.*$)/gim, '<h2>$1</h2>')
              .replace(/^# (.*$)/gim, '<h1>$1</h1>')
              .replace(/^\* (.*$)/gim, '<li>$1</li>')
              .replace(/^\d+\. (.*$)/gim, '<li>$1</li>')
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\*(.*?)\*/g, '<em>$1</em>')
              .replace(/\n\n/g, '</p><p>')
              .replace(/^(.*)$/gim, '<p>$1</p>')
              .replace(/<p><h/g, '<h')
              .replace(/<\/h([1-6])><\/p>/g, '</h$1>')
              .replace(/<p><li>/g, '<ul><li>')
              .replace(/<\/li><\/p>/g, '</li></ul>')
              .replace(/<p><pre>/g, '<pre>')
              .replace(/<\/pre><\/p>/g, '</pre>')
          }}
        />
      </article>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-foreground/10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h3 className="font-semibold mb-2">Enjoyed this post?</h3>
            <p className="text-foreground/70 text-sm">
              Share your thoughts or questions with us.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
            <Link href="/blog">
              <Button>Read More Posts</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 