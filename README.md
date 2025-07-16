# Next.js 15 Production Boilerplate

A comprehensive, production-ready Next.js boilerplate featuring modern technologies, best practices, and a complete set of components and pages to kickstart your next project.

## 🚀 Features

### Core Technologies
- **Next.js 15** - Latest version with App Router
- **React 19** - Cutting-edge React features
- **TypeScript** - Full type safety throughout
- **Tailwind CSS v4** - Modern utility-first styling
- **Geist Font** - Beautiful typography

### UI Components
- **Responsive Navigation** - Mobile-friendly with theme toggle
- **Reusable Components** - Button, Card, Input with TypeScript interfaces
- **Theme System** - Dark/light mode with system preference detection
- **Modern Design** - Clean, professional aesthetic

### Pages & Features
- **Home Page** - Modern landing page with features showcase
- **About Page** - Comprehensive about section
- **Blog System** - Dynamic routing with example posts
- **Contact Form** - Working form with API integration
- **Dashboard** - Admin interface with nested layouts
- **Error Handling** - Custom 404, error, and loading pages

### Developer Experience
- **TypeScript Configuration** - Strict type checking
- **SEO Optimized** - Proper metadata and Open Graph tags
- **Performance** - Optimized for Core Web Vitals
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
nextjs-boilerplate/
├── app/                          # App Router pages
│   ├── about/                    # About page
│   ├── blog/                     # Blog system
│   │   ├── [slug]/              # Dynamic blog posts
│   │   └── page.tsx             # Blog listing
│   ├── contact/                  # Contact form
│   ├── dashboard/                # Dashboard with nested layout
│   │   ├── layout.tsx           # Dashboard sidebar layout
│   │   └── page.tsx             # Dashboard overview
│   ├── api/                      # API routes
│   │   └── contact/             # Contact form handler
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── loading.tsx              # Global loading component
│   ├── error.tsx                # Global error component
│   └── not-found.tsx            # 404 page
├── components/                   # Reusable components
│   ├── ui/                      # UI primitives
│   │   ├── Button.tsx           # Button component
│   │   ├── Card.tsx             # Card component
│   │   └── Input.tsx            # Input component
│   ├── Navigation.tsx           # Main navigation
│   └── ThemeProvider.tsx        # Theme context
├── lib/                         # Utilities and data
│   └── blog.ts                  # Blog data and utilities
└── public/                      # Static assets
```

## 🛠️ Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nextjs-boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### Theme Configuration
The theme system uses CSS custom properties defined in `app/globals.css`:
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}
```

### Navigation Links
Update the navigation menu in `components/Navigation.tsx`:
```tsx
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // Add your links here
]
```

### Blog Content
Add new blog posts in `lib/blog.ts`:
```tsx
export const blogPosts: BlogPost[] = [
  {
    id: "your-post-slug",
    title: "Your Post Title",
    excerpt: "Post description...",
    content: "Full post content...",
    // ... other fields
  }
]
```

## 📖 Component Usage

### Button Component
```tsx
import { Button } from '../components/ui/Button'

<Button variant="primary" size="lg">
  Click me
</Button>
```

### Card Component
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content goes here
  </CardContent>
</Card>
```

### Theme Toggle
The theme system automatically handles:
- System preference detection
- localStorage persistence
- Smooth transitions between themes

## 🔧 API Routes

### Contact Form
- **Endpoint**: `POST /api/contact`
- **Validation**: Email format and required fields
- **Response**: JSON with success/error status

Example usage:
```tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 📱 Responsive Design

The boilerplate uses Tailwind's responsive utilities:
- **Mobile first**: Base styles for mobile
- **Breakpoints**: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Grid layouts**: Responsive grid systems throughout

## 🚀 Deployment

The boilerplate is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Any Node.js hosting**

### Build Commands
```bash
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🧩 Extending the Boilerplate

### Adding New Pages
1. Create a new directory in `app/`
2. Add `page.tsx` for the route
3. Update navigation if needed

### Adding Components
1. Create components in `components/`
2. Use TypeScript interfaces
3. Follow the existing patterns

### Database Integration
Consider adding:
- **Prisma** for type-safe database access
- **Supabase** for backend-as-a-service
- **MongoDB** with Mongoose

### Authentication
Popular options:
- **NextAuth.js** for authentication
- **Clerk** for user management
- **Auth0** for enterprise auth

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have questions or need help, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue if needed

---

Built with ❤️ using Next.js 15 and modern web technologies.
