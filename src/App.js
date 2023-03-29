// import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import { ToastContainer } from 'react-toastify';
import Homepage from './pages/homepage/Homepage.js'
import Cart from "./pages/cart/Cart";
import Header from './Header.js';
import SinglePageProduct from './SinglePageProduct.js'

import Navbar from './components/navbar/Navbar.js';


function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>

      <Header />
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='/' element={<Navbar />}></Route> */}
        <Route path='/' element={<Homepage/>}></Route>
        <Route path="/cart" element={<Cart />} />
        <Route path='/single-product/:userid' element={<SinglePageProduct />}></Route>


        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
       
      </Routes>
      
      
    </div>
  );
}

export default App;
