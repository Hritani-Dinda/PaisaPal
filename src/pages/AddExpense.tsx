import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Plus, Receipt, CreditCard, Smartphone, Banknote } from "lucide-react";
import { format } from "date-fns";
import { useState } from "react";

const categories = [
  { name: "Food & Dining", icon: "🍽️", color: "bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400" },
  { name: "Transportation", icon: "🚗", color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
  { name: "Entertainment", icon: "🎬", color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400" },
  { name: "Shopping", icon: "🛍️", color: "bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400" },
  { name: "Health & Fitness", icon: "💪", color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400" },
  { name: "Education", icon: "📚", color: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400" },
  { name: "Bills & Utilities", icon: "⚡", color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400" },
  { name: "Travel", icon: "✈️", color: "bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400" }
];

const paymentMethods = [
  { name: "Credit Card", icon: CreditCard, color: "text-blue-600" },
  { name: "Debit Card", icon: CreditCard, color: "text-green-600" },
  { name: "UPI", icon: Smartphone, color: "text-purple-600" },
  { name: "Cash", icon: Banknote, color: "text-orange-600" },
  { name: "Net Banking", icon: CreditCard, color: "text-indigo-600" }
];

const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

const AddExpense = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <AppLayout>
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Add New Expense
          </h1>
          <p className="text-muted-foreground">
            Track your spending by adding a new expense entry.
          </p>
        </div>

        {/* Quick Amount Selection */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Quick Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {quickAmounts.map((quickAmount) => (
                <Button
                  key={quickAmount}
                  variant={amount === quickAmount.toString() ? "default" : "outline"}
                  size="sm"
                  className={amount === quickAmount.toString() ? "btn-yellow" : ""}
                  onClick={() => setAmount(quickAmount.toString())}
                >
                  ₹{quickAmount}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Expense Form */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Receipt className="w-5 h-5" />
              <span>Expense Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Amount */}
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-base font-semibold">Amount *</Label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-muted-foreground">₹</span>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  className="pl-8 text-lg h-12"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">Description *</Label>
              <Input
                id="description"
                placeholder="What did you spend on?"
                className="h-12"
              />
            </div>

            {/* Category Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Category *</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`p-3 rounded-xl border-2 transition-[var(--transition-smooth)] text-left ${
                      selectedCategory === category.name
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setSelectedCategory(category.name)}
                  >
                    <div className="flex flex-col items-center space-y-1">
                      <span className="text-2xl">{category.icon}</span>
                      <span className="text-xs font-medium text-center leading-tight">
                        {category.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">Payment Method *</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {paymentMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <button
                      key={method.name}
                      className={`p-3 rounded-xl border-2 transition-[var(--transition-smooth)] ${
                        selectedPayment === method.name
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                      onClick={() => setSelectedPayment(method.name)}
                    >
                      <div className="flex items-center space-x-2">
                        <IconComponent className={`w-4 h-4 ${method.color}`} />
                        <span className="text-sm font-medium">{method.name}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal h-12"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(newDate) => newDate && setDate(newDate)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes" className="text-base font-semibold">Additional Notes</Label>
              <Textarea
                id="notes"
                placeholder="Any additional details about this expense..."
                className="min-h-[80px]"
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label className="text-base font-semibold">Tags (Optional)</Label>
              <div className="flex flex-wrap gap-2">
                {["Work", "Personal", "Urgent", "Recurring", "One-time"].map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary/10">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button variant="outline" className="flex-1">
            Save as Draft
          </Button>
          <Button className="btn-yellow flex-1">
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>

        {/* Quick Tips */}
        <Card className="finance-card gradient-yellow/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-foreground">💡 Quick Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Add expenses immediately after spending to maintain accurate records</p>
              <p>• Use descriptive names to easily identify expenses later</p>
              <p>• Take photos of receipts for future reference</p>
              <p>• Set up recurring expenses for bills to save time</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AddExpense;