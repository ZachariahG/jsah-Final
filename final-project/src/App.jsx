import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import CartPage from './pages/Cart';
import HomePage from './pages/Home';
import SavedItemsPage from './pages/Saved-Items';  
import Navbar from './components/Navbar';        

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/saved-items" element={<SavedItemsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  </Router>
);

export default App;