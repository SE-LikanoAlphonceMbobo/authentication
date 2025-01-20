import React from 'react';
import Login from './Login.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup.jsx';
import Home from './Home.jsx';

const  App = () => {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter> 
  )
}

export default App
