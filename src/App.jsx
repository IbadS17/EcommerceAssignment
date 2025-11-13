import { useState } from "react";
import { initialProducts } from "./data/products";

import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Electronics", "Books", "Clothing"];

  const filteredProducts =
    selectedCategory === "All"
      ? initialProducts
      : initialProducts.filter((p) => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold">Dynamic Product Filter & Cart</h1>

      <div className="flex gap-10 w-full max-w-6xl">
        <ProductList
          products={filteredProducts}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          setCart={setCart}
          removeFromCart={removeFromCart}
          total={total}
        />
      </div>
    </div>
  );
}
