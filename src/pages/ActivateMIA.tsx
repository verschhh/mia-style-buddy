import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { QrCode, KeyRound } from "lucide-react";
import { toast } from "sonner";

const ActivateMIA = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleScan = () => {
    // In a real app, this would open the camera for QR scanning
    // For now, we'll simulate activation
    toast.success("MIA Activated! Welcome to your store.");
    navigate("/store");
  };

  const handleCodeSubmit = () => {
    if (code.trim()) {
      toast.success("MIA Activated with code!");
      navigate("/store");
    } else {
      toast.error("Please enter a valid code");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary via-accent to-primary-dark rounded-full flex items-center justify-center pulse-glow">
            <QrCode className="w-12 h-12 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text">
            Scan me to activate MIA
          </CardTitle>
          <CardDescription>
            Scan the QR code at the store entrance or enter your activation code
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Button
            onClick={handleScan}
            variant="gradient"
            size="xl"
            className="w-full"
          >
            <QrCode className="mr-2" />
            Scan QR Code
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or</span>
            </div>
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="w-full">
                <KeyRound className="mr-2" />
                Use Activation Code
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enter Activation Code</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Activation Code</Label>
                  <Input
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter your code"
                  />
                </div>
                <Button
                  onClick={handleCodeSubmit}
                  variant="gradient"
                  className="w-full"
                >
                  Activate MIA
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivateMIA;
