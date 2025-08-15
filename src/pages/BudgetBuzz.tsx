import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Star, TrendingUp, Target, PiggyBank, AlertTriangle, CheckCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "savings_tip",
    title: "💡 Daily Savings Tip",
    message: "Try the 24-hour rule: Wait a day before making non-essential purchases. You might find you don't need it!",
    timestamp: "2 hours ago",
    isRead: false,
    priority: "low",
    icon: Star
  },
  {
    id: 2,
    type: "budget_alert",
    title: "⚠️ Budget Alert",
    message: "You've spent 85% of your Food & Dining budget for this month. Consider cooking at home more often!",
    timestamp: "4 hours ago",
    isRead: false,
    priority: "high",
    icon: AlertTriangle
  },
  {
    id: 3,
    type: "savings_nudge",
    title: "🌟 Savings Nudge",
    message: "Great job! You saved ₹200 yesterday by choosing a home-cooked meal over ordering food. Keep it up!",
    timestamp: "1 day ago",
    isRead: true,
    priority: "medium",
    icon: PiggyBank
  },
  {
    id: 4,
    type: "goal_progress",
    title: "🎯 Goal Update",
    message: "You're 58% closer to your 'New Laptop' goal! Just ₹25,000 more to go. Consider setting aside ₹1,000 this week.",
    timestamp: "1 day ago",
    isRead: true,
    priority: "medium",
    icon: Target
  },
  {
    id: 5,
    type: "spending_insight",
    title: "📊 Spending Insight",
    message: "You spent 20% less on entertainment this week compared to last week. This saved you ₹400!",
    timestamp: "2 days ago",
    isRead: true,
    priority: "low",
    icon: TrendingUp
  },
  {
    id: 6,
    type: "achievement",
    title: "🏆 Achievement Unlocked",
    message: "Congratulations! You've successfully tracked expenses for 30 days straight. You're building great financial habits!",
    timestamp: "3 days ago",
    isRead: true,
    priority: "medium",
    icon: CheckCircle
  },
  {
    id: 7,
    type: "savings_tip",
    title: "💰 Money-Saving Hack",
    message: "Use student discounts! Many services offer 50% off for students. Check if your favorite apps have student plans.",
    timestamp: "3 days ago",
    isRead: true,
    priority: "low",
    icon: Star
  },
  {
    id: 8,
    type: "budget_suggestion",
    title: "💡 Budget Suggestion",
    message: "Based on your spending pattern, we suggest allocating ₹500 more to your Transportation budget next month.",
    timestamp: "5 days ago",
    isRead: true,
    priority: "medium",
    icon: Target
  }
];

const categories = [
  { name: "All", count: 8, active: true },
  { name: "Savings Tips", count: 2, active: false },
  { name: "Budget Alerts", count: 1, active: false },
  { name: "Goal Updates", count: 2, active: false },
  { name: "Achievements", count: 1, active: false }
];

const BudgetBuzz = () => {
  const unreadCount = notifications.filter(n => !n.isRead).length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "yellow";
      case "low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "savings_tip":
        return "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400";
      case "budget_alert":
        return "bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400";
      case "savings_nudge":
        return "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400";
      case "goal_progress":
        return "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400";
      case "spending_insight":
        return "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400";
      case "achievement":
        return "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400";
      default:
        return "bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-xl gradient-yellow flex items-center justify-center">
              <Bell className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Budget Buzz
              </h1>
              <p className="text-muted-foreground">
                Your personalized financial insights and savings nudges.
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <Badge className="gradient-yellow text-primary-foreground">
              {unreadCount} new notification{unreadCount !== 1 ? 's' : ''}
            </Badge>
          )}
        </div>

        {/* Category Filters */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Filter Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant={category.active ? "default" : "outline"}
                  size="sm"
                  className={category.active ? "btn-yellow" : ""}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Notifications List */}
        <div className="space-y-4">
          {notifications.map((notification) => {
            const IconComponent = notification.icon;
            return (
              <Card 
                key={notification.id} 
                className={`finance-card cursor-pointer hover:shadow-[var(--shadow-hover)] transition-[var(--transition-smooth)] ${
                  !notification.isRead ? 'ring-2 ring-primary/20 bg-primary/5' : ''
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getTypeColor(notification.type)}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-semibold text-foreground ${!notification.isRead ? 'font-bold' : ''}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2 flex-shrink-0 ml-4">
                          <Badge variant={getPriorityColor(notification.priority)} size="sm">
                            {notification.priority}
                          </Badge>
                          {!notification.isRead && (
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                          )}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3 leading-relaxed">
                        {notification.message}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {notification.timestamp}
                        </span>
                        
                        <div className="flex space-x-2">
                          {!notification.isRead && (
                            <Button variant="outline" size="sm">
                              Mark as Read
                            </Button>
                          )}
                          {notification.type === 'savings_tip' && (
                            <Button size="sm" className="btn-yellow">
                              Save Tip
                            </Button>
                          )}
                          {notification.type === 'goal_progress' && (
                            <Button size="sm" className="btn-yellow">
                              Add Money
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 pt-6">
          <Button variant="outline">
            Mark All as Read
          </Button>
          <Button className="btn-yellow">
            Notification Settings
          </Button>
        </div>

        {/* Helpful Tips */}
        <Card className="finance-card gradient-yellow/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">🔔 Notification Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Stay Informed</h4>
                <p className="text-sm text-muted-foreground">
                  Check Budget Buzz daily for personalized financial insights and tips.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Take Action</h4>
                <p className="text-sm text-muted-foreground">
                  Use the quick action buttons to implement suggestions immediately.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Customize Alerts</h4>
                <p className="text-sm text-muted-foreground">
                  Adjust notification settings to get alerts that matter most to you.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Track Progress</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor your financial journey through goal updates and achievements.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default BudgetBuzz;