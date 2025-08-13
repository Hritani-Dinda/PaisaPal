import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  CreditCard, 
  Receipt, 
  Target, 
  PiggyBank, 
  Settings,
  Wallet
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Expenses', href: '/expenses', icon: CreditCard },
  { name: 'Bills', href: '/bills', icon: Receipt },
  { name: 'Budget', href: '/budget', icon: Target },
  { name: 'Savings', href: '/savings', icon: PiggyBank },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border shadow-[var(--shadow-card)] z-40">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-border">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl gradient-yellow shadow-[var(--shadow-soft)]">
          <Wallet className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-foreground">PaisaPal</h1>
          <p className="text-sm text-muted-foreground">Student Finance</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-[var(--transition-smooth)] group",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent btn-yellow-hover"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon className={cn(
                    "w-5 h-5 transition-[var(--transition-smooth)]",
                    isActive ? "text-primary-foreground" : "group-hover:text-primary"
                  )} />
                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-6 left-4 right-4">
        <div className="finance-card p-4 gradient-yellow/10 border border-primary/20">
          <p className="text-sm font-medium text-foreground mb-1">💡 Pro Tip</p>
          <p className="text-xs text-muted-foreground">
            Track your daily expenses to build better spending habits!
          </p>
        </div>
      </div>
    </div>
  );
}