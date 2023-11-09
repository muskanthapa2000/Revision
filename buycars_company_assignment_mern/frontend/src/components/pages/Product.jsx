import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSuccess } from '../redux/action';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const productData = useSelector((store) => store.product.productData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [priceFilter , setPriceFilter] = useState("");
  const [colorFilter , setColorFilter] = useState("");
  const[mileageFilter , setMileageFilter] = useState("");

  useEffect(() => {
    dispatch(getProductSuccess(priceFilter, colorFilter, mileageFilter));
  }, [priceFilter, colorFilter, mileageFilter]);

  return (
    <div>
      Filter by Price :
      <select onChange={(e)=>{setPriceFilter(e.target.value)}}>
        <option value="all">All</option>
        <option value="desc">Low to High</option>
        <option value="asc">High to Low</option>
      </select>
      Filter by Color :
      <select onChange={(e)=>{setColorFilter(e.target.value)}}>
        <option value="all">All</option>
        <option value="desc">Black</option>
        <option value="asc">White</option>
      </select>
      Filter by Mileage :
      <select onChange={(e)=>{setMileageFilter(e.target.value)}}>
        <option value="all">All</option>
        <option value="desc">Low to High</option>
        <option value="asc">High to Low</option>
      </select>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Year</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Mileage</th>
            <th style={tableHeaderStyle}>Power</th>
            <th style={tableHeaderStyle}>Speed</th>
            <th style={tableHeaderStyle}>Image</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((e) => (
            <tr key={e.id}>
              <td style={tableCellStyle}>{e.title}</td>
              <td style={tableCellStyle}>{e.name}</td>
              <td style={tableCellStyle}>{e.year}</td>
              <td style={tableCellStyle}>{e.price}</td>
              <td style={tableCellStyle}>{e.mileage}</td>
              <td style={tableCellStyle}>{e.power}</td>
              <td style={tableCellStyle}>{e.speed}</td>
              <td style={tableCellStyle}>
                <img src={e.image} alt={e.image} style={{ maxWidth: '50px', height: 'auto' }} />
              </td>
              <td style={tableCellStyle}>
                <button
                  style={editButtonStyle}
                  onClick={() => navigate(`/editproduct/${e.id}`)}
                >
                  EDIT
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
  backgroundColor: '#f2f2f2',
};

const tableCellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left',
};

const editButtonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '8px 12px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default Product;
