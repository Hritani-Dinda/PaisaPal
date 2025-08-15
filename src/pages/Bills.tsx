import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, CreditCard, AlertTriangle, Plus, Clock } from "lucide-react";

const upcomingBills = [
  {
    id: 1,
    name: "Internet Bill",
    amount: "₹999",
    dueDate: "2024-08-20",
    category: "Utilities",
    status: "upcoming",
    daysLeft: 5
  },
  {
    id: 2,
    name: "Mobile Recharge",
    amount: "₹399",
    dueDate: "2024-08-18",
    category: "Telecom",
    status: "due-soon",
    daysLeft: 3
  },
  {
    id: 3,
    name: "Gym Membership",
    amount: "₹1200",
    dueDate: "2024-08-25",
    category: "Health",
    status: "upcoming",
    daysLeft: 10
  },
  {
    id: 4,
    name: "Netflix Subscription",
    amount: "₹649",
    dueDate: "2024-08-16",
    category: "Entertainment",
    status: "overdue",
    daysLeft: -1
  }
];

const getBadgeVariant = (status: string) => {
  switch (status) {
    case "overdue":
      return "destructive";
    case "due-soon":
      return "yellow";
    case "upcoming":
      return "secondary";
    default:
      return "secondary";
  }
};

const Bills = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bills & Payments
          </h1>
          <p className="text-muted-foreground">
            Keep track of your recurring bills and never miss a payment.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Due This Month</p>
                  <p className="text-2xl font-bold text-foreground">₹3,247</p>
                </div>
                <div className="w-12 h-12 rounded-xl gradient-yellow flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Bills Paid</p>
                  <p className="text-2xl font-bold text-foreground">5/8</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="finance-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Overdue</p>
                  <p className="text-2xl font-bold text-destructive">1</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Overdue Alert */}
        <Alert className="border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/10">
          <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          <AlertDescription className="text-yellow-800 dark:text-yellow-200">
            You have 1 overdue bill. Pay now to avoid late fees.
          </AlertDescription>
        </Alert>

        {/* Bills List */}
        <Card className="finance-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl font-bold">Upcoming Bills</CardTitle>
            <Button className="btn-yellow">
              <Plus className="w-4 h-4 mr-2" />
              Add Bill
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBills.map((bill) => (
                <div
                  key={bill.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-[var(--transition-smooth)] group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl gradient-yellow/10 flex items-center justify-center group-hover:gradient-yellow/20 transition-[var(--transition-smooth)]">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{bill.name}</h3>
                      <p className="text-sm text-muted-foreground">{bill.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-foreground">{bill.amount}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {bill.status === "overdue" 
                          ? `${Math.abs(bill.daysLeft)} day${Math.abs(bill.daysLeft) !== 1 ? 's' : ''} overdue`
                          : `${bill.daysLeft} day${bill.daysLeft !== 1 ? 's' : ''} left`
                        }
                      </div>
                    </div>
                    <Badge variant={getBadgeVariant(bill.status)} className="ml-2">
                      {bill.status === "overdue" ? "Overdue" : 
                       bill.status === "due-soon" ? "Due Soon" : "Upcoming"}
                    </Badge>
                    <Button 
                      size="sm" 
                      className={`btn-yellow ml-2 ${bill.status === "overdue" ? "btn-yellow" : ""}`}
                    >
                      Pay Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bill Categories */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Bill Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Utilities", amount: "₹1,999", count: 3 },
                { name: "Subscriptions", amount: "₹1,248", count: 4 },
                { name: "Health", amount: "₹1,200", count: 1 },
                { name: "Transport", amount: "₹800", count: 2 }
              ].map((category) => (
                <div
                  key={category.name}
                  className="p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-[var(--transition-smooth)] cursor-pointer"
                >
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                  <p className="text-lg font-bold text-primary">{category.amount}</p>
                  <p className="text-sm text-muted-foreground">{category.count} bills</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Bills;