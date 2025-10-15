import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, X, Shirt } from "lucide-react";
import { toast } from "sonner";

// ✅ Proper image imports — Vite will fingerprint & bundle them
import tshirtNoir from "/assets/clothes/tshirt-noir.jpg";
import topBleu from "/assets/clothes/top-bleu.jpg";
import vesteBleuMarine from "/assets/clothes/veste-bleu-marine.jpg";
import brownJacket from "/assets/clothes/brown-jacket.jpg";
import pullGris from "/assets/clothes/pull-gris.jpg";
import chaussure from "/assets/clothes/chaussure.jpg";
import jeanBleu from "/assets/clothes/jean-bleu.jpg";
import pantalonBleuMarine from "/assets/clothes/pantalon-bleu-marine.jpg";
import pantalonMarron from "/assets/clothes/pantalon-marron.jpg";
import blackBag from "/assets/clothes/black-bag.jpg";
import casquette from "/assets/clothes/casquette.jpg";

// ✅ Strongly typed mock data
const MOCK_RECOMMENDATIONS = {
  tshirt: [
    {
      id: 1,
      name: "Black T-Shirt",
      price: 34.99,
      image: tshirtNoir,
    },
    {
      id: 2,
      name: "Blue Top",
      price: 44.99,
      image: topBleu,
    },
  ],
  jacket: [
    {
      id: 3,
      name: "Navy Blazer Jacket",
      price: 129.99,
      image: vesteBleuMarine,
    },
    {
      id: 8,
      name: "Brown Bomber Jacket",
      price: 149.99,
      image: brownJacket,
    },
    {
      id: 9,
      name: "Grey Sweater",
      price: 79.99,
      image: pullGris,
    },
  ],
  shoes: [
    {
      id: 4,
      name: "Brown Suede Boots",
      price: 119.99,
      image: chaussure,
    },
  ],
  trousers: [
    {
      id: 5,
      name: "Blue Cargo Jeans",
      price: 69.99,
      image: jeanBleu,
    },
    {
      id: 6,
      name: "Navy Dress Pants",
      price: 89.99,
      image: pantalonBleuMarine,
    },
    {
      id: 7,
      name: "Brown Tailored Trousers",
      price: 94.99,
      image: pantalonMarron,
    },
  ],
  bags: [
    {
      id: 10,
      name: "Studded Black Hobo Bag",
      price: 129.99,
      image: blackBag,
    },
  ],
  hats: [
    {
      id: 11,
      name: "Black Baseball Cap",
      price: 29.99,
      image: casquette,
    },
  ],
};

const Recommendations = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSwipping, setIsSwipping] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );

  const currentItems = category
    ? MOCK_RECOMMENDATIONS[category as keyof typeof MOCK_RECOMMENDATIONS] || []
    : [];
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
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/store")}
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
            Custom Recommendations
          </h1>
        </div>

        {/* Category Selection */}
        <Select
          value={category}
          onValueChange={(value) => {
            setCategory(value);
            setCurrentIndex(0);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tshirt">T-Shirts</SelectItem>
            <SelectItem value="jacket">Jackets</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="trousers">Trousers</SelectItem>
            <SelectItem value="bags">Bags</SelectItem>
            <SelectItem value="hats">Hats</SelectItem>
          </SelectContent>
        </Select>

        {/* Swipe Card */}
        {category && currentItem ? (
          <div className="relative">
            <Card
              className={`overflow-hidden shadow-2xl ${
                isSwipping
                  ? swipeDirection === "left"
                    ? "swipe-left"
                    : "swipe-right"
                  : ""
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
                  <h2 className="text-2xl font-bold text-foreground">
                    {currentItem.name}
                  </h2>
                  <p className="text-xl text-primary font-semibold">
                    ${currentItem.price}
                  </p>
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
            <p className="text-muted-foreground">
              Select a category to get started
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Recommendations;
