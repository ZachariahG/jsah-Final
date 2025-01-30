
import React from 'react';
import './App.css';
import Header from './components/PageHeader';
import Footer from './components/PageFooter';
import CartPage from './pages/Cart';
import Home from './pages/Home';


function App() {
  return (
    <div className='App'>
      <Header/>
      <main className="App-content">
        <Home />
      </main>
      <Footer/>
    </div>
  )
}

export default App
