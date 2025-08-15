import { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Plus, 
  Filter, 
  Search, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Coffee,
  Car,
  Home,
  ShoppingBag,
  Utensils,
  BookOpen,
  MoreHorizontal
} from "lucide-react";

const expenseCategories = [
  { id: "food", name: "Food & Dining", icon: Utensils, color: "bg-orange-50 text-orange-600 dark:bg-orange-950/30 dark:text-orange-400" },
  { id: "transport", name: "Transport", icon: Car, color: "bg-blue-50 text-blue-600 dark:bg-blue-950/30 dark:text-blue-400" },
  { id: "shopping", name: "Shopping", icon: ShoppingBag, color: "bg-purple-50 text-purple-600 dark:bg-purple-950/30 dark:text-purple-400" },
  { id: "entertainment", name: "Entertainment", icon: Coffee, color: "bg-pink-50 text-pink-600 dark:bg-pink-950/30 dark:text-pink-400" },
  { id: "education", name: "Education", icon: BookOpen, color: "bg-green-50 text-green-600 dark:bg-green-950/30 dark:text-green-400" },
  { id: "rent", name: "Rent & Bills", icon: Home, color: "bg-red-50 text-red-600 dark:bg-red-950/30 dark:text-red-400" },
];

const recentExpenses = [
  {
    id: 1,
    description: "Lunch at Campus Cafeteria",
    amount: 180,
    category: "food",
    date: "2024-08-15",
    paymentMode: "UPI",
    time: "1:30 PM"
  },
  {
    id: 2,
    description: "Metro Card Recharge",
    amount: 500,
    category: "transport",
    date: "2024-08-15",
    paymentMode: "Debit Card",
    time: "9:15 AM"
  },
  {
    id: 3,
    description: "Textbook Purchase",
    amount: 850,
    category: "education",
    date: "2024-08-14",
    paymentMode: "UPI",
    time: "3:45 PM"
  },
  {
    id: 4,
    description: "Movie Tickets",
    amount: 300,
    category: "entertainment",
    date: "2024-08-14",
    paymentMode: "UPI",
    time: "7:00 PM"
  },
  {
    id: 5,
    description: "Grocery Shopping",
    amount: 650,
    category: "shopping",
    date: "2024-08-13",
    paymentMode: "Cash",
    time: "5:20 PM"
  },
  {
    id: 6,
    description: "Room Rent",
    amount: 8000,
    category: "rent",
    date: "2024-08-13",
    paymentMode: "Bank Transfer",
    time: "10:00 AM"
  }
];

export default function Expenses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("this-month");

  const totalExpenses = recentExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const todayExpenses = recentExpenses.filter(expense => expense.date === "2024-08-15").reduce((sum, expense) => sum + expense.amount, 0);

  const getCategoryInfo = (categoryId: string) => {
    return expenseCategories.find(cat => cat.id === categoryId) || expenseCategories[0];
  };

  const filteredExpenses = recentExpenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || expense.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Expenses</h1>
            <p className="text-muted-foreground mt-1">Track and manage your spending</p>
          </div>
          
          <Button className="gradient-yellow text-foreground font-semibold btn-yellow-hover self-start lg:self-auto">
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Today's Spending</p>
                  <p className="text-2xl font-bold text-foreground">₹{todayExpenses.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-xl">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-3 text-sm">
                <TrendingUp className="w-4 h-4 text-success mr-1" />
                <span className="text-success">+12%</span>
                <span className="text-muted-foreground ml-1">from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">This Month</p>
                  <p className="text-2xl font-bold text-foreground">₹{totalExpenses.toLocaleString()}</p>
                </div>
                <div className="p-3 bg-warning/10 rounded-xl">
                  <TrendingDown className="w-6 h-6 text-warning" />
                </div>
              </div>
              <div className="flex items-center mt-3 text-sm">
                <span className="text-warning">85%</span>
                <span className="text-muted-foreground ml-1">of monthly budget</span>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Daily</p>
                  <p className="text-2xl font-bold text-foreground">₹{Math.round(totalExpenses/15).toLocaleString()}</p>
                </div>
                <div className="p-3 bg-success/10 rounded-xl">
                  <Calendar className="w-6 h-6 text-success" />
                </div>
              </div>
              <div className="flex items-center mt-3 text-sm">
                <span className="text-success">Within</span>
                <span className="text-muted-foreground ml-1">daily limit</span>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Categories</p>
                  <p className="text-2xl font-bold text-foreground">{expenseCategories.length}</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-xl">
                  <MoreHorizontal className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="flex items-center mt-3 text-sm">
                <span className="text-muted-foreground">Most used: Food</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <div className="flex flex-col lg:flex-row gap-4 p-6 finance-card">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search expenses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Categories</SelectItem>
                {expenseCategories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-full sm:w-[150px]">
                <Calendar className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Categories Overview */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {expenseCategories.map((category) => {
                const Icon = category.icon;
                const categoryTotal = recentExpenses
                  .filter(expense => expense.category === category.id)
                  .reduce((sum, expense) => sum + expense.amount, 0);
                
                return (
                  <div key={category.id} className="flex flex-col items-center p-4 finance-card hover:scale-105 transition-transform cursor-pointer">
                    <div className={`p-3 rounded-xl ${category.color} mb-3`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-medium text-foreground text-center">{category.name}</p>
                    <p className="text-lg font-bold text-foreground">₹{categoryTotal.toLocaleString()}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Expenses Table */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-foreground">Recent Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Payment Mode</TableHead>
                    <TableHead>Date & Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredExpenses.map((expense) => {
                    const categoryInfo = getCategoryInfo(expense.category);
                    const Icon = categoryInfo.icon;
                    
                    return (
                      <TableRow key={expense.id} className="hover:bg-accent/50 transition-colors">
                        <TableCell>
                          <div className="font-medium text-foreground">{expense.description}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className={`p-2 rounded-lg ${categoryInfo.color}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm text-muted-foreground">{categoryInfo.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="font-semibold text-red-600 dark:text-red-400">
                            -₹{expense.amount.toLocaleString()}
                          </span>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary" className="text-xs">
                            {expense.paymentMode}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div className="font-medium text-foreground">{expense.date}</div>
                            <div className="text-muted-foreground">{expense.time}</div>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}