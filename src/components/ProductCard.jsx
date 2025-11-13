export default function ProductCard({ product, addToCart }) {
  return (
    <div className="p-4 bg-gray-50 rounded-xl shadow flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-30 h-30 object-contain mb-2 rounded"
      />

      <p className="font-medium">{product.name}</p>
      <p className="text-sm text-gray-500">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 bg-green-500 text-white px-3 py-1 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
