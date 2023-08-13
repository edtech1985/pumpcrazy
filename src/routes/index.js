import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import { Main } from "./Routes";
import { CartProvider } from "../components/CartContext";
import Cookies from "../pages/Cookies";
import { Cardapio } from "../pages/Cardapio";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/cardapio" element={<Cardapio />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </Main>
  );
}
