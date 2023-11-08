import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductSuccess } from '../redux/action';
import {useNavigate} from 'react-router-dom'

export default function Product() {
  const productData = useSelector((store)=> store.product.productData)
  console.log(productData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 useEffect(()=>{
    dispatch(getProductSuccess())
 } , [])

 return (
  <div>
    <div>Product</div>
    {
      productData.map((e) => {
        return (
          <div key={e.id}>
            {e.name}
            {e.title}
            {e.year}
            {e.price}
            {e.mileage}
            {e.power} 
            {e.speed}
            <button onClick={()=>{navigate(`/editproduct/${e.id}`)}}>EDIT</button>

          </div>
        )    
      })
    }
  </div>
);
}
