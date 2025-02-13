import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import CartPage from "../pages/Cart";
import SavedItemsPage from "../pages/Saved-Items";
import Hello from "../components/Hello";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Hello" element={<Hello />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/saved-items" element={<SavedItemsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
