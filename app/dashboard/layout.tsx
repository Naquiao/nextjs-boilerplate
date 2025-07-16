'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Card } from '../../components/ui/Card'

const sidebarItems = [
  { name: 'Overview', href: '/dashboard', icon: '📊' },
  { name: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
  { name: 'Users', href: '/dashboard/users', icon: '👥' },
  { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-foreground/70">
          Welcome to your dashboard. Manage your application from here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <Card className="p-4">
            <nav className="space-y-2">
              {sidebarItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                      isActive
                        ? 'bg-foreground text-background'
                        : 'hover:bg-foreground/5 text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="lg:col-span-3">
          {children}
        </main>
      </div>
    </div>
  )
} 