import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-card/80 backdrop-blur-md border-b border-border shadow-[var(--shadow-card)] z-30">
      <div className="flex items-center justify-between h-full px-6">
        {/* Search */}
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search transactions, bills..." 
              className="pl-10 bg-muted/50 border-border/50 focus:border-primary focus:ring-primary/20 rounded-xl"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative hover:bg-accent rounded-xl btn-yellow-hover"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full border-2 border-card"></span>
          </Button>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-medium text-foreground">Arjun Kumar</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
            <Avatar className="w-8 h-8 ring-2 ring-primary/20">
              <AvatarImage src="" alt="Profile" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium">
                AK
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
}