import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
import Container from "./Container";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { user, setUser, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-black"
          >
            MERN Store
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6 text-sm font-medium">
            {!isAuthenticated && (
              <>
                <Link
                  to="/login"
                  className="text-gray-600 hover:text-black"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-gray-600 hover:text-black"
                >
                  Register
                </Link>
                <Link to="/cart">
                      Cart ({cartItems.length})
                </Link>
              </>
            )}

            {isAuthenticated && !isAdmin && (
              <Link
                to="/orders"
                className="text-gray-600 hover:text-black"
              >
                My Orders
              </Link>
            )}

            {isAdmin && (
              <Link
                to="/admin/dashboard"
                className="text-gray-600 hover:text-black"
              >
                Admin
              </Link>
            )}

            {isAuthenticated && (
              <>
                <span className="text-gray-500">
                  {user?.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;