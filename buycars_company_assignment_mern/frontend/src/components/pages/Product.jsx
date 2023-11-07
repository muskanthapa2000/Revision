import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductSuccess } from '../redux/action';

export default function Product() {
  const productData = useSelector((store)=> store.product.productData)
  console.log(productData);
  const dispatch = useDispatch();

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
          </div>
        )    
      })
    }
  </div>
);
}
