"use server";

//import { CartItem } from "@/types";

// param: data: CartItem

export async function addItemToCart() {
  return {
    success: true,
    message: "Item added to cart",
  };
}
