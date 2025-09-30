import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, X, Shirt } from "lucide-react";
import { toast } from "sonner";

// Mock data
const MOCK_RECOMMENDATIONS = {
  tshirt: [
    { id: 1, name: "Vintage Band Tee", price: 34.99, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=600&fit=crop" },
    { id: 2, name: "Plain White Tee", price: 24.99, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=600&fit=crop" },
  ],
  jacket: [
    { id: 3, name: "Denim Jacket", price: 89.99, image: "https://images.unsplash.com/photo-1543076659-9380cdf10613?w=400&h=600&fit=crop" },
  ],
  shoes: [
    { id: 4, name: "Classic Sneakers", price: 119.99, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=600&fit=crop" },
  ],
  trousers: [
    { id: 5, name: "Slim Jeans", price: 69.99, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=600&fit=crop" },
  ],
};

const Recommendations = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwipping, setIsSwipping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(null);

  const currentItems = category ? MOCK_RECOMMENDATIONS[category as keyof typeof MOCK_RECOMMENDATIONS] || [] : [];
  const currentItem = currentItems[currentIndex];

  const handleSwipe = (direction: "left" | "right") => {
    setSwipeDirection(direction);
    setIsSwipping(true);

    if (direction === "right") {
      toast.success("Added to favorites!");
    }

    setTimeout(() => {
      if (currentIndex < currentItems.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        toast("No more items in this category");
      }
      setIsSwipping(false);
      setSwipeDirection(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4">
      <div className="max-w-2xl mx-auto space-y-6 pt-4">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/store")}>
            <ArrowLeft />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
            Custom Recommendations
          </h1>
        </div>

        {/* Category Selection */}
        <Select value={category} onValueChange={(value) => { setCategory(value); setCurrentIndex(0); }}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tshirt">T-Shirts</SelectItem>
            <SelectItem value="jacket">Jackets</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="trousers">Trousers</SelectItem>
          </SelectContent>
        </Select>

        {/* Swipe Card */}
        {category && currentItem ? (
          <div className="relative">
            <Card
              className={`overflow-hidden shadow-2xl ${
                isSwipping ? (swipeDirection === "left" ? "swipe-left" : "swipe-right") : ""
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={currentItem.image}
                  alt={currentItem.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{currentItem.name}</h2>
                  <p className="text-xl text-primary font-semibold">${currentItem.price}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="iconLg"
                    onClick={() => handleSwipe("left")}
                    className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                  >
                    <X className="w-8 h-8" />
                  </Button>

                  <Button
                    variant="outline"
                    size="iconLg"
                    onClick={() => navigate(`/item/${currentItem.id}`)}
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Shirt className="w-6 h-6" />
                  </Button>

                  <Button
                    variant="action"
                    size="iconLg"
                    onClick={() => handleSwipe("right")}
                  >
                    <Heart className="w-8 h-8" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Counter */}
            <div className="text-center mt-4 text-muted-foreground">
              {currentIndex + 1} / {currentItems.length}
            </div>
          </div>
        ) : (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">Select a category to get started</p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
