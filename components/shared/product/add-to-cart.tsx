"use client";

import { useRouter } from "next/navigation";

import { CartItem } from "@/types";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { addItemToCart } from "@/lib/actions/cart.actions";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast({
        variant: "destructive",
        description: res.message,
      });
      return;
    }

    // Handle success add to cart
    toast({
      description: `${item.name} added to cart`,
      action: (
        <ToastAction
          className="bg-primary text-white hver:bg-gray-800"
          altText="Go to Cart"
          onClick={() => router.push("/cart")}
        >
          Got To Cart
        </ToastAction>
      ),
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus /> Add To Cart
    </Button>
  );
};

export default AddToCart;
