import Container from "../components/Container";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container>
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
      </Container>
    );
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex justify-between items-center border-b py-4"
        >
          <div>
            <h2 className="font-semibold">{item.name}</h2>
            <p>₹ {item.price}</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => decreaseQty(item._id)}
              className="px-2 bg-gray-200"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() => increaseQty(item._id)}
              className="px-2 bg-gray-200"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-6 text-xl font-bold">
        Total: ₹ {totalPrice}
      </div>
    </Container>
  );
};

export default Cart;