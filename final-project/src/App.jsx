
import React from 'react';
import './App.css';
import Header from './components/PageHeader';
import Footer from './components/PageFooter';
import CartPage from './pages/Cart';


function App() {
  return (
    <div className='App'>
      <Header/>
      <CartPage/>
      <Footer/>
    </div>
  )
}

export default App
