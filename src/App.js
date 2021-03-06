import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext/CartContext";
import Home from "./views/Home/Home";
import Products from "./views/Products/Products";
import Product from "./views/Product/Product";
import Category from "./views/Category/Category";
import CartContainer from "./components/CartContainer/CartContainer";
import CheckoutContainer from "./components/CheckoutContainer/CheckoutContainer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
            <Routes>
              <Route exact path="*" element={<Home />} />
              <Route exact path="/products" element={<Products />} />
              <Route exact path="/product/:productId" element={<Product />} />
              <Route exact path="/category/:categoryId" element={<Category />} />
              <Route exact path="/cart" element={<CartContainer/>} />
              <Route exact path="/checkout" element={<CheckoutContainer/>} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}