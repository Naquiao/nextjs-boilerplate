import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "Dashboard - NextJS Boilerplate",
  description: "Overview of your application dashboard.",
};

const stats = [
  {
    title: "Total Users",
    value: "1,234",
    change: "+12.5%",
    trend: "up"
  },
  {
    title: "Active Sessions",
    value: "456",
    change: "+5.2%",
    trend: "up"
  },
  {
    title: "Page Views",
    value: "8,901",
    change: "+18.1%",
    trend: "up"
  },
  {
    title: "Bounce Rate",
    value: "32.1%",
    change: "-3.2%",
    trend: "down"
  }
];

const recentActivity = [
  {
    id: 1,
    action: "New user registration",
    user: "john.doe@example.com",
    time: "2 minutes ago",
    type: "user"
  },
  {
    id: 2,
    action: "Contact form submission",
    user: "jane.smith@example.com",
    time: "15 minutes ago",
    type: "contact"
  },
  {
    id: 3,
    action: "Blog post published",
    user: "admin",
    time: "1 hour ago",
    type: "content"
  },
  {
    id: 4,
    action: "System backup completed",
    user: "system",
    time: "2 hours ago",
    type: "system"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground/60">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold">
                    {stat.value}
                  </p>
                </div>
                <div className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <Link href="/blog" className="w-full">
                <Button variant="outline" className="w-full justify-start">
                  📝 Create New Blog Post
                </Button>
              </Link>
              <Link href="/dashboard/users" className="w-full">
                <Button variant="outline" className="w-full justify-start">
                  👥 Manage Users
                </Button>
              </Link>
              <Link href="/dashboard/analytics" className="w-full">
                <Button variant="outline" className="w-full justify-start">
                  📊 View Analytics
                </Button>
              </Link>
              <Link href="/dashboard/settings" className="w-full">
                <Button variant="outline" className="w-full justify-start">
                  ⚙️ Update Settings
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-foreground/10 rounded-full flex items-center justify-center text-sm">
                    {activity.type === 'user' && '👤'}
                    {activity.type === 'contact' && '📧'}
                    {activity.type === 'content' && '📝'}
                    {activity.type === 'system' && '🔧'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">
                      {activity.action}
                    </p>
                    <p className="text-xs text-foreground/60">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Chart Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-foreground/5 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <p className="text-foreground/60">
                Chart component would go here
              </p>
              <p className="text-sm text-foreground/50 mt-2">
                Consider integrating Chart.js, Recharts, or similar
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Status */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">All systems operational</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Database</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Connected and healthy</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">API Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm">Response time: 120ms</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 