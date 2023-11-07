import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Product from "../pages/Product"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import AddProducts from '../pages/AddProduct'
import EditProduct from '../pages/EditProduct'

export default function AppRought() {
  return (
    <div>
      <Routes>
        <Route path="/" element ={<Product/>}></Route>
        <Route path="/login" element ={<Login/>}></Route>
        <Route path="/signup" element ={<Signup/>}></Route>
        <Route path="/addproduct" element ={<AddProducts/>}></Route>
        <Route path="/editproduct" element ={<EditProduct/>}></Route>
      </Routes>
    </div>
  )
}
