import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// Mock data - will be replaced with real data from Lovable Cloud
const MOCK_ITEMS = [
  { id: 1, name: "Classic White Tee", category: "tshirt", price: 29.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop" },
  { id: 2, name: "Denim Jacket", category: "jacket", price: 89.99, image: "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=400&h=500&fit=crop" },
  { id: 3, name: "Sneakers Pro", category: "shoes", price: 119.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop" },
  { id: 4, name: "Slim Fit Jeans", category: "trousers", price: 69.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop" },
  { id: 5, name: "Graphic Tee", category: "tshirt", price: 34.99, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop" },
  { id: 6, name: "Leather Jacket", category: "jacket", price: 199.99, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" },
];

const Browse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 pt-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/store")}>
            <ArrowLeft />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
            Browse Items
          </h1>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-8">
          {MOCK_ITEMS.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(`/item/${item.id}`)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground line-clamp-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground capitalize">{item.category}</p>
                <p className="text-lg font-bold text-primary">${item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
