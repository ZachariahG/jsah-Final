
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import React from 'react';
import './App.css';
import Header from './components/PageHeader';
import Footer from './components/PageFooter';
import CartPage from './pages/Cart';
import HomePage from './pages/Home';



const App = () => {
  return (
    <div className='App'>
      <Header/>
      <CartPage/>
      <Footer/>
    </div>
  )
}

export default App

// const App = () => (
//   <Router>
//     <Navbar/>

//     <Routes>
//       <Route path="/" element={<HomePage />}/>
//       <Route path="/saved-items" element={<SavedItemsPage />}/>
//       <Route path="/cart" element={<CartPage />}/>
//     </Routes>
//   </Router>
// )