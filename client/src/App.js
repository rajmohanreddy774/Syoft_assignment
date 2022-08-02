import React from 'react'
// import './App.css';
import { Routes, Route } from "react-router-dom";

import Login from './Login'
import Register from './Register'
import Product from './Product'

const App=()=>{
    return (
        <Routes>
     
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/product" element={<Product/>} />
      
</Routes>
    ) 
}

export default App;