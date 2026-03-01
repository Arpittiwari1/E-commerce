import Container from "../components/Container";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Home = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold text-gray-900 mb-10">
        Latest Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default Home;