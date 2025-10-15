import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const MOCK_ITEMS = [
  {
    id: 1,
    name: "Black T-Shirt",
    category: "tshirt",
    price: 34.99,
    image: "/assets/clothes/tshirt-noir.jpg",
  },
  {
    id: 2,
    name: "Blue Top",
    category: "tshirt",
    price: 44.99,
    image: "/assets/clothes/top-bleu.jpg",
  },
  {
    id: 3,
    name: "Navy Blazer Jacket",
    category: "jacket",
    price: 129.99,
    image: "/assets/clothes/veste-bleu-marine.jpg",
  },
  {
    id: 4,
    name: "Brown Bomber Jacket",
    category: "jacket",
    price: 149.99,
    image: "/assets/clothes/brown-jacket.jpg",
  },
  {
    id: 5,
    name: "Grey Sweater",
    category: "jacket",
    price: 79.99,
    image: "/assets/clothes/pull-gris.jpg",
  },
  {
    id: 6,
    name: "Brown Suede Boots",
    category: "shoes",
    price: 119.99,
    image: "/assets/clothes/chaussure.jpg",
  },
  {
    id: 7,
    name: "Blue Cargo Jeans",
    category: "trousers",
    price: 69.99,
    image: "/assets/clothes/jean-bleu.jpg",
  },
  {
    id: 8,
    name: "Navy Dress Pants",
    category: "trousers",
    price: 89.99,
    image: "/assets/clothes/pantalon-bleu-marine.jpg",
  },
  {
    id: 9,
    name: "Brown Tailored Trousers",
    category: "trousers",
    price: 94.99,
    image: "/assets/clothes/pantalon-marron.jpg",
  },
  {
    id: 10,
    name: "Studded Black Hobo Bag",
    category: "bags",
    price: 129.99,
    image: "/assets/clothes/black-bag.jpg",
  },
  {
    id: 11,
    name: "Black Baseball Cap",
    category: "hats",
    price: 29.99,
    image: "/assets/clothes/casquette.jpg",
  },
];

const Browse = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4 pt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/store")}
          >
            <ArrowLeft />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent">
            Browse Items
          </h1>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-8">
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
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground line-clamp-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {item.category}
                </p>
                <p className="text-lg font-bold text-primary">
                  ${item.price.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
