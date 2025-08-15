import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PiggyBank, Target, TrendingUp, Plus, Gift, Calendar } from "lucide-react";

const savingsGoals = [
  {
    id: 1,
    name: "New Laptop",
    target: 60000,
    saved: 35000,
    deadline: "2024-12-01",
    category: "Electronics",
    priority: "high"
  },
  {
    id: 2,
    name: "Europe Trip",
    target: 80000,
    saved: 22000,
    deadline: "2025-06-15",
    category: "Travel",
    priority: "medium"
  },
  {
    id: 3,
    name: "Emergency Fund",
    target: 50000,
    saved: 45000,
    deadline: "2024-10-30",
    category: "Emergency",
    priority: "high"
  },
  {
    id: 4,
    name: "Course Fee",
    target: 25000,
    saved: 18000,
    deadline: "2024-09-01",
    category: "Education",
    priority: "medium"
  }
];

const savingsChallenges = [
  {
    name: "52-Week Challenge",
    description: "Save ₹50 in week 1, ₹100 in week 2, and so on",
    potential: "₹68,900",
    duration: "52 weeks"
  },
  {
    name: "₹10 Daily Challenge",
    description: "Save ₹10 every day for a year",
    potential: "₹3,650",
    duration: "365 days"
  },
  {
    name: "Round-up Challenge",
    description: "Round up every purchase to the nearest ₹10",
    potential: "₹2,400",
    duration: "Ongoing"
  }
];

const Savings = () => {
  const totalTarget = savingsGoals.reduce((sum, goal) => sum + goal.target, 0);
  const totalSaved = savingsGoals.reduce((sum, goal) => sum + goal.saved, 0);
  const totalRemaining = totalTarget - totalSaved;

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Savings & Goals
          </h1>
          <p className="text-muted-foreground">
            Track your savings goals and build healthy financial habits.
          </p>
        </div>

        {/* Savings Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Saved</p>
                  <p className="text-2xl font-bold text-foreground">₹{totalSaved.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl gradient-yellow flex items-center justify-center">
                  <PiggyBank className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Target Amount</p>
                  <p className="text-2xl font-bold text-foreground">₹{totalTarget.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {((totalSaved / totalTarget) * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall Progress */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Overall Savings Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">₹{totalSaved.toLocaleString()} saved</span>
                <span className="text-muted-foreground">₹{totalTarget.toLocaleString()} target</span>
              </div>
              <Progress value={(totalSaved / totalTarget) * 100} className="h-3" />
              <div className="flex justify-between text-sm">
                <span className="text-green-600 dark:text-green-400 font-medium">
                  ₹{totalRemaining.toLocaleString()} remaining
                </span>
                <span className="text-muted-foreground">
                  {((totalSaved / totalTarget) * 100).toFixed(1)}% complete
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Savings Goals */}
        <Card className="finance-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl font-bold">Savings Goals</CardTitle>
            <Button className="btn-yellow">
              <Plus className="w-4 h-4 mr-2" />
              Add Goal
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {savingsGoals.map((goal) => {
                const percentage = (goal.saved / goal.target) * 100;
                const remaining = goal.target - goal.saved;
                const daysLeft = Math.ceil(
                  (new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                
                return (
                  <div key={goal.id} className="p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-[var(--transition-smooth)]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-xl gradient-yellow/10 flex items-center justify-center">
                          {goal.category === "Travel" && <Gift className="w-6 h-6 text-primary" />}
                          {goal.category === "Electronics" && <Target className="w-6 h-6 text-primary" />}
                          {goal.category === "Emergency" && <PiggyBank className="w-6 h-6 text-primary" />}
                          {goal.category === "Education" && <Calendar className="w-6 h-6 text-primary" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{goal.name}</h3>
                          <p className="text-sm text-muted-foreground">{goal.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={goal.priority === "high" ? "yellow" : "secondary"}>
                          {goal.priority === "high" ? "High Priority" : "Medium Priority"}
                        </Badge>
                        <Button size="sm" className="btn-yellow">
                          Add Money
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          ₹{goal.saved.toLocaleString()} saved
                        </span>
                        <span className="text-muted-foreground">
                          ₹{goal.target.toLocaleString()} target
                        </span>
                      </div>
                      
                      <Progress value={percentage} className="h-2" />
                      
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600 dark:text-green-400 font-medium">
                          ₹{remaining.toLocaleString()} remaining
                        </span>
                        <span className="text-muted-foreground">
                          {daysLeft > 0 ? `${daysLeft} days left` : "Deadline passed"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Savings Challenges */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Savings Challenges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {savingsChallenges.map((challenge, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-[var(--transition-smooth)] cursor-pointer group"
                >
                  <h3 className="font-semibold text-foreground mb-2">{challenge.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-lg font-bold text-primary">{challenge.potential}</p>
                      <p className="text-xs text-muted-foreground">{challenge.duration}</p>
                    </div>
                    <Button size="sm" variant="outline" className="group-hover:btn-yellow">
                      Start
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Savings Tips */}
        <Card className="finance-card gradient-yellow/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">🌟 Savings Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Automate Your Savings</h4>
                <p className="text-sm text-muted-foreground">
                  Set up automatic transfers to your savings account right after you get paid.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Start Small</h4>
                <p className="text-sm text-muted-foreground">
                  Even ₹10 a day can add up to significant savings over time.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Use the 50/30/20 Rule</h4>
                <p className="text-sm text-muted-foreground">
                  Allocate 50% needs, 30% wants, and 20% savings from your income.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Track Your Progress</h4>
                <p className="text-sm text-muted-foreground">
                  Visualizing your progress helps maintain motivation and achieve goals faster.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Savings;