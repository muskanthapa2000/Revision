import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProductSuccess, postProductSuccess } from '../redux/action';

function AddProducts() {

  const dispatch = useDispatch();
  // console.log(Dispatch);
  const [formdata, setFormdata] = useState({
    name: '',
    title: '',
    year: '',
    price: '',
    mileage: '',
    power: '',
    speed: '',
    image: '',
    colorred: false,
    colorgreen: false,
    colorblack: false,
    colorwhite: false,
    colorblue: false,
    bulletpoint1: '',
    bulletpoint2: '',
    bulletpoint3: '',
    bulletpoint4: '',
    bulletpoint5: '',
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormdata({
      ...formdata,
      [name]: newValue,
    });
  };

console.log(formdata)
  const handlesubmit =(e)=>{
        e.preventDefault();
            dispatch(postProductSuccess(formdata))
            dispatch(getProductSuccess())
  }

  return (
    <div>
      <h1>ADD PRODUCT</h1>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="name">Model Name</label>
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={handleChange}
        />

        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={formdata.title}
          onChange={handleChange}
        />

        <label htmlFor="year">Model Year</label>
        <input
          type="number"
          name="year"
          value={formdata.year}
          onChange={handleChange}
        />

        <label htmlFor="price">Model Price</label>
        <input
          type="number"
          name="price"
          value={formdata.price}
          onChange={handleChange}
        />

        <label htmlFor="mileage">Mileage</label>
        <input
          type="number"
          name="mileage"
          value={formdata.mileage}
          onChange={handleChange}
        />

        <label htmlFor="power">Power (in BHP)</label>
        <input
          type="number"
          name="power"
          value={formdata.power}
          onChange={handleChange}
        />

        <label htmlFor="speed">Max Speed</label>
        <input
          type="number"
          name="speed"
          value={formdata.speed}
          onChange={handleChange}
        />

        <label htmlFor="color">Colors Available</label>
        <label htmlFor="colorred">
          Red
          <input
            type="checkbox"
            name="colorred"
            checked={formdata.colorred}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="colorgreen">
          Green
          <input
            type="checkbox"
            name="colorgreen"
            checked={formdata.colorgreen}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="colorblack">
          Black
          <input
            type="checkbox"
            name="colorblack"
            checked={formdata.colorblack}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="colorwhite">
          White
          <input
            type="checkbox"
            name="colorwhite"
            checked={formdata.colorwhite}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="colorblue">
          Blue
          <input
            type="checkbox"
            name="colorblue"
            checked={formdata.colorblue}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="bulletpoint1">Bulletpoint No. 1</label>
        <input
          type="text"
          name="bulletpoint1"
          value={formdata.bulletpoint1}
          onChange={handleChange}
        />

<label htmlFor="bulletpoint2">Bulletpoint No. 2</label>
        <input
          type="text"
          name="bulletpoint2"
          value={formdata.bulletpoint2}
          onChange={handleChange}
        />

<label htmlFor="bulletpoint3">Bulletpoint No. 3</label>
        <input
          type="text"
          name="bulletpoint3"
          value={formdata.bulletpoint3}
          onChange={handleChange}
        />

<label htmlFor="bulletpoint4">Bulletpoint No. 4</label>
        <input
          type="text"
          name="bulletpoint4"
          value={formdata.bulletpoint4}
          onChange={handleChange}
        />

<label htmlFor="bulletpoint5">Bulletpoint No. 5</label>
        <input
          type="text"
          name="bulletpoint5"
          value={formdata.bulletpoint5}
          onChange={handleChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddProducts;