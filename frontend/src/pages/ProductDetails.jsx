import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p._id === Number(id));

  if (!product) {
    return (
      <Container>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Product Not Found</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <p className="text-xl text-gray-700 mb-6">
            ₹ {product.price}
          </p>

          <p className="text-gray-600 mb-6">
            {product.description}
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;