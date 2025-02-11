import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/Cart';
import HomePage from './pages/Home';
import SavedItemsPage from './pages/Saved-Items';
import AppRouter from './routes/AppRouter';

const App = () => (
    <AppRouter />
);

export default App;