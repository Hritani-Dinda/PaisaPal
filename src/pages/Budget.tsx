import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, Plus, PieChart } from "lucide-react";

const budgetCategories = [
  {
    id: 1,
    name: "Food & Dining",
    allocated: 5000,
    spent: 3200,
    remaining: 1800,
    color: "bg-yellow-500",
    trend: "up"
  },
  {
    id: 2,
    name: "Transportation",
    allocated: 2000,
    spent: 1500,
    remaining: 500,
    color: "bg-blue-500",
    trend: "down"
  },
  {
    id: 3,
    name: "Entertainment",
    allocated: 3000,
    spent: 2800,
    remaining: 200,
    color: "bg-green-500",
    trend: "up"
  },
  {
    id: 4,
    name: "Shopping",
    allocated: 4000,
    spent: 4200,
    remaining: -200,
    color: "bg-purple-500",
    trend: "up"
  },
  {
    id: 5,
    name: "Health & Fitness",
    allocated: 1500,
    spent: 800,
    remaining: 700,
    color: "bg-pink-500",
    trend: "down"
  }
];

const Budget = () => {
  const totalAllocated = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0);
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalRemaining = totalAllocated - totalSpent;

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Budget Planner
          </h1>
          <p className="text-muted-foreground">
            Plan your spending and track your budget across different categories.
          </p>
        </div>

        {/* Budget Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Budget</p>
                  <p className="text-2xl font-bold text-foreground">₹{totalAllocated.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl gradient-yellow flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Spent</p>
                  <p className="text-2xl font-bold text-foreground">₹{totalSpent.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Remaining</p>
                  <p className={`text-2xl font-bold ${totalRemaining >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    ₹{Math.abs(totalRemaining).toLocaleString()}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  totalRemaining >= 0 
                    ? 'bg-green-100 dark:bg-green-900/20' 
                    : 'bg-red-100 dark:bg-red-900/20'
                }`}>
                  {totalRemaining >= 0 ? (
                    <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  ) : (
                    <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overall Progress */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Monthly Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">₹{totalSpent.toLocaleString()} spent</span>
                <span className="text-muted-foreground">₹{totalAllocated.toLocaleString()} budget</span>
              </div>
              <Progress value={(totalSpent / totalAllocated) * 100} className="h-3" />
              <p className="text-sm text-muted-foreground">
                {((totalSpent / totalAllocated) * 100).toFixed(1)}% of budget used
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Budget Categories */}
        <Card className="finance-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl font-bold">Budget Categories</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <PieChart className="w-4 h-4 mr-2" />
                View Chart
              </Button>
              <Button className="btn-yellow" size="sm">
                <Plus className="w-4 h-4 mr-2" />
                Add Category
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {budgetCategories.map((category) => {
                const percentage = (category.spent / category.allocated) * 100;
                const isOverBudget = category.remaining < 0;
                
                return (
                  <div key={category.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${category.color}`} />
                        <h3 className="font-semibold text-foreground">{category.name}</h3>
                        {category.trend === "up" ? (
                          <TrendingUp className="w-4 h-4 text-red-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <Badge variant={isOverBudget ? "destructive" : "secondary"}>
                        {isOverBudget ? "Over Budget" : "On Track"}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        ₹{category.spent.toLocaleString()} spent
                      </span>
                      <span className="text-muted-foreground">
                        ₹{category.allocated.toLocaleString()} allocated
                      </span>
                    </div>
                    
                    <Progress 
                      value={Math.min(percentage, 100)} 
                      className="h-2"
                    />
                    
                    <div className="flex justify-between text-sm">
                      <span className={`font-medium ${
                        isOverBudget 
                          ? 'text-red-600 dark:text-red-400' 
                          : 'text-green-600 dark:text-green-400'
                      }`}>
                        {isOverBudget ? "Exceeded by" : "Remaining"} ₹{Math.abs(category.remaining).toLocaleString()}
                      </span>
                      <span className="text-muted-foreground">
                        {percentage.toFixed(1)}% used
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Budget Tips */}
        <Card className="finance-card gradient-yellow/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-foreground">💡 Budget Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Track Daily Spending</h4>
                <p className="text-sm text-muted-foreground">
                  Monitor your daily expenses to stay within your monthly budget limits.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Set Realistic Goals</h4>
                <p className="text-sm text-muted-foreground">
                  Create achievable budget targets based on your income and essential expenses.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Review Weekly</h4>
                <p className="text-sm text-muted-foreground">
                  Check your budget progress every week to make necessary adjustments.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Emergency Buffer</h4>
                <p className="text-sm text-muted-foreground">
                  Always keep 10-20% buffer in each category for unexpected expenses.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Budget;