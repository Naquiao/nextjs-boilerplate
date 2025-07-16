export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  category: string
  readTime: string
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "getting-started-with-nextjs-boilerplate",
    title: "Getting Started with Our Next.js Boilerplate",
    excerpt: "Learn how to quickly set up and customize this production-ready Next.js boilerplate for your next project.",
    content: `# Getting Started with Our Next.js Boilerplate

This boilerplate provides everything you need to start building modern web applications with Next.js. Here's what makes it special:

## Quick Setup

1. **Clone the repository**
\`\`\`bash
git clone https://github.com/your-username/nextjs-boilerplate.git
cd nextjs-boilerplate
\`\`\`

2. **Install dependencies**
\`\`\`bash
npm install
\`\`\`

3. **Start development server**
\`\`\`bash
npm run dev
\`\`\`

## Key Features

### Modern Tech Stack
- **Next.js 15**: Latest version with App Router
- **React 19**: Cutting-edge React features
- **TypeScript**: Full type safety
- **Tailwind CSS v4**: Modern utility-first styling

### Built-in Components
- Responsive navigation with theme toggle
- Reusable UI components (Button, Card, Input)
- Form handling with validation
- SEO-optimized metadata

### Developer Experience
- Hot reload with Turbopack
- Strict TypeScript configuration
- Pre-configured ESLint
- Production-ready build setup

## Customization

The boilerplate is designed to be easily customizable. Start by updating the theme colors in \`globals.css\` and modify the navigation links in \`components/Navigation.tsx\`.

## Next Steps

1. Update the metadata in \`app/layout.tsx\`
2. Customize the home page content
3. Add your own pages and components
4. Set up your preferred database
5. Deploy to your favorite platform

Happy coding!`,
    date: "2024-01-15",
    author: "Development Team",
    category: "Tutorial",
    readTime: "5 min read",
    tags: ["Next.js", "Getting Started", "Setup"]
  },
  {
    id: "building-responsive-components",
    title: "Building Responsive Components with Tailwind CSS",
    excerpt: "Master the art of creating responsive UI components that work perfectly across all devices using Tailwind CSS.",
    content: `# Building Responsive Components with Tailwind CSS

Responsive design is crucial for modern web applications. With Tailwind CSS, creating responsive components becomes intuitive and maintainable.

## Mobile-First Approach

Tailwind CSS follows a mobile-first responsive design approach. This means you write CSS for mobile devices first, then add styles for larger screens.

\`\`\`tsx
// Mobile-first responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Cards */}
</div>
\`\`\`

## Breakpoint System

Tailwind provides five default breakpoints:
- **sm**: 640px and up
- **md**: 768px and up  
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

## Component Examples

### Responsive Card Grid
Our Card component automatically adapts to different screen sizes:

\`\`\`tsx
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {items.map(item => (
    <Card key={item.id} className="h-full">
      <CardContent>{item.content}</CardContent>
    </Card>
  ))}
</div>
\`\`\`

### Adaptive Navigation
The navigation component switches between desktop and mobile layouts:

\`\`\`tsx
{/* Desktop menu */}
<div className="hidden md:block">
  <DesktopMenu />
</div>

{/* Mobile menu */}
<div className="md:hidden">
  <MobileMenu />
</div>
\`\`\`

## Best Practices

1. **Start with mobile**: Design for the smallest screen first
2. **Use consistent spacing**: Stick to Tailwind's spacing scale
3. **Test on real devices**: Emulators can't replace real testing
4. **Progressive enhancement**: Add features for larger screens

## Advanced Techniques

### Container Queries
For more complex responsive behavior, consider using container queries:

\`\`\`tsx
<div className="@container">
  <div className="@md:flex @md:space-x-4">
    {/* Content adapts to container size */}
  </div>
</div>
\`\`\`

### Dynamic Breakpoints
Create custom responsive utilities for specific use cases:

\`\`\`css
@media (min-width: 900px) {
  .custom-lg\\:text-xl {
    font-size: 1.25rem;
  }
}
\`\`\`

Responsive design with Tailwind CSS empowers you to create beautiful, functional interfaces that work everywhere.`,
    date: "2024-01-10",
    author: "UI/UX Team",
    category: "Design",
    readTime: "8 min read",
    tags: ["Tailwind CSS", "Responsive Design", "CSS"]
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for React Development",
    excerpt: "Discover essential TypeScript patterns and practices that will improve your React development workflow and code quality.",
    content: `# TypeScript Best Practices for React Development

TypeScript brings type safety and enhanced developer experience to React projects. Here are the best practices we follow in this boilerplate.

## Component Props Types

Always define explicit types for component props:

\`\`\`tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  // Component implementation
}
\`\`\`

## Event Handlers

Use specific event types for better type safety:

\`\`\`tsx
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value)
}

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  // Handle form submission
}
\`\`\`

## Custom Hooks

Type your custom hooks properly:

\`\`\`tsx
interface UseApiResult<T> {
  data: T | null
  loading: boolean
  error: string | null
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Hook implementation
  
  return { data, loading, error }
}
\`\`\`

## Generic Components

Create reusable components with generics:

\`\`\`tsx
interface ListProps<T> {
  items: T[]
  renderItem: (item: T) => React.ReactNode
  keyExtractor: (item: T) => string
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}
\`\`\`

## Form Handling

Type your form data and handlers:

\`\`\`tsx
interface FormData {
  name: string
  email: string
  message: string
}

const [formData, setFormData] = useState<FormData>({
  name: '',
  email: '',
  message: ''
})

const handleFieldChange = (field: keyof FormData) => 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }
\`\`\`

## API Responses

Define types for your API responses:

\`\`\`tsx
interface ApiResponse<T> {
  data: T
  message: string
  status: 'success' | 'error'
}

interface User {
  id: string
  name: string
  email: string
}

const fetchUser = async (id: string): Promise<ApiResponse<User>> => {
  const response = await fetch(\`/api/users/\${id}\`)
  return response.json()
}
\`\`\`

## Utility Types

Leverage TypeScript's utility types:

\`\`\`tsx
// Pick specific properties
type UserPreview = Pick<User, 'id' | 'name'>

// Make all properties optional
type PartialUser = Partial<User>

// Make all properties required
type RequiredUser = Required<User>

// Exclude specific properties
type UserWithoutId = Omit<User, 'id'>
\`\`\`

## Configuration

Use proper TypeScript configuration:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
\`\`\`

Following these practices will lead to more maintainable, bug-free React applications with excellent developer experience.`,
    date: "2024-01-05",
    author: "Development Team",
    category: "Development",
    readTime: "12 min read",
    tags: ["TypeScript", "React", "Best Practices"]
  }
]

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag))
} 