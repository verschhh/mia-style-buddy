import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Grid, Sparkles } from "lucide-react";

const Store = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4">
      <div className="max-w-4xl mx-auto space-y-8 pt-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold from-primary via-accent to-primary-dark bg-clip-text">
            MIA Store
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover your perfect style
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            className="p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary"
            onClick={() => navigate("/browse")}
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Grid className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Browse Items
                </h2>
                <p className="text-muted-foreground">
                  Explore our curated collection of fashion items
                </p>
              </div>
              <Button
                variant="ghost"
                className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
              >
                Start Browsing
              </Button>
            </div>
          </Card>

          <Card
            className="p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer group border-2 hover:border-accent"
            onClick={() => navigate("/recommendations")}
          >
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary-dark rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-foreground">
                  Custom Recommendation
                </h2>
                <p className="text-muted-foreground">
                  Get AI-powered personalized style suggestions
                </p>
              </div>
              <Button
                variant="ghost"
                className="w-full group-hover:bg-accent group-hover:text-white transition-colors"
              >
                Get Recommendations
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Store;
