import { Plus, Users, Lightbulb, Calendar, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const quickActions = [
  {
    title: "Add Expense",
    description: "Track your spending",
    icon: Plus,
    color: "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400",
    buttonText: "Add Now"
  },
  {
    title: "Split Bill",
    description: "Share expenses with friends",
    icon: Users,
    color: "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400",
    buttonText: "Split Bill"
  }
];

const savingsNudges = [
  "💡 You've spent 20% less on food this week! Keep it up!",
  "🎯 Set aside ₹50 today to reach your monthly savings goal faster.",
  "☕ That daily coffee costs ₹5,400/month. Consider making coffee at home 3 days a week!",
  "📱 Your phone bill is due in 3 days. Pay early to avoid late fees!",
  "🚗 Walking to nearby places can save ₹200/week on transport costs."
];

export function QuickActions() {
  const todaysNudge = savingsNudges[Math.floor(Math.random() * savingsNudges.length)];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card className="finance-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div key={action.title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${action.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{action.title}</h4>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </div>
                <Button 
                  className="w-full gradient-yellow text-primary-foreground font-medium hover:shadow-[var(--shadow-hover)] btn-yellow-hover"
                  size="sm"
                >
                  {action.buttonText}
                </Button>
                {index < quickActions.length - 1 && <Separator />}
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Savings Nudge */}
      <Card className="finance-card gradient-yellow/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-primary" />
            Savings Nudge of the Day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-foreground leading-relaxed">
            {todaysNudge}
          </p>
        </CardContent>
      </Card>

      {/* Upcoming Goals */}
      <Card className="finance-card">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            This Week's Goals
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <p className="font-medium text-foreground">No outside food</p>
              <p className="text-xs text-muted-foreground">3 of 7 days completed</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-finance-savings">₹420 saved</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <p className="font-medium text-foreground">Walk to college</p>
              <p className="text-xs text-muted-foreground">5 of 5 days completed ✅</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-finance-savings">₹150 saved</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}