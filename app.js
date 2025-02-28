import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Lookbook from "./pages/Lookbook";
import Checkout from "./pages/Checkout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LookbookGrid from "./components/LookbookGrid";
import ProductCatalog from "./components/ProductCatalog";
import SearchBar from "./components/SearchBar";
import FilterOptions from "./components/FilterOptions";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import BackendService from "./services/BackendService";
import PaymentGateway from "./services/PaymentGateway";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<>
          <SearchBar />
          <FilterOptions />
          <ProductCatalog />
        </>} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <LookbookGrid />
      <Footer />
    </Router>
  );
}

export default App;