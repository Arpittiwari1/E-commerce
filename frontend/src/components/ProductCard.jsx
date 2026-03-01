import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleClick = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition cursor-pointer p-4"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {product.name}
      </h2>

      <p className="text-gray-600 mb-4">
        ₹ {product.price}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(product);
        }}
        className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;