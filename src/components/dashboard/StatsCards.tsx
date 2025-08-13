import { TrendingDown, Target, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const stats = [
  {
    title: "This Month's Spend",
    value: "₹12,450",
    change: "+8.2%",
    changeType: "increase",
    icon: TrendingDown,
    description: "vs last month",
    color: "text-finance-expense"
  },
  {
    title: "Savings Progress",
    value: "₹8,200",
    change: "68%",
    changeType: "progress",
    icon: Target,
    description: "of ₹12,000 goal",
    color: "text-finance-savings",
    progress: 68
  },
  {
    title: "Upcoming Bills",
    value: "₹3,250",
    change: "5 bills",
    changeType: "neutral",
    icon: Clock,
    description: "due this week",
    color: "text-warning"
  }
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card 
            key={stat.title} 
            className="finance-card animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className={`p-2 rounded-xl bg-accent ${stat.color}`}>
                <Icon className="w-4 h-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
                <span 
                  className={`text-sm font-medium px-2 py-1 rounded-lg ${
                    stat.changeType === 'increase' 
                      ? 'bg-red-100 text-red-700 dark:bg-red-950/30 dark:text-red-400'
                      : stat.changeType === 'progress'
                      ? 'bg-green-100 text-green-700 dark:bg-green-950/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950/30 dark:text-yellow-400'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              
              {stat.progress !== undefined && (
                <div className="space-y-2">
                  <Progress 
                    value={stat.progress} 
                    className="h-2"
                  />
                  <p className="text-xs text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              )}
              
              {stat.progress === undefined && (
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}