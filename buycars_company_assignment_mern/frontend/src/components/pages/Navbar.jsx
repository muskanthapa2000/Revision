import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <Link to = "/">Product</Link>
        <Link to = "/login">Login</Link>
        <Link to = "/signup">Signup</Link>
        <Link to = "/addproduct">ADD Product</Link>
        <Link to = "/editproduct">Edit Product</Link>
        
    </div>
  )
}

export default Navbar