import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_DATA } from "../Redux/AppReducer/actionType";
import { ADD_DATA_SUCCESS, GET_DATA_SUCCESS } from "../Redux/AppReducer/action";


export const AddNote = () => {

  const [data , setData] = useState({
    title : "",
    description : ""
  })

  const dispatch = useDispatch();

  const handleClick =(e)=>{
    setData({...data , 
    [e.target.name] : e.target.value})
  }

  const handleSubmit =(e )=>{
      e.preventDefault();
      dispatch(ADD_DATA_SUCCESS(data))
      setData(" ");
      dispatch(GET_DATA_SUCCESS())
  }


  return (
    <div data-testid="add-note">
      <h1>Add Your Note</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input         
            data-testid="title-input"
            placeholder="Enter Title"
            name = "title"
            value = {data.title}
            onChange={handleClick}
          ></input>
          <label>Description</label>
          <input
            placeholder="Enter Description"         
            data-testid="description-input"
            name = "description"
            value = {data.description}
            onChange={handleClick}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    </div>
  );
};
