import { Button } from "../components/ui/Button";
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/Card";
import Link from "next/link";

const features = [
  {
    title: "🚀 Modern Stack",
    description: "Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4 for the best developer experience."
  },
  { 
    title: "🎨 Beautiful UI",
    description: "Pre-built components with dark/light theme support and responsive design out of the box."
  },
  {
    title: "📱 Responsive",
    description: "Mobile-first design that works perfectly on all devices and screen sizes."
  },
  {
    title: "⚡ Performance",
    description: "Optimized for Core Web Vitals with automatic code splitting and image optimization."
  },
  {
    title: "🔒 Type-Safe",
    description: "Full TypeScript support with strict type checking for better code quality."
  },
  {
    title: "🛠️ Developer Ready",
    description: "Pre-configured with ESLint, routing, API routes, and deployment-ready setup."
  }
];

export default function Home() {
  return (   
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Next.js Boilerplate</span>
            <span className="block text-2xl sm:text-3xl font-normal text-foreground/70 mt-2">
              Production-ready template for modern web apps
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60 mb-8">
            Skip the setup and start building. This boilerplate includes everything you need to create amazing web applications with the latest technologies.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/about">
               <Button size="lg">Get Started</Button>
             </Link>
             <Link href="/blog">
               <Button variant="outline" size="lg">View Examples</Button>
             </Link>
           </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-foreground/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              A comprehensive boilerplate with all the modern tools and patterns you need to build production-ready applications.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-foreground/60 mb-8 text-lg">
            Start your next project with confidence using our battle-tested boilerplate.
          </p>
                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link href="/contact">
               <Button size="lg">Get in Touch</Button>
             </Link>
             <Link href="/dashboard">
               <Button variant="outline" size="lg">View Dashboard</Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
