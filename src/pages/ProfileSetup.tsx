import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const STYLE_INSPIRATIONS = [
  "Casual", "Streetwear", "Minimalist", "Business", "Sporty",
  "Vintage", "Elegant", "Punk", "Y2K", "Skater",
  "Chic", "Techwear", "Boho", "Grunge", "Formal"
];

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    tshirt: "",
    trousers: "",
    shoes: "",
    jacket: "",
    height: "",
    chest: "",
    waist: "",
    hips: "",
    gender: "",
    style: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Store user data (temporary - will be replaced with Lovable Cloud)
    localStorage.setItem("mia_user", JSON.stringify(formData));
    toast.success("Profile created successfully!");
    navigate("/activate");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary p-4 flex items-center justify-center">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
            Welcome to MIA
          </CardTitle>
          <CardDescription className="text-base">
            Your Intelligent Shopping Assistant
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Account Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Account Details</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="Create a password"
                  required
                />
              </div>
            </div>

            {/* Size Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Size Information</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tshirt">T-shirt Size</Label>
                  <Select value={formData.tshirt} onValueChange={(value) => setFormData({ ...formData, tshirt: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {["XS", "S", "M", "L", "XL", "XXL"].map(size => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="trousers">Trousers Size</Label>
                  <Select value={formData.trousers} onValueChange={(value) => setFormData({ ...formData, trousers: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {["28", "30", "32", "34", "36", "38", "40"].map(size => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="shoes">Shoes Size (EU)</Label>
                  <Input
                    id="shoes"
                    type="number"
                    value={formData.shoes}
                    onChange={(e) => setFormData({ ...formData, shoes: e.target.value })}
                    placeholder="42"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jacket">Jacket Size</Label>
                  <Select value={formData.jacket} onValueChange={(value) => setFormData({ ...formData, jacket: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {["XS", "S", "M", "L", "XL", "XXL"].map(size => (
                        <SelectItem key={size} value={size}>{size}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Measurements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Measurements (cm)</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    type="number"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    placeholder="175"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="chest">Chest</Label>
                  <Input
                    id="chest"
                    type="number"
                    value={formData.chest}
                    onChange={(e) => setFormData({ ...formData, chest: e.target.value })}
                    placeholder="95"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="waist">Waist</Label>
                  <Input
                    id="waist"
                    type="number"
                    value={formData.waist}
                    onChange={(e) => setFormData({ ...formData, waist: e.target.value })}
                    placeholder="80"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hips">Hips</Label>
                  <Input
                    id="hips"
                    type="number"
                    value={formData.hips}
                    onChange={(e) => setFormData({ ...formData, hips: e.target.value })}
                    placeholder="95"
                  />
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Gender</h3>
              <RadioGroup value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                <div className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female">Female</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Style Inspiration */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Style Inspiration</h3>
              <Select value={formData.style} onValueChange={(value) => setFormData({ ...formData, style: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your style" />
                </SelectTrigger>
                <SelectContent>
                  {STYLE_INSPIRATIONS.map(style => (
                    <SelectItem key={style} value={style.toLowerCase()}>{style}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" variant="gradient" size="lg" className="w-full">
              Next
              <ArrowRight className="ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileSetup;
