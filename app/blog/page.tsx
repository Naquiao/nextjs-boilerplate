import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { getBlogPosts } from "../../lib/blog";

export const metadata = {
  title: "Blog - NextJS Boilerplate",
  description: "Learn about Next.js, React, TypeScript, and modern web development best practices.",
};

export default function Blog() {
  const posts = getBlogPosts();
  const categories = Array.from(new Set(posts.map(post => post.category)));

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Insights, tutorials, and best practices for modern web development with Next.js and React.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <span className="px-3 py-1 bg-foreground text-background rounded-full text-sm font-medium">
          All Posts
        </span>
        {categories.map(category => (
          <span 
            key={category}
            className="px-3 py-1 bg-foreground/10 text-foreground/70 rounded-full text-sm hover:bg-foreground/20 transition-colors cursor-pointer"
          >
            {category}
          </span>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs bg-foreground/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-foreground/50">
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-xl leading-tight">
                  {post.title}
                </CardTitle>
                <div className="flex items-center text-sm text-foreground/60 mt-2">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="text-xs bg-foreground/5 text-foreground/60 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* CTA Section */}
      <section className="text-center mt-16">
        <Card className="bg-foreground/5">
          <CardHeader>
            <CardTitle className="text-2xl">Want to Contribute?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-6">
              Have ideas for blog posts or want to share your knowledge? We'd love to hear from you.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center justify-center rounded-lg font-medium transition-colors bg-foreground text-background hover:bg-foreground/90 h-10 px-4">
                Get in Touch
              </span>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 