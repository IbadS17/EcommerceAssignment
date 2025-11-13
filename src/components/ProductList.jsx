import ProductCard from "./ProductCard";

export default function ProductList({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  addToCart,
}) {
  return (
    <div className="flex-1 bg-white p-5 rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>

      {/* Category Filters */}
      <div className="flex gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
