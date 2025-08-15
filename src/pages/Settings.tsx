import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  CreditCard, 
  Download,
  Trash2,
  User,
  Plus
} from "lucide-react";

const Settings = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Customize your PaisaPal experience and manage your preferences.
          </p>
        </div>

        {/* Profile Settings */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" placeholder="Enter your full name" defaultValue="Rahul Sharma" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" defaultValue="rahul@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" defaultValue="+91 9876543210" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="college">College/University</Label>
                <Input id="college" placeholder="Enter your college name" defaultValue="Delhi University" />
              </div>
            </div>
            <Button className="btn-yellow">Save Profile</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Push Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive notifications about your expenses and bills
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get weekly expense summaries via email
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Bill Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Remind me about upcoming bill payments
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Savings Nudges</Label>
                <p className="text-sm text-muted-foreground">
                  Daily tips to help you save money
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Appearance Settings */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Palette className="w-5 h-5" />
              <span>Appearance</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <Select defaultValue="system">
                <SelectTrigger>
                  <SelectValue placeholder="Choose theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Currency</Label>
              <Select defaultValue="inr">
                <SelectTrigger>
                  <SelectValue placeholder="Choose currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inr">Indian Rupee (₹)</SelectItem>
                  <SelectItem value="usd">US Dollar ($)</SelectItem>
                  <SelectItem value="eur">Euro (€)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Date Format</Label>
              <Select defaultValue="dd-mm-yyyy">
                <SelectTrigger>
                  <SelectValue placeholder="Choose date format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                  <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                  <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Privacy & Security</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Two-Factor Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Biometric Authentication</Label>
                <p className="text-sm text-muted-foreground">
                  Use fingerprint or face recognition to unlock
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Data Analytics</Label>
                <p className="text-sm text-muted-foreground">
                  Help improve PaisaPal by sharing anonymous usage data
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="pt-4">
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Connected Accounts */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="w-5 h-5" />
              <span>Connected Accounts</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">SBI</span>
                  </div>
                  <div>
                    <p className="font-medium">State Bank of India</p>
                    <p className="text-sm text-muted-foreground">****1234</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/30">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-purple-500 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">PP</span>
                  </div>
                  <div>
                    <p className="font-medium">PayPal</p>
                    <p className="text-sm text-muted-foreground">rahul@example.com</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Disconnect
                </Button>
              </div>
            </div>
            
            <Button className="btn-yellow w-full">
              <Plus className="w-4 h-4 mr-2" />
              Connect New Account
            </Button>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Data Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <div className="flex items-center space-x-2 mb-2">
                  <Download className="w-4 h-4" />
                  <span className="font-medium">Export Data</span>
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  Download all your financial data in CSV format
                </p>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start border-red-200 hover:bg-red-50 dark:border-red-800 dark:hover:bg-red-900/10">
                <div className="flex items-center space-x-2 mb-2">
                  <Trash2 className="w-4 h-4 text-red-500" />
                  <span className="font-medium text-red-500">Delete Account</span>
                </div>
                <p className="text-sm text-muted-foreground text-left">
                  Permanently delete your account and all data
                </p>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* App Information */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <SettingsIcon className="w-5 h-5" />
              <span>App Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Version</p>
                <p className="font-medium">1.2.3</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Updated</p>
                <p className="font-medium">August 15, 2024</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="flex-1">
                Terms of Service
              </Button>
              <Button variant="outline" className="flex-1">
                Privacy Policy
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Settings;