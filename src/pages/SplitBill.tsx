import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Users, Plus, Trash2, Calculator, Send, UserPlus, Copy } from "lucide-react";
import { useState } from "react";

interface Person {
  id: string;
  name: string;
  amount: number;
  phone?: string;
  paid: boolean;
}

const SplitBill = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [billName, setBillName] = useState("");
  const [splitType, setSplitType] = useState("equal");
  const [people, setPeople] = useState<Person[]>([
    { id: "1", name: "You", amount: 0, paid: false },
    { id: "2", name: "", amount: 0, paid: false }
  ]);

  const addPerson = () => {
    const newPerson: Person = {
      id: Date.now().toString(),
      name: "",
      amount: 0,
      paid: false
    };
    setPeople([...people, newPerson]);
  };

  const removePerson = (id: string) => {
    if (people.length > 2) {
      setPeople(people.filter(p => p.id !== id));
    }
  };

  const updatePerson = (id: string, field: keyof Person, value: any) => {
    setPeople(people.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const calculateSplit = () => {
    const total = parseFloat(totalAmount) || 0;
    if (splitType === "equal") {
      const perPerson = total / people.length;
      setPeople(people.map(p => ({ ...p, amount: perPerson })));
    }
  };

  const totalCalculated = people.reduce((sum, person) => sum + person.amount, 0);
  const remainder = (parseFloat(totalAmount) || 0) - totalCalculated;

  return (
    <AppLayout>
      <div className="space-y-6 max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Split Bill
          </h1>
          <p className="text-muted-foreground">
            Share expenses fairly with friends and family.
          </p>
        </div>

        {/* Bill Details */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calculator className="w-5 h-5" />
              <span>Bill Details</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="billName" className="text-base font-semibold">Bill Name *</Label>
              <Input
                id="billName"
                placeholder="e.g., Dinner at Restaurant"
                value={billName}
                onChange={(e) => setBillName(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="totalAmount" className="text-base font-semibold">Total Amount *</Label>
              <div className="relative">
                <span className="absolute left-3 top-3 text-muted-foreground">₹</span>
                <Input
                  id="totalAmount"
                  type="number"
                  placeholder="0.00"
                  className="pl-8 text-lg h-12"
                  value={totalAmount}
                  onChange={(e) => setTotalAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-base font-semibold">Split Method</Label>
              <Select value={splitType} onValueChange={setSplitType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Choose split method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="equal">Split Equally</SelectItem>
                  <SelectItem value="custom">Custom Amounts</SelectItem>
                  <SelectItem value="percentage">By Percentage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* People Involved */}
        <Card className="finance-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>People Involved ({people.length})</span>
            </CardTitle>
            <Button variant="outline" size="sm" onClick={addPerson}>
              <UserPlus className="w-4 h-4 mr-2" />
              Add Person
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {people.map((person, index) => (
              <div key={person.id} className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl gradient-yellow/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-primary">{index + 1}</span>
                  </div>
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Input
                      placeholder="Person's name"
                      value={person.name}
                      onChange={(e) => updatePerson(person.id, "name", e.target.value)}
                      disabled={index === 0}
                    />
                    <Input
                      placeholder="Phone (optional)"
                      value={person.phone || ""}
                      onChange={(e) => updatePerson(person.id, "phone", e.target.value)}
                    />
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-muted-foreground text-sm">₹</span>
                      <Input
                        type="number"
                        placeholder="0.00"
                        className="pl-8"
                        value={person.amount || ""}
                        onChange={(e) => updatePerson(person.id, "amount", parseFloat(e.target.value) || 0)}
                        disabled={splitType === "equal"}
                      />
                    </div>
                  </div>
                  {people.length > 2 && index !== 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removePerson(person.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                
                <div className="flex items-center justify-between pl-13">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id={`paid-${person.id}`}
                      checked={person.paid}
                      onCheckedChange={(checked) => updatePerson(person.id, "paid", checked)}
                    />
                    <Label htmlFor={`paid-${person.id}`} className="text-sm">
                      Already paid their share
                    </Label>
                  </div>
                  {person.paid && (
                    <Badge variant="secondary" className="text-green-600 bg-green-100 dark:bg-green-900/20">
                      Paid
                    </Badge>
                  )}
                </div>
                
                {index < people.length - 1 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Calculate Button */}
        {splitType === "equal" && (
          <Button 
            onClick={calculateSplit} 
            className="btn-yellow w-full h-12"
            disabled={!totalAmount || !billName}
          >
            <Calculator className="w-4 h-4 mr-2" />
            Calculate Split
          </Button>
        )}

        {/* Summary */}
        {totalAmount && (
          <Card className="finance-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Split Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Bill</p>
                  <p className="text-xl font-bold text-foreground">₹{parseFloat(totalAmount || "0").toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Per Person (Equal)</p>
                  <p className="text-xl font-bold text-primary">
                    ₹{((parseFloat(totalAmount || "0")) / people.length).toLocaleString()}
                  </p>
                </div>
              </div>

              {remainder !== 0 && (
                <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    Remainder: ₹{Math.abs(remainder).toFixed(2)} 
                    {remainder > 0 ? " (add to someone's share)" : " (subtract from someone's share)"}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <h4 className="font-semibold">Individual Breakdown:</h4>
                {people.map((person, index) => (
                  <div key={person.id} className="flex justify-between items-center p-3 rounded-lg bg-accent/30">
                    <span className="font-medium">
                      {person.name || `Person ${index + 1}`}
                      {person.paid && <Badge variant="secondary" className="ml-2 text-green-600">Paid</Badge>}
                    </span>
                    <span className="font-bold text-lg">₹{person.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-12">
            <Copy className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
          <Button variant="outline" className="h-12">
            Save Split
          </Button>
          <Button className="btn-yellow h-12">
            <Send className="w-4 h-4 mr-2" />
            Send Requests
          </Button>
        </div>

        {/* Recent Splits */}
        <Card className="finance-card">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Recent Splits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: "Pizza Night", amount: 1200, people: 4, date: "2 days ago" },
                { name: "Movie Tickets", amount: 800, people: 3, date: "1 week ago" },
                { name: "Groceries", amount: 2500, people: 2, date: "2 weeks ago" }
              ].map((split, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-accent/30 hover:bg-accent/50 transition-[var(--transition-smooth)] cursor-pointer">
                  <div>
                    <h4 className="font-medium">{split.name}</h4>
                    <p className="text-sm text-muted-foreground">{split.people} people • {split.date}</p>
                  </div>
                  <span className="font-bold">₹{split.amount}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="finance-card gradient-yellow/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-foreground">💡 Split Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Include tax and tip in the total amount for accurate splitting</p>
              <p>• Send payment requests immediately to avoid delays</p>
              <p>• Use photos to keep track of receipts and bills</p>
              <p>• Set up regular splits for recurring shared expenses</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default SplitBill;