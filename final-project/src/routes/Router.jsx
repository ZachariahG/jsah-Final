import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import CartPage from '../pages/Cart';
import SavedItemsPage from '../pages/Saved-Items';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<CartPage />} />
            <Route path="/" element={<SavedItemsPage />} />
        </Routes>
    )
}