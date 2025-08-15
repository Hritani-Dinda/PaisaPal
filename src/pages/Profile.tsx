import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Camera, 
  Trophy, 
  Target, 
  TrendingUp, 
  Calendar, 
  Wallet,
  Star,
  Edit,
  Share
} from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "First Expense",
    description: "Added your first expense",
    icon: "🎯",
    completed: true,
    date: "July 15, 2024"
  },
  {
    id: 2,
    title: "Budget Master",
    description: "Stayed within budget for a month",
    icon: "💰",
    completed: true,
    date: "July 31, 2024"
  },
  {
    id: 3,
    title: "Savings Streak",
    description: "Saved money for 7 consecutive days",
    icon: "🔥",
    completed: true,
    date: "August 5, 2024"
  },
  {
    id: 4,
    title: "Goal Getter",
    description: "Completed your first savings goal",
    icon: "🏆",
    completed: false,
    progress: 65
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "Tracked expenses for 30 days",
    icon: "📊",
    completed: false,
    progress: 23
  }
];

const stats = [
  {
    label: "Total Expenses Tracked",
    value: "147",
    change: "+12 this month"
  },
  {
    label: "Money Saved",
    value: "₹15,230",
    change: "+₹2,100 this month"
  },
  {
    label: "Budget Adherence",
    value: "85%",
    change: "+5% from last month"
  },
  {
    label: "Days Active",
    value: "45",
    change: "Joined 45 days ago"
  }
];

const Profile = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            My Profile
          </h1>
          <p className="text-muted-foreground">
            Manage your profile and track your financial journey.
          </p>
        </div>

        {/* Profile Header */}
        <Card className="finance-card">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                  <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                    RS
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="sm" 
                  className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0 btn-yellow"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              {/* Profile Info */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center space-x-3">
                  <h2 className="text-2xl font-bold text-foreground">Rahul Sharma</h2>
                  <Badge className="gradient-yellow text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Premium
                  </Badge>
                </div>
                <p className="text-muted-foreground">rahul.sharma@example.com</p>
                <p className="text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 inline mr-1" />
                  Member since July 2024
                </p>
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Share Profile
                  </Button>
                </div>
              </div>

              {/* Level Badge */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-xl gradient-yellow flex items-center justify-center mb-2">
                  <span className="text-2xl font-bold text-primary-foreground">5</span>
                </div>
                <p className="text-sm font-medium text-foreground">Level 5</p>
                <p className="text-xs text-muted-foreground">Money Master</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="finance-card">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-green-600 dark:text-green-400">{stat.change}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Achievements */}
          <Card className="finance-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="w-5 h-5" />
                <span>Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      achievement.completed 
                        ? 'gradient-yellow' 
                        : 'bg-gray-100 dark:bg-gray-800'
                    }`}>
                      <span className="text-lg">{achievement.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold ${
                          achievement.completed ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {achievement.title}
                        </h3>
                        {achievement.completed && (
                          <Badge variant="secondary" className="text-green-600 bg-green-100 dark:bg-green-900/20">
                            Completed
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {achievement.description}
                      </p>
                      {achievement.completed ? (
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="text-muted-foreground">{achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  </div>
                  {achievement.id < achievements.length && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Financial Summary */}
          <Card className="finance-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Wallet className="w-5 h-5" />
                <span>Financial Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* This Month */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">This Month</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Expenses</span>
                    <span className="font-medium">₹12,450</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Budget Remaining</span>
                    <span className="font-medium text-green-600">₹2,550</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Savings Added</span>
                    <span className="font-medium text-primary">₹3,200</span>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Top Categories */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Top Spending Categories</h4>
                <div className="space-y-3">
                  {[
                    { name: "Food & Dining", amount: "₹4,200", percentage: 34 },
                    { name: "Transportation", amount: "₹2,800", percentage: 23 },
                    { name: "Entertainment", amount: "₹2,100", percentage: 17 }
                  ].map((category, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{category.name}</span>
                        <span className="font-medium">{category.amount}</span>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Goals Progress */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Active Goals</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">New Laptop</p>
                      <p className="text-sm text-muted-foreground">₹35,000 / ₹60,000</p>
                    </div>
                    <Badge variant="yellow">58%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Emergency Fund</p>
                      <p className="text-sm text-muted-foreground">₹45,000 / ₹50,000</p>
                    </div>
                    <Badge variant="secondary" className="text-green-600">90%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="finance-card gradient-yellow/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-foreground">🚀 Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Target className="w-6 h-6 text-primary" />
                <span className="font-medium">Set New Goal</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                <span className="font-medium">View Analytics</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                <Share className="w-6 h-6 text-primary" />
                <span className="font-medium">Share Progress</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Profile;