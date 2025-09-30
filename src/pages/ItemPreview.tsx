import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

// Mock data
const MOCK_ITEM = {
  id: 1,
  name: "Classic White Tee",
  category: "T-Shirt",
  price: 29.99,
  description: "A timeless classic that never goes out of style. Made from premium cotton for ultimate comfort.",
  image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["White", "Black", "Gray"],
};

const ItemPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    toast.success("Added to cart!");
  };

  const handleLike = () => {
    toast.success("Added to favorites!");
  };

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
              src={MOCK_ITEM.image}
              alt={MOCK_ITEM.name}
              className="w-full h-full object-cover"
            />
          </div>
        </Card>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wide">{MOCK_ITEM.category}</p>
            <h1 className="text-3xl font-bold text-foreground mt-1">{MOCK_ITEM.name}</h1>
            <p className="text-2xl font-bold text-primary mt-2">${MOCK_ITEM.price}</p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-2">Description</h2>
              <p className="text-muted-foreground">{MOCK_ITEM.description}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h2 className="font-semibold text-lg mb-2">Available Sizes</h2>
                <div className="flex gap-2 flex-wrap">
                  {MOCK_ITEM.sizes.map((size) => (
                    <Button key={size} variant="outline" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-lg mb-2">Colors</h2>
                <div className="flex gap-2">
                  {MOCK_ITEM.colors.map((color) => (
                    <Button key={color} variant="outline" size="sm">
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Fixed Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border p-4">
        <div className="max-w-4xl mx-auto">
          <Button onClick={handleAddToCart} variant="gradient" size="xl" className="w-full">
            <ShoppingBag className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ItemPreview;
