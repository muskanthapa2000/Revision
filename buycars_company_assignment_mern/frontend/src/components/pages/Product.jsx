import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductSuccess } from '../redux/action';
import { useNavigate } from 'react-router-dom';

export default function Product() {
  const productData = useSelector((store) => store.product.productData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductSuccess());
  }, []);

  // Define inline styles
  const productItemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  };

  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginTop: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '5px',
  };

  const detailsStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '10px',
  };

  const detailsItemStyle = {
    flex: 1,
    padding: '5px',
  };

  const labelStyle = {
    fontWeight: 'bold',
  };

  const valueStyle = {
    color: '#555',
  };

  return (
    <div>
      <div>Product</div>
      {productData.map((e) => (
        <div key={e.id} style={productItemStyle}>
          <div style={titleStyle}>{e.title}</div>


          <div style={detailsStyle}>
          <div style={detailsItemStyle}>
              <span style={labelStyle}>name:</span>
              <span style={valueStyle}>{e.name}</span>
            </div>

            <div style={detailsItemStyle}>
              <span style={labelStyle}>Year:</span>
              <span style={valueStyle}>{e.year}</span>
            </div>
            <div style={detailsItemStyle}>
              <span style={labelStyle}>Price:</span>
              <span style={valueStyle}>{e.price}</span>
            </div>
            <div style={detailsItemStyle}>
              <span style={labelStyle}>Mileage:</span>
              <span style={valueStyle}>{e.mileage}</span>
            </div>
            <div style={detailsItemStyle}>
              <span style={labelStyle}>Power:</span>
              <span style={valueStyle}>{e.power}</span>
            </div>
            <div style={detailsItemStyle}>
              <span style={labelStyle}>Speed:</span>
              <span style={valueStyle}>{e.speed}</span>
            </div>
          </div>
          <img src={e.image} alt={e.image} style={imageStyle} width="100px" />
          <button
            onClick={() => navigate(`/editproduct/${e.id}`)}
            style={buttonStyle}
          >
            EDIT
          </button>
        </div>
      ))}
    </div>
  );
}
