import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const MOCK_ITEMS = [
  {
    id: 1,
    name: "Black T-Shirt",
    category: "tshirt",
    price: 34.99,
    image: "/assets/clothes/tshirt-noir.jpg",
    description: "A timeless classic in black.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Gray"],
  },
  {
    id: 2,
    name: "Blue Top",
    category: "tshirt",
    price: 44.99,
    image: "/assets/clothes/top-bleu.jpg",
    description: "Comfortable blue top.",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "White"],
  },
  {
    id: 3,
    name: "Navy Blazer Jacket",
    category: "jacket",
    price: 129.99,
    image: "/assets/clothes/veste-bleu-marine.jpg",
    description: "Smart navy blazer.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy", "Black"],
  },
  {
    id: 4,
    name: "Brown Bomber Jacket",
    category: "jacket",
    price: 149.99,
    image: "/assets/clothes/brown-jacket.jpg",
    description: "Stylish brown bomber.",
    sizes: ["M", "L", "XL"],
    colors: ["Brown", "Tan"],
  },
  {
    id: 5,
    name: "Grey Sweater",
    category: "jacket",
    price: 79.99,
    image: "/assets/clothes/pull-gris.jpg",
    description: "Cozy grey sweater.",
    sizes: ["S", "M", "L"],
    colors: ["Grey"],
  },
  {
    id: 6,
    name: "Brown Suede Boots",
    category: "shoes",
    price: 119.99,
    image: "/assets/clothes/chaussure.jpg",
    description: "Premium suede boots.",
    sizes: ["40", "41", "42", "43"],
    colors: ["Brown"],
  },
  {
    id: 7,
    name: "Blue Cargo Jeans",
    category: "trousers",
    price: 69.99,
    image: "/assets/clothes/jean-bleu.jpg",
    description: "Casual cargo jeans.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blue"],
  },
  {
    id: 8,
    name: "Navy Dress Pants",
    category: "trousers",
    price: 89.99,
    image: "/assets/clothes/pantalon-bleu-marine.jpg",
    description: "Formal navy pants.",
    sizes: ["M", "L", "XL"],
    colors: ["Navy"],
  },
  {
    id: 9,
    name: "Brown Tailored Trousers",
    category: "trousers",
    price: 94.99,
    image: "/assets/clothes/pantalon-marron.jpg",
    description: "Tailored brown pants.",
    sizes: ["S", "M", "L"],
    colors: ["Brown"],
  },
  {
    id: 10,
    name: "Studded Black Hobo Bag",
    category: "bags",
    price: 129.99,
    image: "/assets/clothes/black-bag.jpg",
    description: "Chic black bag.",
    sizes: [],
    colors: ["Black"],
  },
  {
    id: 11,
    name: "Black Baseball Cap",
    category: "hats",
    price: 29.99,
    image: "/assets/clothes/casquette.jpg",
    description: "Classic cap.",
    sizes: [],
    colors: ["Black"],
  },
];

const ItemPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Find item dynamically based on URL param
  const itemId = Number(id);
  const item = MOCK_ITEMS.find((i) => i.id === itemId);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Item not found</p>
      </div>
    );
  }

  const handleAddToCart = () => toast.success("Added to cart!");
  const handleLike = () => toast.success("Added to favorites!");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-lg border-b border-border z-10 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft />
          </Button>
          <Button variant="ghost" size="icon" onClick={handleLike}>
            <Heart />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 space-y-6 pb-24">
        {/* Image */}
        <Card className="overflow-hidden">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </Card>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              {item.category}
            </p>
            <h1 className="text-3xl font-bold text-foreground mt-1">
              {item.name}
            </h1>
            <p className="text-2xl font-bold text-primary mt-2">
              ${item.price.toFixed(2)}
            </p>
          </div>

          {/* Description */}
          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-2">Description</h2>
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>

          {/* Sizes & Colors */}
          {item.sizes.length > 0 && (
            <Card>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h2 className="font-semibold text-lg mb-2">
                    Available Sizes
                  </h2>
                  <div className="flex gap-2 flex-wrap">
                    {item.sizes.map((size) => (
                      <Button key={size} variant="outline" size="sm">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-semibold text-lg mb-2">Colors</h2>
                  <div className="flex gap-2 flex-wrap">
                    {item.colors.map((color) => (
                      <Button key={color} variant="outline" size="sm">
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border p-4">
        <div className="max-w-4xl mx-auto">
          <Button
            onClick={handleAddToCart}
            variant="gradient"
            size="xl"
            className="w-full"
          >
            <ShoppingBag className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemPreview;
