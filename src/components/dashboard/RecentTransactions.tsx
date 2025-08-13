import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Coffee, 
  ShoppingBag, 
  Car, 
  BookOpen, 
  Utensils,
  CreditCard,
  Banknote,
  Smartphone
} from "lucide-react";

const transactions = [
  {
    id: 1,
    description: "Coffee @ CCD",
    category: "Food & Dining",
    amount: -180,
    paymentMode: "UPI",
    date: "Today, 2:30 PM",
    icon: Coffee,
    color: "text-amber-600"
  },
  {
    id: 2,
    description: "Textbooks Purchase",
    category: "Education",
    amount: -1250,
    paymentMode: "Card",
    date: "Yesterday, 11:15 AM",
    icon: BookOpen,
    color: "text-blue-600"
  },
  {
    id: 3,
    description: "Uber Ride",
    category: "Transport",
    amount: -85,
    paymentMode: "Wallet",
    date: "Yesterday, 6:45 PM",
    icon: Car,
    color: "text-green-600"
  },
  {
    id: 4,
    description: "Lunch at Cafeteria",
    category: "Food & Dining",
    amount: -120,
    paymentMode: "Cash",
    date: "2 days ago, 1:20 PM",
    icon: Utensils,
    color: "text-orange-600"
  },
  {
    id: 5,
    description: "Monthly Allowance",
    category: "Income",
    amount: +15000,
    paymentMode: "Bank Transfer",
    date: "3 days ago, 9:00 AM",
    icon: Banknote,
    color: "text-green-600"
  },
  {
    id: 6,
    description: "Online Shopping",
    category: "Shopping",
    amount: -899,
    paymentMode: "UPI",
    date: "4 days ago, 3:15 PM",
    icon: ShoppingBag,
    color: "text-purple-600"
  }
];

const paymentModeIcons = {
  "UPI": Smartphone,
  "Card": CreditCard,
  "Cash": Banknote,
  "Wallet": Smartphone,
  "Bank Transfer": Banknote
};

export function RecentTransactions() {
  return (
    <Card className="finance-card col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Recent Transactions
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Your latest financial activities
        </p>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border/50">
              <TableHead className="text-muted-foreground font-medium">Description</TableHead>
              <TableHead className="text-muted-foreground font-medium">Category</TableHead>
              <TableHead className="text-muted-foreground font-medium">Payment</TableHead>
              <TableHead className="text-muted-foreground font-medium">Date</TableHead>
              <TableHead className="text-right text-muted-foreground font-medium">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => {
              const Icon = transaction.icon;
              const PaymentIcon = paymentModeIcons[transaction.paymentMode as keyof typeof paymentModeIcons];
              
              return (
                <TableRow 
                  key={transaction.id} 
                  className="border-border/30 hover:bg-accent/50 transition-[var(--transition-smooth)]"
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-accent ${transaction.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-foreground">{transaction.description}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className="bg-muted text-muted-foreground border-0"
                    >
                      {transaction.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <PaymentIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {transaction.paymentMode}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {transaction.date}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    <span 
                      className={
                        transaction.amount > 0 
                          ? "text-finance-income" 
                          : "text-finance-expense"
                      }
                    >
                      {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}