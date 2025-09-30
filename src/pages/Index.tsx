import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already set up profile
    const user = localStorage.getItem("mia_user");
    if (user) {
      navigate("/activate");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        {/* Logo/Icon */}
        <div className="mx-auto w-32 h-32 bg-gradient-to-br from-primary via-accent to-primary-dark rounded-3xl flex items-center justify-center pulse-glow">
          <Sparkles className="w-16 h-16 text-white" />
        </div>

        {/* Hero Text */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
            MIA
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-foreground">
            My Intelligent Assistant
          </p>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your personal AI-powered shopping companion. Discover fashion that fits your style, size, and personality.
          </p>
        </div>

        {/* CTA Button */}
        <Button
          onClick={() => navigate("/setup")}
          variant="gradient"
          size="xl"
          className="shadow-2xl"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Index;
