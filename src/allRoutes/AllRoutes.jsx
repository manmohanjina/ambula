
 
 import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Todo from '../pages/Todo'
import Cart from '../pages/Cart'
import About from '../pages/About'
import ProductPage from '../pages/Product'
import GetSinglePage from '../pages/SinglePage'
 
 const AllRoutes = () => {
   return (
  <Routes>
    <Route  path='/' element={<Home/>} ></Route>
    <Route  path='/about' element={<About/>} ></Route>
    <Route  path='/contact' element={<Contact/>} ></Route>
    <Route  path='/todo' element={<Todo/>} ></Route>
    <Route path='/product' element={<ProductPage/>} ></Route>
    <Route path="/product/:id" element={<GetSinglePage/>} ></Route>
    <Route  path='/cart' element={<Cart/>} ></Route>
  </Routes>
   )
 }
 
 export default AllRoutes