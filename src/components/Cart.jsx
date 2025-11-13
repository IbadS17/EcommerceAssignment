export default function Cart({ cart, setCart, removeFromCart, total }) {
  return (
    <div className="w-80 bg-white p-5 rounded-2xl shadow h-fit">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

      <div className="flex flex-col gap-3">
        {cart.length === 0 && <p className="text-gray-500">Cart is empty</p>}

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-2"
          >
            <p>
              {item.name} - ₹{item.price * item.qty}
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setCart((prev) =>
                    prev.map((p) =>
                      p.id === item.id && p.qty > 1
                        ? { ...p, qty: p.qty - 1 }
                        : p
                    )
                  )
                }
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.qty}</span>

              <button
                onClick={() =>
                  setCart((prev) =>
                    prev.map((p) =>
                      p.id === item.id ? { ...p, qty: p.qty + 1 } : p
                    )
                  )
                }
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            <button
              className="text-red-500 text-sm"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <h3 className="mt-5 font-bold text-lg">Total: ₹{total}</h3>
    </div>
  );
}
