import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "About - NextJS Boilerplate",
  description: "Learn more about our modern Next.js boilerplate and its features.",
};

const technologies = [
  {
    name: "Next.js 15",
    description: "The React framework for production with latest features like Server Components and App Router.",
    category: "Framework"
  },
  {
    name: "React 19",
    description: "The latest version of React with improved performance and new features.",
    category: "Library"
  },
  {
    name: "TypeScript",
    description: "Static type checking for better code quality and developer experience.",
    category: "Language"
  },
  {
    name: "Tailwind CSS v4",
    description: "Utility-first CSS framework for rapid UI development with the latest features.",
    category: "Styling"
  },
  {
    name: "Geist Font",
    description: "Modern, readable font family optimized for digital interfaces.",
    category: "Typography"
  }
];

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About This Boilerplate</h1>
        <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
          A carefully crafted Next.js boilerplate designed to help developers build production-ready applications faster. 
          Built with modern technologies and best practices in mind.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 text-lg leading-relaxed">
              We believe developers shouldn't have to spend hours setting up the same foundation for every project. 
              This boilerplate provides a solid, well-tested starting point that follows industry best practices, 
              allowing you to focus on building your unique features rather than configuring tools.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Technologies Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies Used</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{tech.name}</CardTitle>
                  <span className="text-xs bg-foreground/10 px-2 py-1 rounded-full">
                    {tech.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-semibold mb-2">Modern UI Components</h3>
                <p className="text-foreground/70 text-sm">
                  Pre-built, reusable components with proper TypeScript interfaces and responsive design.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dark/Light Mode</h3>
                <p className="text-foreground/70 text-sm">
                  Complete theme system with persistent preferences and system detection.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-semibold mb-2">API Routes</h3>
                <p className="text-foreground/70 text-sm">
                  Example API endpoints demonstrating server-side functionality and form handling.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-semibold mb-2">Dynamic Routing</h3>
                <p className="text-foreground/70 text-sm">
                  Blog system and dashboard with nested layouts showcasing Next.js App Router.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-semibold mb-2">SEO Optimized</h3>
                <p className="text-foreground/70 text-sm">
                  Proper metadata, Open Graph tags, and structured data for better search visibility.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-sm">
                ✓
              </div>
              <div>
                <h3 className="font-semibold mb-2">Production Ready</h3>
                <p className="text-foreground/70 text-sm">
                  Optimized build configuration and deployment-ready setup for modern hosting platforms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <Card className="bg-foreground/5">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Get Started?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-6">
              Clone this repository and start building your next amazing project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" size="lg">View Examples</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
} 